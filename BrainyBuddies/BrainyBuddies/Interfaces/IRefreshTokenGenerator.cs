namespace BrainyBuddies.Interfaces
{
    public interface IRefreshTokenGenerator
    {
        string GenerateToken(string username);
    }
}
