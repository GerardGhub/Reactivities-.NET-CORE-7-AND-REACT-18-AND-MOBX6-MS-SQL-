using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Core;

namespace Application.Activities
{
    public class ActivityParams : PagingParams
    {
        public bool IsGoing {get; set;}
        public bool IsHost {get; set;}
        public DateTime StartDate {get; set;} = DateTime.UtcNow;
    }
}