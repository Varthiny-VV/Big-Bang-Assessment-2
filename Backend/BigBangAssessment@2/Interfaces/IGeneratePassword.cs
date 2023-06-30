using BigBangAssessment_2.Models;

namespace BigBangAssessment_2.Interfaces
{
    public interface IGeneratePassword
    {
        public Task<string?> GeneratePasswordForDoctor(Doctor doctor);
        public Task<string?> GeneratePasswordForPatient(Patient patient);

    }
}
