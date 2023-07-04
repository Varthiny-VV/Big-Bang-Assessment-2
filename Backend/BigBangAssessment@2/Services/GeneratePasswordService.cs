using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;

namespace BigBangAssessment_2.Services
{
    public class GeneratePasswordService : IGeneratePassword
    {
        public async Task<string?> GeneratePasswordForDoctor(Doctor doctor)
        {
            string password = String.Empty;
            password = doctor.Name.Substring(0, 4);
            password += "#"; 
            password += doctor.Experience;
            return password;
        }

        public async Task<string?> GeneratePasswordForPatient(Patient patient)
        {
            string password = String.Empty;
            password = patient.Name.Substring(0, 4);
            password += patient.BloodType;
            return password;
        }
    }
}
