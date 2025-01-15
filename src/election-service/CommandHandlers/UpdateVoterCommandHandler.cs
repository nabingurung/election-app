using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElectionService.Commands;
using ElectionService.Infrastructure;
using ElectionService.Models;
using MediatR;

namespace ElectionService.CommandHandlers
{
    public class UpdateVoterCommandHandler : IRequestHandler<UpdateVoterCommand, Voter>
    {
        private DatabaseContext _context { get; }

        public UpdateVoterCommandHandler(DatabaseContext databaseContext)
        {
            _context = databaseContext;

        }
        public async Task<Voter> Handle(UpdateVoterCommand request, CancellationToken cancellationToken)
        {
            System.Console.WriteLine("UpdateVoterCommandHandler" + request.Voter);
            var voter = request.Voter;
           var existingVoter = await _context.Voters.FindAsync(voter.Id);
        if (existingVoter == null)
        {
            return null;
        }

        existingVoter.FirstName = voter.FirstName;
        existingVoter.MiddleName = voter.MiddleName;
        existingVoter.LastName = voter.LastName;
        existingVoter.City = voter.City;
        existingVoter.IsRegistered = voter.IsRegistered;
        existingVoter.HasVoted = voter.HasVoted;
        existingVoter.ReferredBy = voter.ReferredBy;
        existingVoter.HasFamilyMember = voter.HasFamilyMember;
        existingVoter.UpdatedAt = DateTime.Now;
        existingVoter.UpdatedBy= voter.UpdatedBy;

        await _context.SaveChangesAsync();

        return existingVoter;
        }
    }

}