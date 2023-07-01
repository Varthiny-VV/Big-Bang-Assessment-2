using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBangAssessment_2.Services
{
    public class DoctorRepo : IRepo<string, Doctor>
    {
        private readonly Context _context;
        private readonly ILogger<DoctorRepo> _logger;

        public DoctorRepo(Context context, ILogger<DoctorRepo> logger)
        {
            _context = context;
            _logger = logger;
        }

        public async Task<Doctor?> Add(Doctor item)
        {
            try
            {
                _context.Doctors.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<Doctor?> Get(string key)
        {
            var doctor = _context.Doctors.FirstOrDefault(d => d.Name == key);
            return doctor;
        }

        public async Task<Doctor?> Delete(string name)
        {
            var doctor = await Get(name);
            if (doctor != null)
            {
                _context.Doctors.Remove(doctor);
                await _context.SaveChangesAsync();
                return doctor;
            }
            return null;
        }

        public async Task<ICollection<Doctor>?> GetAll()
        {
            var doctors = await _context.Doctors.Include(e => e.User).Include(e => e.Speciality).ToListAsync();
            if (doctors.Count > 0)
                return doctors;
            return null;
        }

        public async Task<Doctor?> Update(Doctor item)
        {
            var doctor = await Get(item.Name);
            if (doctor != null)
            {
                doctor.Id = item.Id;
                doctor.Name = item.Name;
                doctor.Gender = item.Gender;
                doctor.Age = item.Age;
                doctor.PhoneNumber = item.PhoneNumber;
                doctor.Speciality = item.Speciality;
                doctor.Experience = item.Experience;
                doctor.ConsultationFee = item.ConsultationFee;
                doctor.status = item.status;
                doctor.PatientList = item.PatientList;
                await _context.SaveChangesAsync();
                return doctor;
            }
            return null;
        }
    }
}
