using BigBangAssessment_2.Models.DTOs;

namespace BigBangAssessment_2.Interfaces
{
    public interface IPatientService
    {
        public Task<ICollection<DoctorListDTO>> GetDoctors();
    
    }
}
