using BigBangAssessment_2.Models.DTOs;
using BigBangAssessment_2.Models;

namespace BigBangAssessment_2.Interfaces
{
    public interface IAdminService
    {
        public Task<Doctor?> UpdateStatus(ChangeStatusDTO status);
        
    }
}
