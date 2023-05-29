using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class Question
{
    public int IdQuestion { get; set; }

    public string QuestionText { get; set; } = null!;

    public string CorrectAnswer { get; set; } = null!;

    public int IdQuiz { get; set; }

    public string WrongQuestion1 { get; set; } = null!;

    public string WrongQuestion2 { get; set; } = null!;

    public string WrongQuestion3 { get; set; } = null!;

    public virtual Quiz IdQuizNavigation { get; set; } = null!;
}
