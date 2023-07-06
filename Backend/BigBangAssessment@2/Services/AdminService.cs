using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models.DTOs;
using BigBangAssessment_2.Models;
using System.Security.Cryptography;
using System.Text;

namespace BigBangAssessment_2.Services
{
    public class AdminService : IAdminService
    {
        
        private readonly IRepo<string, Doctor> _doctorRepo;
        private IRepo<string, User> _userRepo;
        private IGenerateToken _tokenService;
        private readonly IGeneratePassword _passwordService;
        public AdminService(IRepo<string, Doctor> doctorRepo, IRepo<string, User> userrepo, IGenerateToken tokenService,
            IGeneratePassword passwordService)
        {
            _doctorRepo = doctorRepo;
            _userRepo = userrepo;
            _tokenService = tokenService;
            _passwordService = passwordService;
        }

       

        public async Task<Doctor?> UpdateStatus(ChangeStatusDTO changeStatus)
        {
            try
            {
                var doctor = await _doctorRepo.Get(changeStatus.Name);
                if (doctor == null) 
                { return null; }
                doctor.Status = changeStatus.Status;
                var updatedDoc = await _doctorRepo.Update(doctor);
                if (updatedDoc == null) { return null; }
                return updatedDoc;
            }
            catch (Exception)
            {
                return null;
            }
        }

    }
}
