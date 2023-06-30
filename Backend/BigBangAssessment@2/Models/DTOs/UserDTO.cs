namespace BigBangAssessment_2.Models.DTOs
{
    public class UserDTO
    {
        public UserDTO()
        {
            Name=string.Empty;
            Password=string.Empty;
        }
        
        public string Name { get; set; }
        public string Password { get; set; }
        public string? Role { get; set; }
        public string? Token { get; set; }
    }
}
