using Microsoft.AspNetCore.Mvc;
using qrogrammer.Models;
using qrogrammer.Services;

namespace qrogrammer.Controllers
{
    [Route("Auth")]
    public class AuthController : Controller
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("auth")]
        public IActionResult Authenticate([FromBody] AuthRequest request)
        {
            var response = _userService.Authenticate(request);
            return Ok(response);
        }
    }
}