using Microsoft.VisualBasic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace BigBangAssessment_2.Models
{
    public class Patient
    {
        public Patient()
        {
            Name = string.Empty;
            Gender = "Unknown";
            PhoneNumber = string.Empty;
            BloodType = string.Empty;
            CurrentMedications = string.Empty;
        }
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]

        [Required(ErrorMessage = "Name cannot be empty")]
        [MinLength(5, ErrorMessage = "Name cannot be less than 3 char")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Gender cannot be empty")]
        public string Gender { get; set; }
        
        public DateTime DateOfBirth { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        public string? BloodType { get; set; }
       
        public DateTime? AdmissionDate { get; set; }
      
        public DateTime? DischargeDate { get; set; }
        public string CurrentMedications { get; set; }
        public string? Symtoms { get; set; }
        public User? User { get; set; }
        
        
    }
}
