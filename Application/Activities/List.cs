using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;
using Application.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.Activities
{
    public class List
    {
        public class Query : IRequest<Result<PagedList<ActivityDto>>>
        {
            public PagingParams Params {get; set;}
        }

        public class Handler : IRequestHandler<Query, Result<PagedList<ActivityDto>>>
        {
        private readonly DataContext _context;
        private readonly ILogger<List> _logger;
        private readonly IMapper _mapper;
        private readonly IUserAccessor _userAccessor;
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
            _userAccessor = userAccessor;
            _mapper = mapper;

            _context = context;
            }

            public async Task<Result<PagedList<ActivityDto>>> Handle(Query request, CancellationToken cancellationToken)
            {
                var query = _context.Activities
                
                .ProjectTo<ActivityDto>(_mapper.ConfigurationProvider,
                new {currentUsername = _userAccessor.GetUsername()})
                .AsQueryable();

                return Result<PagedList<ActivityDto>>.Success(
                    await PagedList<ActivityDto>.CreateAsync(query, request.Params.PageNumber,
                    request.Params.PageSize)
                    );
            }
        }
    }
}