using ElectionService.Models;
using MediatR;

namespace ElectionService.Queries
{
    public class GetVotersQuery : IRequest<IEnumerable<VoterDto>>
    {
        
    }
}