using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;
using BigBangAssessment_2.Models.DTOs;
using System.Security.Cryptography;
using System.Text;

namespace BigBangAssessment_2.Services
{
    public class UserService : IManageUser
    {
        private IRepo<string, User> _userRepo;
        private readonly IRepo<string, Doctor> _doctorRepo;
        private readonly IRepo<string,Patient> _patientRepo;
        private IGenerateToken _tokenService;
        private readonly IGeneratePassword _passwordService;


        public UserService(IRepo<string, User> userrepo, IRepo<string, Doctor> doctorRepo, IRepo<string, Patient> patientRepo,IGenerateToken tokenService,
            IGeneratePassword passwordService)
        {
            _userRepo = userrepo;
            _doctorRepo = doctorRepo;
            _patientRepo = patientRepo;
            _tokenService = tokenService;
            _passwordService = passwordService;
        }

        public async Task <UserDTO?> Login(UserDTO user) 
        {
            
            var userData = await _userRepo.Get(user.Name);
            if (userData != null)
            {
                var hmac = new HMACSHA512(userData.PasswordKey);
                var userPass = hmac.ComputeHash(Encoding.UTF8.GetBytes(user.Password));
                for (int i = 0; i < userPass.Length; i++)
                {
                    if (userPass[i] != userData.PasswordHash[i])
                        return null;
                }
                
                    user = new UserDTO();
                    user.Name = userData.Name;
                    user.Role = userData.Role;
                    user.Token = _tokenService.GenerateToken(user);
                
            }
            return user;
        }

        public async Task<UserDTO> PatientRegister(Patient patient)
        {

            UserDTO user = null;
            var hmac = new HMACSHA512();
            string generatedPassword = await _passwordService.GeneratePasswordForPatient(patient);

            patient.User = new User(); // Instantiate the User object

            patient.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword));
            patient.User.PasswordKey = hmac.Key;
            patient.User.Role = "Patient";
            patient.User.Name = patient.Name;
            

            var userResult = await _userRepo.Add(patient.User);
            var patientResult = await _patientRepo.Add(patient);

            if (userResult != null && patientResult != null)
            {
                user = new UserDTO();
                user.Name = patientResult.Name;
                user.Role = userResult.Role;
                user.Token = _tokenService.GenerateToken(user);
            }

            return user;
        }

        public async Task<UserDTO> DoctorRegister(Doctor doctor)
        {

            UserDTO user = null;
            var hmac = new HMACSHA512();
            string generatedPassword = await _passwordService.GeneratePasswordForDoctor(doctor);

            doctor.User = new User();

            doctor.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword));
            doctor.User.PasswordKey = hmac.Key;
            doctor.User.Role = "Doctor";
            doctor.User.Name = doctor.Name;
            doctor.Status = false;

            var userResult = await _userRepo.Add(doctor.User);
            var DoctorResult = await _doctorRepo.Add(doctor);

            if (userResult != null && DoctorResult != null) 
            {
                user = new UserDTO();
                user.Name = DoctorResult.Name;
                user.Role = userResult.Role;
                user.Token = _tokenService.GenerateToken(user);
            }

            return user;
        }

        

    }
}
