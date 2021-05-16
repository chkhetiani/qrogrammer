using Microsoft.Extensions.Configuration;
using qrogrammer.Models;
using qrogrammer.Utils;

namespace qrogrammer.Services
{
    public interface IUserService
    {
        AuthResponse Authenticate(AuthRequest model);
        User GetById(int id);
    }
    public class UserService : IUserService
    {
        private readonly User _user = new User { Id = 1, Username = "qrogrammer", Password = "pass123" };
        private readonly IConfiguration _appSettings;

        public UserService(IConfiguration appSettings)
        {
            _appSettings = appSettings;
        }

        public AuthResponse Authenticate(AuthRequest model)
        {
            if (_user.Username == model.Username && _user.Password == model.Password)
            {
                var token = JwtTokenGenerator.Generate(_user, _appSettings.GetValue<string>("SecretKey"));
                return new AuthResponse(_user, token);
            }
            return null;
        }

        public User GetById(int id)
        {
            if (id != _user.Id)
            {
                return null;
            }

            return _user;
        }
    }
}