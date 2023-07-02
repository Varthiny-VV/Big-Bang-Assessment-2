using BigBangAssessment_2.Models;
using BigBangAssessment_2.Models.DTOs;

namespace BigBangAssessment_2.Interfaces
{
    public interface IManageUser
    {
        public Task<UserDTO?> Login(UserDTO user);
        public Task<UserDTO?> DoctorRegister(Doctor doctor);
        public Task<UserDTO?> PatientRegister(Patient patient);
        

    }
}




