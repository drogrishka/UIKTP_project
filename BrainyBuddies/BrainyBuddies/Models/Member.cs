using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class Member
{
    public int IdMember { get; set; }

    public string Name { get; set; } = null!;

    public string Surname { get; set; } = null!;

    public string Role { get; set; } = null!;

    public int Age { get; set; }

    public string Gender { get; set; } = null!;

    public string Username { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Email { get; set; } = null!;

    public virtual ICollection<Lesson> Lessons { get; set; } = new List<Lesson>();

    public virtual ICollection<Quiz> Quizzes { get; set; } = new List<Quiz>();

    public virtual ICollection<RefreshToken> RefreshTokens { get; set; } = new List<RefreshToken>();

    public virtual ICollection<Score> Scores { get; set; } = new List<Score>();
}
