using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;

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
    }
}
