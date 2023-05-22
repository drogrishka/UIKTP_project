using BrainyBuddies.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BrainyBuddies.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class RegisterController : ControllerBase
    {
        private readonly BrainybuddiesDbContext _brainybuddiesDbContext;
        public RegisterController(BrainybuddiesDbContext brainybuddiesDbContext)
        {
            _brainybuddiesDbContext = brainybuddiesDbContext;
        }

        [HttpGet]
        [Route("GetUsers")]
        public IEnumerable<Member> Get()
        {
            return _brainybuddiesDbContext.Members.ToList();
        }

        [HttpPost]
        [Route("CreateMember")]
        public IActionResult CreateMember(Member member)
        {
            try
            {
                _brainybuddiesDbContext.Members.Add(member);
                _brainybuddiesDbContext.SaveChanges();
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
 }
