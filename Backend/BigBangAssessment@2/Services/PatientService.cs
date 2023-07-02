using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;
using BigBangAssessment_2.Models.DTOs;

namespace BigBangAssessment_2.Services
{
    public class PatientService : IPatientService
    {
        private readonly IRepo<string, Doctor> _doctorRepo;
        public PatientService(IRepo<string, Doctor> doctorRepo)
        {
            _doctorRepo = doctorRepo;
        }
        private DoctorListDTO ConvertIntoDTO(Doctor doctor)
        {
            DoctorListDTO doclist = new DoctorListDTO();
            doclist.Name = doctor.Name;
            doclist.Gender = doctor.Gender;
            doclist.Speciality = doctor.Speciality;
            doclist.Experience = doctor.Experience;
            doclist.ConsultationFee = doctor.ConsultationFee;
            return doclist;
        }
        public async Task<ICollection<DoctorListDTO>> GetDoctors()
        {
            List<DoctorListDTO> doctors = new List<DoctorListDTO>();
            var allDoctors = await _doctorRepo.GetAll();
            if (allDoctors != null)
            {
                foreach (var doctor in allDoctors)
                {
                    var doc = await _doctorRepo.Get(doctor.Name);
                    if (doc != null)
                    {
                        var listDTO = ConvertIntoDTO(doc);
                        doctors.Add(listDTO);
                    }
                }
                return doctors;
            }
            return null;
        }



    }
}
