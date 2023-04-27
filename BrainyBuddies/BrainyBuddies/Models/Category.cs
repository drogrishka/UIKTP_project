using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrainyBuddies.Models
{
    public class Category
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public virtual List<Course> courses { get; set; }
        public Category()
        {
            courses = new List<Course>();
        }
    }
}