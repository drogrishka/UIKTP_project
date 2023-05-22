using BrainyBuddies.Interfaces;
using BrainyBuddies.Models;
using System.Security.Cryptography;

namespace BrainyBuddies.Services
{
    public class RefreshTokenGenerator : IRefreshTokenGenerator
    {
        private readonly BrainybuddiesDbContext _brainybuddiesDbContext;
        public RefreshTokenGenerator(BrainybuddiesDbContext brainybuddiesDbContext)
        {
            _brainybuddiesDbContext = brainybuddiesDbContext;
        }
        public string GenerateToken(string username)
        {
            
            var randomnumber = new byte[32];
            using (var randomnumbergenerator = RandomNumberGenerator.Create())
            {
                randomnumbergenerator.GetBytes(randomnumber);
                string RefreshToken = Convert.ToBase64String(randomnumber);

                var member = _brainybuddiesDbContext.Members.FirstOrDefault(x => x.Username == username);
                var _member = _brainybuddiesDbContext.RefreshTokens.FirstOrDefault(o => o.IdMember == member.IdMember);
                if(_member != null)
                {
                    _member.RefreshToken1 = RefreshToken;
                    _brainybuddiesDbContext.SaveChanges();
                }
                else
                {
                    RefreshToken refreshToken = new RefreshToken()
                    {
                        IdMember = member.IdMember,
                        RefreshToken1 = RefreshToken,
                        IsActive = "true",
                    };
                    _brainybuddiesDbContext.RefreshTokens.Add(refreshToken);
                    _brainybuddiesDbContext.SaveChanges();
                }
                
                return RefreshToken;
            }
        }
    }
}
