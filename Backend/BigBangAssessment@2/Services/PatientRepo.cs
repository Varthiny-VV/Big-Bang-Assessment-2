using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;
using Microsoft.EntityFrameworkCore;
using System.Numerics;

namespace BigBangAssessment_2.Services
{
    public class PatientRepo : IRepo<string, Patient>
    {
        private readonly Context _context;
        private readonly ILogger<PatientRepo> _logger;

        public PatientRepo(Context context, ILogger<PatientRepo> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Patient?> Add(Patient item)
        {
            try
            {
                _context.Patients.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<Patient?> Get(string key)
        {
            var patient = _context.Patients.FirstOrDefault(p => p.Name == key);
            return patient;
        }

        public async Task<Patient?> Delete(string name)
        {
            var patient = await Get(name);
            if (patient != null)
            {
                _context.Patients.Remove(patient);
                await _context.SaveChangesAsync();
                return patient;
            }
            return null;
        }

        public async Task<ICollection<Patient>?> GetAll()
        {
            var patients = await _context.Patients.Include(e => e.User).ToListAsync();
            if (patients!=null)
                return patients.ToList();
            return null;
        }
        public async Task<Patient?> Update(Patient item)
        {
            var patient = await Get(item.Name);
            if (patient != null)
            {
                patient.Id = item.Id;
                patient.Name = item.Name;
                patient.Gender = item.Gender;
                patient.DateOfBirth = item.DateOfBirth;
                patient.PhoneNumber = item.PhoneNumber;
                patient.Address = item.Address;
                patient.BloodType = item.BloodType;
                patient.AdmissionDate = item.AdmissionDate;
                patient.DischargeDate = item.DischargeDate;       
                patient.CurrentMedications = item.CurrentMedications;
                patient.Symptoms = item.Symptoms;
                await _context.SaveChangesAsync();
                return patient;
            }
            return null;
        }


    }
}
