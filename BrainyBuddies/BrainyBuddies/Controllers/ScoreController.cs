using BrainyBuddies.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BrainyBuddies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ScoreController : Controller
    {
        private readonly BrainybuddiesDbContext _context;
        public ScoreController(BrainybuddiesDbContext context)
        {
            _context = context;
        }

        // GET: api/score/{id}
        [HttpGet("{id}")]
        public ActionResult<Score> GetScore(int id)
        {
            var score = _context.Scores
                .Include(s => s.IdQuizNavigation)
                .Include(s => s.IdMemberNavigation)
                .FirstOrDefault(s => s.IdScore == id);

            if (score == null)
            {
                return NotFound();
            }

            return score;
        }

        // POST: api/score
        [HttpPost]
        public ActionResult<Score> CreateScore(Score score)
        {
            if (ModelState.IsValid)
            {
                _context.Scores.Add(score);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetScore), new { id = score.IdScore }, score);
            }
            return BadRequest(ModelState);
        }

        // PUT: api/score/{id}
        [HttpPut("{id}")]
        public IActionResult UpdateScore(int id, Score score)
        {
            if (id != score.IdScore)
            {
                return BadRequest();
            }

            if (ModelState.IsValid)
            {
                _context.Entry(score).State = EntityState.Modified;
                _context.SaveChanges();
                return NoContent();
            }
            return BadRequest(ModelState);
        }

        // DELETE: api/score/{id}
        [HttpDelete("{id}")]
        public IActionResult DeleteScore(int id)
        {
            var score = _context.Scores.Find(id);
            if (score == null)
            {
                return NotFound();
            }

            _context.Scores.Remove(score);
            _context.SaveChanges();
            return NoContent();
        }
    }
}

