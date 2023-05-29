using BrainyBuddies.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileSystemGlobbing.Internal;
using System;
using Microsoft.EntityFrameworkCore;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace BrainyBuddies.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class QuizController : Controller
    {

        private BrainybuddiesDbContext _context;
        public QuizController(BrainybuddiesDbContext context)
        {
            _context = context;
        }
        [HttpGet]
        [Route("getQuizzes")]
        public IActionResult GetQuizzes()
        {
            List<Quiz> list = _context.Quizzes.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }
        // GET: api/quiz/{id}
        [HttpGet("{id}")]
        public ActionResult<string> GetQuiz(int id)
        {
            var quiz = _context.Quizzes
                .Include(q => q.Questions)
                .Include(q => q.Scores)
                .FirstOrDefault(q => q.IdQuiz == id);

            if (quiz == null)
            {
                return NotFound();
            }

            string serializedQuiz = SerializeToJson(quiz); // Call the serialization method

            return serializedQuiz;
        }

        // ...

        // Custom serialization method
        private string SerializeToJson(object obj)
        {
            var options = new JsonSerializerOptions
            {
                ReferenceHandler = ReferenceHandler.Preserve,
                // Other serialization options if needed
            };

            // Serialize the object to JSON
            var json = JsonSerializer.Serialize(obj, options);

            return json;
        }

        // POST: api/quiz
        [HttpPost]
        public ActionResult<Quiz> CreateQuiz(Quiz quiz)
        {
            if (ModelState.IsValid)
            {
                _context.Quizzes.Add(quiz);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetQuiz), new { id = quiz.IdQuiz }, quiz);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/quiz/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateQuiz(int id, Quiz quiz)
        {
            if (id != quiz.IdQuiz)
            {
                return BadRequest();
            }

            if (ModelState.IsValid)
            {
                _context.Entry(quiz).State = (Microsoft.EntityFrameworkCore.EntityState)EntityState.Modified;
                _context.SaveChanges();
                return NoContent();
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/quiz/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteQuiz(int id)
        {
            var quiz = _context.Quizzes.Find(id);
            if (quiz == null)
            {
                return NotFound();
            }

            _context.Quizzes.Remove(quiz);
            _context.SaveChanges();
            return NoContent();
        }

    }
}

