using System;
using System.Collections.Generic;

namespace BrainyBuddies.Models;

public partial class RefreshToken
{
    public int IdToken { get; set; }

    public int IdMember { get; set; }

    public string? RefreshToken1 { get; set; }

    public string? IsActive { get; set; }

    public virtual Member IdMemberNavigation { get; set; } = null!;
}
