# Reactivities-.NET-CORE-7-AND-REACT-18-AND-MOBX6-MS-SQL-
&lt;/> Hello World &lt;/>



.net 5
react 17
mobx 6

dotnet.microsoft.com
.net core 6

node js dl current or 16.13 recommended

nvm node version manager kung marami version gagamiti 
mobx --version
nvm ls
nvm use 12.20.1
nvm use node


git download for source controll
post man app
dotnet --info
dotnet  -h

dotnet new 


dotnet new sln 
dir    or ls
-n = for name
dotnet new webapi -n API
dotnet new classlib -n Application
dotnet new classlib -n Domain
dotnet new classlib -n Persistence
dotnet sln add API/API.csproj
dotnet sln add Application 
dotnet sln add Persistence
dotnet sln add Domain
 

dotnet sln list

cd API
dotnet add reference ../Application
cd ..
cd Application
dotnet add reference ../Persistence
dotnet add reference ../Domain
cd ..
cd Persistence
dotnet add reference ../Domain


ctrl o search .Net Generate assets for build  and debug vs code




cd API
dotnet run
dotnet watch run

install Sql Lite COre 6.0 in Persistence

dotnet tool list --global

https://www.nuget.org/packages/dotnet-ef/
dotnet tool install --global dotnet-ef --version 6.0.1
dotnet tool update --global dotnet-ef --version 5.0.1
dotnet ef -h
dotnet ef migrations add InitialCreate -p Persistence -s API
dotnet ef database -h
dotnet ef database update
git status
git init
dotnet new gitignore

git add .



React Application

node -- version
npm --version

npx create-react-app client-app --use-npm --template typescript

cd client-app
npm start
https://github.com/axios/axios
npm install axios

https://react.semantic-ui.com/
npm install semantic-ui-react semantic-ui-css


MediatR.Extensions.Microsoft.DependencyInjection Install in API And Application
Autommaper nugget in => Application and API 
https://reactjs.org/docs/faq-structure.html

http://localhost:5000/swagger/index.html
json to ts

http://json2ts.com/
npm install uuid
npm i --save-dev @types/uuid

npm install mobx mobx-react-lite

Javascript Map MSDN documentation
reactrouter.com
npm install react-router-dom@5.3.0 
@types/react-router-dom@5.3.2


npm install react-calendar
npm install @types/react-calendar
https://docs.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-6.0


FluentValidation.AspNetCore by Jeremy Skinner
v10.3.6


npm install react-toastify

dotnet ef database drop -s API -p Persistence

formik.org
npm install formik
npm install yup
npm install @types/yup --save-dev

reactdatepicker.com
npm install react-datepicker
npm install @types/react-datepicker --save-dev

npm ls date-fns
npm install date-fns@2.28.0
date-fns.org

//backend
 domain
Microsoft.AspNetCore.Identity.EntityFrameworkCore by

dotnet restore quick fix haha
dotnet ef migrations add IdentityAdded -p Persistence -s API

project and startup

Microsoft.IdentityModel.Tokens by Microsoft
v6.15.0
Includes types that provide support for SecurityTokens, Cryptographic operations: Signing, Verifying Signatures, Encryption.


System.IdentityModel.Tokens.Jwt by Microsoft
v6.15.0
Includes types that provide support for creating, serializing and validating JSON Web Tokens.


jwt.io

Microsoft.AspNetCore.Authentication.JwtBearer by Microsoft
v6.0.1
ASP.NET Core middleware that enables an application to receive an OpenID Connect bearer token. This package was built from the source

dotnet ef migrations add ActivityAttendee -p Persistence -s API

dotnet ef migrations remove -p Persistence -s API
dotnet new classlib -n Infrastructure
dotnet sln add Infrastructure
cd Infrastructure
dotnet add reference ../Application
cd ..
cd API
dotnet add reference ../Infrastructure
cd ..
dotnet restore

docs.microsoft.com/en-us/ef/ef6/querying/related-data#lazy-loading

cd ..
dotnet ef migrations add AddCancelledProperty -p Persistence -s API
dotnet ef database drop -p Persistence -s API


https://cloudinary.com/homepage-1-25-22


CloudinaryDotNet by Cloudinary  nbugget package
dotnet ef migrations add PhotoEntityAdded -p Persistence -s API

react-dropzone

npm install react-dropzone

react-cropper
npm install react-cropper

npm install react-cropper --legacy-peer-deps


cd API
dotnet ef migrations add CommentEntityAdded -p Persistence -s API


npm install @microsoft/signalr

dotnet ef migrations add FollowingEntityAdded -p Persistence -s API

npm install react-infinite-scroller
npm install @types/react-infinite-scroller




reactrouter.com
Scroll restoratiopn to top
https://v5.reactrouter.com/web/guides/scroll-restoration
adding custom environment variable
https://create-react-app.dev/docs/adding-custom-environment-variables
 npm run build
 The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build
  
  https://www.postgresql.org/
  docker.com
  docker
  docker run --name dev -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=secret -p 5432:5432 -d postgres:latest
  https://docs.microsoft.com/en-us/ef/core/providers/?tabs=dotnet-core-cli
  Npgsql.EntityFrameworkCore.PostgreSQL by Shay Rojansky,Austin Drenski,Yoh Deadfall
v6.0.3
PostgreSQL/Npgsql provider for Entity Framework Core.

dotnet ef migrations add PGInitial -p Persistence -s API

dotnet tool update -g dotnet-ef
PostgreSQL Management To


  
  
  
  
migrating sa mSSQL
Reactivitis in cmd using .. animal
dotnet ef migrations add NewDbSetup -p Persistence -s API
dotnet tool update -g dotnet-ef
cd API

https://developers.facebook.com/
cd client-app
npm install @types/facebook-js-sdk --save-dev



npm install rimraf --save-dev  ==  post vbuild

npm run build


dotnet ef migrations add RefreshTokens -p Persistence -s API


app.sendgrid.com




npm outdated
npm update

npx npm-check-updates -u   update the package json file






securityheaders.com
NWebsec.AspNetCore.Middleware
dependencies needed for requirments


Mobile friendly test sa google

update frontend packages

npm outdated
npm update

after updating file to .net 7 
dotnet restore
dotnet build
dotnet watch --no-hot-reload
dotnet ef database drop -s API -p Persistence



npm install react@latest react-dom@latest react-scripts@latest
npm outdated

npm i -g npm-check-updates && ncu -u && npm i
