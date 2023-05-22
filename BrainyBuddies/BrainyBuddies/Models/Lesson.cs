using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class Lesson
{
    public int IdLesson { get; set; }

    public int IdMember { get; set; }

    public int IdActivity { get; set; }

    public string LessonDescription { get; set; } = null!;

    public virtual Activity IdActivityNavigation { get; set; } = null!;

    public virtual Member IdMemberNavigation { get; set; } = null!;
}
