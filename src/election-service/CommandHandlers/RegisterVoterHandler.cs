using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElectionService.Commands;
using ElectionService.Infrastructure;
using ElectionService.Models;
using MediatR;
using Microsoft.EntityFrameworkCore.Storage;

namespace ElectionService.CommandHandlers
{
    public class RegisterVoterHandler : IRequestHandler<RegisterVoterCommand, int>
    {
        private readonly DatabaseContext _context;
        public RegisterVoterHandler(DatabaseContext context)
        {
           _context = context;
            
        }
        async Task<int> IRequestHandler<RegisterVoterCommand, int>.Handle(RegisterVoterCommand request, CancellationToken cancellationToken)
        {
            var voter = new Voter
            {
                FirstName = request.RegisterVoterRequest.FirstName,
                LastName = request.RegisterVoterRequest.LastName,
                DateOfBirth = request.RegisterVoterRequest.DateOfBirth,
                Address = request.RegisterVoterRequest.Address,
                Email = request.RegisterVoterRequest.Email,
                PhoneNumber = request.RegisterVoterRequest.PhoneNumber,
                City = request.RegisterVoterRequest.City,
                State = request.RegisterVoterRequest.State,
                ZipCode = request.RegisterVoterRequest.ZipCode,
                HasVoted = false,
                CreatedAt = DateTime.Now,
                UpdatedAt = DateTime.Now,
                IsRegistered = true,
                MiddleName = request.RegisterVoterRequest.MiddleName,
                ReferredBy = request.RegisterVoterRequest.ReferredBy

            };
            _context.Voters.Add(voter);
            await _context.SaveChangesAsync(cancellationToken);
            return voter.Id;
        }
    }
}