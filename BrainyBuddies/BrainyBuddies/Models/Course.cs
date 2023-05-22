using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class Course
{
    public int Id { get; set; }

    public string ImgUrl { get; set; } = null!;

    public string Ime { get; set; } = null!;

    public string Pisatel { get; set; } = null!;

    public string Predmet { get; set; } = null!;

    public string Opis { get; set; } = null!;
}
