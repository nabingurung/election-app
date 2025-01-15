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
    public class GetVotersQueryHandler : IRequestHandler<GetVotersQuery, IEnumerable<VoterDto>>
    {
        private readonly DatabaseContext _context;
        public GetVotersQueryHandler(DatabaseContext context)
        {
            _context = context;
            
        }
        public async Task<IEnumerable<VoterDto>> Handle(GetVotersQuery request, CancellationToken cancellationToken)
        {
            // return the VoterDto list
            var voters =  await _context.Voters.ToListAsync(cancellationToken);
            return new List<VoterDto>(voters.Select(v => new VoterDto
            {
                Id = v.Id,
                FirstName = v.FirstName,
                MiddleName= v.MiddleName,
                LastName = v.LastName,
                IsRegistered = v.IsRegistered,
                HasFamilyMember = v.HasFamilyMember,
                HasVoted = v.HasVoted,
                ReferredBy = v.ReferredBy,
                UpdatedAt = v.UpdatedAt,
                UpdatedBy = v.UpdatedBy,
                TransactionUserId = v.TransactionUserId,
                City= v.City
            }));
        }
    }
}