using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<List<Activity>>>
        {
            
        }

        public class Handler : IRequestHandler<Query, Result<List<Activity>>>
        {
        private readonly DataContext _context;
        private readonly ILogger<List> _logger;
            public Handler(DataContext context)
            {

            _context = context;
            }

            public async Task<Result<List<Activity>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var activities = await _context.Activities
                .Include(a => a.Attendees)
                .ThenInclude(u => u.AppUser)
                .ToListAsync(cancellationToken);


                return Result<List<Activity>>.Success(activities);
            }
        }
    }
}