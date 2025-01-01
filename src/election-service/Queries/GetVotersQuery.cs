using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElectionService.Models;
using MediatR;

namespace ElectionService.Queries
{
    public class GetVotersQuery : IRequest<IEnumerable<Voter>>
    {
        
    }
}