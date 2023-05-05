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
    }
}
