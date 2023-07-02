﻿using BigBangAssessment_2.Interfaces;
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

        public async Task<UserDTO?> AddDoctor(Doctor doctor)
        {
            UserDTO user = null;
            var hmac = new HMACSHA512();
            string generatedPassword = await _passwordService.GeneratePasswordForDoctor(doctor);

            doctor.User = new User(); 

            doctor.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(generatedPassword));
            doctor.User.PasswordKey = hmac.Key;
            doctor.User.Role = "Doctor";

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

        public async Task<Doctor?> UpdateStatus(ChangeStatusDTO status)
        {
            try
            {
                var doctor = await _doctorRepo.Get(status.Name);
                if (doctor == null) { return null; }
                doctor.status = true;
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
