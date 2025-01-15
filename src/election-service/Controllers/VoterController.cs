// filepath: /Users/nabingurung/dev/ng-github/election-app/src/election-service/Controllers/VoterController.cs
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
        private readonly List<string> excludedEmails = new List<string> 
        { "nabingurung82@gmail.com"};

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
        public async Task<ActionResult<IEnumerable<Voter>>> GetVoters()
        {
            var email = HttpContext.Request.Headers["X-User-Email"].FirstOrDefault();
            if (string.IsNullOrEmpty(email))
            {
                return BadRequest("User email is missing");
            }
            Console.WriteLine("Email: " + email);
            var voters =  await _mediator.Send(new GetVotersQuery());
            // Apply filter if the email is not in the excluded list
            if (!excludedEmails.Contains(email))
            {
                System.Console.WriteLine("Filtering voters by email");
                voters = voters.Where(v => v.TransactionUserId.Trim().ToUpper()
                 == email.Trim().ToUpper()).ToList();
            }
            return Ok(voters);
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
            var email = HttpContext.Request.Headers["X-User-Email"].FirstOrDefault();
            if (string.IsNullOrEmpty(email))
            {
                return BadRequest("User email is missing");
            }
            var voters = await _mediator.Send(new GetVotersQuery());
             if (!excludedEmails.Contains(email))
            {
                System.Console.WriteLine("Filtering voters by email");
                voters = voters.Where(v => v.TransactionUserId.Trim().ToUpper()
                 == email.Trim().ToUpper()).ToList();
            }
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

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateVoter(int id, [FromBody] Voter voter)
        {
            System.Console.WriteLine("UpdateVoter" + voter);
            if (id != voter.Id)
            {
                return BadRequest("Voter ID mismatch");
            }

            var result = await _mediator.Send(new UpdateVoterCommand { Voter = voter });

            if (result == null)
            {
                return NotFound();
            }

            return Ok(result);
        }
    }
}