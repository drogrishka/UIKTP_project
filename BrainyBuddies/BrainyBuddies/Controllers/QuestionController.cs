using BrainyBuddies.Models;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;

namespace BrainyBuddies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : Controller
    {
        private readonly BrainybuddiesDbContext _context;

        public QuestionController(BrainybuddiesDbContext context)
        {
            _context = context;
        }

        // GET: api/question/{id}
        [HttpGet("{id}")]
        public ActionResult<Question> GetQuestion(int id)
        {
            var question = _context.Questions.FirstOrDefault(q => q.IdQuestion == id);
            if (question == null)
            {
                return NotFound();
            }
            return question;
        }

        // POST: api/question
        [HttpPost]
        public ActionResult<Question> CreateQuestion(Question question)
        {
            if (ModelState.IsValid)
            {
                _context.Questions.Add(question);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetQuestion), new { id = question.IdQuestion }, question);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/question/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateQuestion(int id, Question question)
        {
            if (id != question.IdQuestion)
            {
                return BadRequest();
            }

            if (ModelState.IsValid)
            {
                _context.Entry(question).State = (Microsoft.EntityFrameworkCore.EntityState)EntityState.Modified;
                _context.SaveChanges();
                return NoContent();
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/question/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteQuestion(int id)
        {
            var question = _context.Questions.Find(id);
            if (question == null)
            {
                return NotFound();
            }

            _context.Questions.Remove(question);
            _context.SaveChanges();
            return NoContent();
        }
    }
}
