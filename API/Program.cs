
using Application.Activities;

var builder = WebApplication.CreateBuilder(args);

// Add Services Container
builder.Services.AddControllers(opt =>
{
    var policy = new AuthorizationPolicyBuilder().RequireAuthenticatedUser().Build();
    opt.Filters.Add(new AuthorizeFilter(policy));
});

builder.Services.AddApplicationServices(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();
//Configure the HTTP request pipeline
app.UseMiddleware<ExceptionMiddleware>();

app.UseXContentTypeOptions();
app.UseReferrerPolicy(opt => opt.NoReferrer());
app.UseXXssProtection(opt => opt.EnabledWithBlockMode());
app.UseXfo(opt => opt.Deny());
app.UseCsp(opt => opt
.BlockAllMixedContent()
.StyleSources(s => s.Self().CustomSources("https://fonts.googleapis.com"))
.FontSources(s => s.Self().CustomSources("https://fonts.gstatic.com", "data:"))
.FormActions(s => s.Self())
.FrameAncestors(s => s.Self())
.ImageSources(s => s.Self().CustomSources("blob:", "https://res.cloudinary.com", "https://platform-lookaside.fbsbx.com"))
.ScriptSources(s => s.Self().CustomSources("sha256-xf9uasCuSmsdg8wWbtDMx7pqLTf5pwpWU/rfDrij3Jc=",
"sha256-AaD233S3nLNrz8GvI5Ct4JgDe2xTKcgZbhIdfyO3wrA=",
"sha256-Tui7QoFlnLXkJCSl1/JvEZdIXTmBttnWNxzJpXomQjg="))
// .CustomSources("https://connect.facebook.net"))
);

if (app.Environment.IsDevelopment())
{

    app.UseSwagger();
    app.UseSwaggerUI();
}
else
{
    app.Use(async (context, next) =>
    {
        context.Response.Headers.Add("Strict-Transport-Security", "max-age=31536000");
        await next.Invoke();
    });
}

app.UseCors("CorsPolicy");

app.UseAuthentication();
app.UseAuthorization();

app.UseDefaultFiles();
app.UseStaticFiles();

app.MapControllers();
app.MapHub<ChatHub>("/chat");
app.MapFallbackToController("Index", "Fallback");

using var scope = app.Services.CreateScope();

var services = scope.ServiceProvider;

try
{
    var context = services.GetRequiredService<DataContext>();
    var userManager = services.GetRequiredService<UserManager<AppUser>>();
    await context.Database.MigrateAsync();
    await Seed.SeedData(context, userManager);
}
catch (Exception ex)
{
    var logger = services.GetRequiredService<ILogger<Program>>();
    logger.LogError(ex, "An error occured during migration");
}
await app.RunAsync();

