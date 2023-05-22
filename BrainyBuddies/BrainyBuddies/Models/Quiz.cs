using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class Quiz
{
    public int IdQuiz { get; set; }

    public double Points { get; set; }

    public int IdMember { get; set; }

    public int IdActivity { get; set; }

    public virtual Activity IdActivityNavigation { get; set; } = null!;

    public virtual Member IdMemberNavigation { get; set; } = null!;

    public virtual ICollection<Score> Scores { get; set; } = new List<Score>();
}
