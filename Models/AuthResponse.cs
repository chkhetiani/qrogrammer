namespace qrogrammer.Models
{
    public class AuthResponse
    {
        public AuthResponse(User user, string token)
        {
            Id = user.Id;
            Username = user.Username;
            Token = token;
        }
        public int Id { get; set; }
        public string Username { get; set; }
        public string Token { get; set; }
    }
}