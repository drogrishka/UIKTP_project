using BrainyBuddies.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BrainyBuddies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivityController : ControllerBase
    {
        private readonly BrainybuddiesDbContext _brainybuddiesDbContext;
        public ActivityController(BrainybuddiesDbContext brainybuddiesDbContext)
        {
            _brainybuddiesDbContext = brainybuddiesDbContext;
        }
        
        // GET: api/<LessonController>
        [HttpGet]
        [Route("getActivities")]
        public IActionResult GetActivities()
        {
            List<Activity> list = _brainybuddiesDbContext.Activities.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }
    }
}
