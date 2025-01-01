using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ElectionService.Dtos;
using MediatR;

namespace ElectionService.Commands
{
    public class RegisterVoterCommand : IRequest<int>
    {
        public RegisterVoterRequest RegisterVoterRequest { get; set; }
    }
}