using BrainyBuddies.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using BrainyBuddies.Interfaces;

namespace BrainyBuddies.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemberController : ControllerBase
    {
        private readonly BrainybuddiesDbContext _brainybuddiesDbContext;
        private readonly JWTSetting _setting;
        private readonly IRefreshTokenGenerator _tokenGenerator;

        public MemberController(BrainybuddiesDbContext brainybuddiesDbContext, IOptions<JWTSetting> options, IRefreshTokenGenerator tokenGenerator)
        {
            _brainybuddiesDbContext = brainybuddiesDbContext;
            _setting = options.Value;
            _tokenGenerator = tokenGenerator;
        }

        [NonAction]
        public TokenResponse Authenticate(string username, Claim[] claims)
        {
            TokenResponse tokenResponse = new TokenResponse();
            var tokenkey = Encoding.UTF8.GetBytes(_setting.securityKey);
            var tokenhandler = new JwtSecurityToken(
                claims: claims,
                expires: DateTime.Now.AddMinutes(15),
                 signingCredentials: new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256)

                );
            tokenResponse.JWTToken = new JwtSecurityTokenHandler().WriteToken(tokenhandler);
            tokenResponse.RefreshToken = _tokenGenerator.GenerateToken(username);

            return tokenResponse;
        }

        [Route("Authenticate")]
        [HttpPost]
        public IActionResult Authenticate([FromBody] UserCredentials user)
        {
            TokenResponse tokenResponse = new TokenResponse();
            var _member = _brainybuddiesDbContext.Members.FirstOrDefault(o => o.Username == user.UserName && o.Password == user.Password);
            if (_member == null)
            {
                return Unauthorized();
            }

            var tokenhandler = new JwtSecurityTokenHandler();
            var tokenkey = Encoding.UTF8.GetBytes(_setting.securityKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(
                    new Claim[]
                    {
                        new Claim(ClaimTypes.Name, _member.Username),
                        new Claim(ClaimTypes.Role, _member.Role)
                    }
                ),
                Expires = DateTime.Now.AddMinutes(2),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenkey), SecurityAlgorithms.HmacSha256)
            };
            var token = tokenhandler.CreateToken(tokenDescriptor);
            string finaltoken = tokenhandler.WriteToken(token);

            tokenResponse.JWTToken = finaltoken;
            tokenResponse.Role= _member.Role;
            tokenResponse.RefreshToken = _tokenGenerator.GenerateToken(_member.Username);
            return Ok(tokenResponse);

        }
        [Route("Refresh")]
        [HttpPost]
        public IActionResult Refresh([FromBody] TokenResponse token)
        {

            var tokenhandler = new JwtSecurityTokenHandler();
            SecurityToken securityToken;
            var principal = tokenhandler.ValidateToken(token.JWTToken, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_setting.securityKey)),
                ValidateIssuer = false,
                ValidateAudience = false,
            }, out securityToken);

            var _token = securityToken as JwtSecurityToken;

            if (_token != null && !_token.Header.Alg.Equals(SecurityAlgorithms.HmacSha256))
            {
                return Unauthorized();
            }
            var username = principal.Identity.Name;
            var _member = _brainybuddiesDbContext.Members.FirstOrDefault(o => o.Username == username);
            var _reftable = _brainybuddiesDbContext.RefreshTokens.FirstOrDefault(o => o.IdMember == _member.IdMember && o.RefreshToken1 == token.RefreshToken);
            
            if(_reftable == null )
            {
                return Unauthorized();
            }

            TokenResponse _result = Authenticate(username, principal.Claims.ToArray());
            
            return Ok(_result);
        }
     
    }
}
