using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElectionService.Infrastructure;
using ElectionService.Models;
using ElectionService.Queries;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace ElectionService.QueriesHandler
{
    public class GetVotersQueryHandler : IRequestHandler<GetVotersQuery, IEnumerable<Voter>>
    {
        private readonly DatabaseContext _context;
        public GetVotersQueryHandler(DatabaseContext context)
        {
            _context = context;
            
        }
        public async Task<IEnumerable<Voter>> Handle(GetVotersQuery request, CancellationToken cancellationToken)
        {
            return await _context.Voters.ToListAsync(cancellationToken);
        }
    }
}