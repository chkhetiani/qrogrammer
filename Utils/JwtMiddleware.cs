using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using qrogrammer.Services;

namespace qrogrammer.Utils
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly IConfiguration _appSettings;

        public JwtMiddleware(RequestDelegate next, IConfiguration appSettings)
        {
            _next = next;
            _appSettings = appSettings;
        }

        public async Task Invoke(HttpContext context, IUserService userService)
        {
            var token = context.Request.Headers[Constants.Auth].FirstOrDefault()?.Split(" ").Last();

            if (token != null)
            {
                AttachUserToContext(context, userService, token);
            }

            await _next(context);
        }

        private void AttachUserToContext(HttpContext context, IUserService userService, string token)
        {
            try
            {
                var tokenHandler = new JwtSecurityTokenHandler();
                var key = Encoding.ASCII.GetBytes(_appSettings.GetValue<string>("SecretKey"));
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                }, out var validateToken);

                var jwtToken = (JwtSecurityToken)validateToken;
                var userId = int.Parse(jwtToken.Claims.First(c => c.Type == Constants.Id).Value);

                context.Items[Constants.User] = userService.GetById(userId);
            }
            catch
            {
            }
        }
    }
}
