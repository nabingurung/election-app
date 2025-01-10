// filepath: /Users/nabingurung/dev/ng-github/election-app/src/election-service/Controllers/VoterController.cs
using System.Collections.Generic;
using System.Threading.Tasks;
using ElectionService.Commands;
using ElectionService.Dtos;
using ElectionService.Models;
using ElectionService.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace ElectionService.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class VoterController : ControllerBase
    {
        private readonly IMediator _mediator;

        public VoterController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost]
        public async Task<IActionResult> RegisterVoter([FromBody] RegisterVoterRequest request)
        {
            var command = new RegisterVoterCommand
            {
                RegisterVoterRequest = request
            };

            var voterId = await _mediator.Send(command);
            return CreatedAtAction(nameof(GetVoterById), new { id = voterId }, voterId);
        }
      

        [HttpGet]
        public async Task<IEnumerable<Voter>> GetVoters()
        {
            return await _mediator.Send(new GetVotersQuery());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Voter>> GetVoterById(int id)
        {
            var voters = await _mediator.Send(new GetVotersQuery());
            var voter = voters.FirstOrDefault(v => v.Id == id);

            if (voter == null)
            {
                return NotFound();
            }

            return voter;
        }

        [HttpGet("by-city")]
    public async Task<ActionResult<IEnumerable<VoterByCityDto>>> GetVotersByCity()
    {
        var voters = await _mediator.Send(new GetVotersQuery());
        var votersByCity = voters
            .GroupBy(v => v.City)
            .Select(g => new VoterByCityDto
            {
                City = g.Key,
                Count = g.Count()
            })
            .ToList();

        return Ok(votersByCity);
    }
    }
}