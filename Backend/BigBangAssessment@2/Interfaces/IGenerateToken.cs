using BigBangAssessment_2.Models.DTOs;

namespace BigBangAssessment_2.Interfaces
{
    public interface IGenerateToken
    {
        public string GenerateToken(UserDTO user);
    }
}
