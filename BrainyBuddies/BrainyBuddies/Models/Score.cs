using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class Score
{
    public int IdScore { get; set; }

    public double TotalResult { get; set; }

    public int IdQuiz { get; set; }

    public int IdMember { get; set; }

    public virtual Member IdMemberNavigation { get; set; } = null!;

    public virtual Quiz IdQuizNavigation { get; set; } = null!;
}
