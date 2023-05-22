namespace BrainyBuddies.Models
{
    public class TokenResponse
    {
        public string JWTToken { get; set; }
        public string RefreshToken { get; set; }

        public string Role { get; set; }
    }
}
