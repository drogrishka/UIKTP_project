using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrainyBuddies.Models;
using Microsoft.AspNetCore.Authorization;
using System.Data;

namespace BrainyBuddies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly BrainybuddiesDbContext _brainybuddiesDbContext;

        public CoursesController(BrainybuddiesDbContext brainybuddiesDbContext)
        {
            _brainybuddiesDbContext= brainybuddiesDbContext;
        }

        [HttpGet]
        [Route("GetCourses")]
        public IActionResult GetCourses()
        {
            List<Course> list = _brainybuddiesDbContext.Courses.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpGet]
        [Route("GetCourse/{id}")]
        public IActionResult GetCourseById(int id)
        {
            var course = _brainybuddiesDbContext.Courses.FirstOrDefault(c => c.Id == id);
            if (course == null)
            {
                return NotFound();
            }

            return StatusCode(StatusCodes.Status200OK, course);
        }

        [HttpPost]
        [Route("AddCourse")]
        public IActionResult AddCourse([FromBody] Course course)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _brainybuddiesDbContext.Courses.Add(course);
            _brainybuddiesDbContext.SaveChanges();

            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpDelete]
        [Route("DeleteCourse/{id}")]
        public IActionResult DeleteCourse(int id)
        {
            var course = _brainybuddiesDbContext.Courses.FirstOrDefault(c => c.Id == id);
            if (course == null)
            {
                return NotFound();
            }

            _brainybuddiesDbContext.Courses.Remove(course);
            _brainybuddiesDbContext.SaveChanges();

            return Ok();
        }

        [HttpPut]
        [Route("EditCourse/{id}")]
        public IActionResult EditCourse(int id, [FromBody] Course course)
        {
            if (id != course.Id)
            {
                return BadRequest();
            }

            var existingCourse = _brainybuddiesDbContext.Courses.FirstOrDefault(c => c.Id == id);
            if (existingCourse == null)
            {
                return NotFound();
            }

            existingCourse.ImgUrl = course.ImgUrl;
            existingCourse.Ime = course.Ime;
            existingCourse.Pisatel = course.Pisatel;
            existingCourse.Predmet = course.Predmet;
            existingCourse.Opis = course.Opis;

            _brainybuddiesDbContext.SaveChanges();

            return Ok();
        }
    }
}
