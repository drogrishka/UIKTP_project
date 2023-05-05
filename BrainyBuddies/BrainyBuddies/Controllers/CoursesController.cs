using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BrainyBuddies.Models;

namespace BrainyBuddies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {
        private readonly CourseContext _courseContext;

        public CoursesController(CourseContext courseContext)
        {
            _courseContext= courseContext;
        }

        [HttpGet]
        [Route("GetCourses")]
        public IActionResult GetCourses()
        {
            List<Course> list = _courseContext.Courses.ToList();
            return StatusCode(StatusCodes.Status200OK, list);
        }

        [HttpGet]
        [Route("GetCourse/{id}")]
        public IActionResult GetCourseById(int id)
        {
            var course = _courseContext.Courses.FirstOrDefault(c => c.Id == id);
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

            _courseContext.Courses.Add(course);
            _courseContext.SaveChanges();

            return StatusCode(StatusCodes.Status201Created);
        }

        [HttpDelete]
        [Route("DeleteCourse/{id}")]
        public IActionResult DeleteCourse(int id)
        {
            var course = _courseContext.Courses.FirstOrDefault(c => c.Id == id);
            if (course == null)
            {
                return NotFound();
            }

            _courseContext.Courses.Remove(course);
            _courseContext.SaveChanges();

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

            var existingCourse = _courseContext.Courses.FirstOrDefault(c => c.Id == id);
            if (existingCourse == null)
            {
                return NotFound();
            }

            existingCourse.ImgURL = course.ImgURL;
            existingCourse.Ime = course.Ime;
            existingCourse.Pisatel = course.Pisatel;
            existingCourse.Predmet = course.Predmet;
            existingCourse.Opis = course.Opis;

            _courseContext.SaveChanges();

            return Ok();
        }
    }
}
