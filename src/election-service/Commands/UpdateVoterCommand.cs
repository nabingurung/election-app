using ElectionService.Models;
using MediatR;

namespace ElectionService.Commands
{
    public class UpdateVoterCommand : IRequest<Voter>
    {
        public VoterDto Voter { get; set; }
    }
}