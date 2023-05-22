using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class Activity
{
    public int IdActivity { get; set; }

    public int Age { get; set; }

    public string Subject { get; set; } = null!;

    public string Theme { get; set; } = null!;

    public string Content { get; set; } = null!;

    public string Title { get; set; } = null!;

    public virtual ICollection<Lesson> Lessons { get; set; } = new List<Lesson>();

    public virtual ICollection<Quiz> Quizzes { get; set; } = new List<Quiz>();
}
