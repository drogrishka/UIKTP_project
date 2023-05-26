using BrainyBuddies.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace BrainyBuddies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController : ControllerBase
    {

        private readonly BrainybuddiesDbContext _brainybuddiesDbContext;
        public LessonController(BrainybuddiesDbContext brainybuddiesDbContext) {
            _brainybuddiesDbContext = brainybuddiesDbContext;
        }

        // GET: api/<LessonController>
        [HttpGet]
        [Route("GetLessons")]
        public IActionResult GetLessons()
        {
            List<Lesson> list = _brainybuddiesDbContext.Lessons.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }

        // GET api/<LessonController>/5
        [HttpGet("{id}")]
        [Route("GetLesson/{id}")]
        public IActionResult GetLessonById(int id)
        {
            var lesson = _brainybuddiesDbContext.Courses.FirstOrDefault(c => c.Id == id);
            if (lesson == null)
            {
                return NotFound();
            }

            return StatusCode(StatusCodes.Status200OK, lesson);
        }

        // POST api/<LessonController>
        [HttpPost]
        [Route("AddLesson")]
        public IActionResult AddLesson([FromBody] Lesson lesson)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _brainybuddiesDbContext.Lessons.Add(lesson);
            _brainybuddiesDbContext.SaveChanges();

            return StatusCode(StatusCodes.Status201Created);
        }

        // PUT api/<LessonController>/5
        [HttpPut("{id}")]
        [Route("EditLesson/{id}")]
        public IActionResult EditLesson(int id, [FromBody] Lesson lesson)
        {
            if (id != lesson.IdLesson)
            {
                return BadRequest();
            }

            var existingLesson = _brainybuddiesDbContext.Lessons.FirstOrDefault(c => c.IdLesson == id);
            if (existingLesson == null)
            {
                return NotFound();
            }

            existingLesson.LessonDescription = lesson.LessonDescription;
            existingLesson.IdMember = lesson.IdMember;
            existingLesson.IdActivity = lesson.IdActivity;

            _brainybuddiesDbContext.SaveChanges();

            return Ok();
        }

        // DELETE api/<LessonController>/5
        [HttpDelete("{id}")]
        [Route("DeleteLesson/{id}")]
        public IActionResult DeleteLesson(int id)
        {
            var lesson = _brainybuddiesDbContext.Courses.FirstOrDefault(c => c.Id == id);
            if (lesson == null)
            {
                return NotFound();
            }

            _brainybuddiesDbContext.Courses.Remove(lesson);
            _brainybuddiesDbContext.SaveChanges();

            return Ok();
        }
    }
}
