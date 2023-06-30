using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BigBangAssessment_2.Models
{
    public class Doctor
    {
        public Doctor()
        {
            Name = string.Empty;
            Gender = "Unknown";
            PhoneNumber= string.Empty;
            Speciality= "Unknown";
            DateOfBirth = DateOnly.MinValue;
        }
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]

        [Required(ErrorMessage = "Name cannot be empty")]
        [MinLength(5, ErrorMessage = "Name cannot be less than 3 char")]
        public string Name { get; set;}
        [Required(ErrorMessage = "Gender cannot be empty")]
        public string Gender { get; set; }
        [NotMapped]
        public DateOnly DateOfBirth { get; set; }
        public string?  Email { get; set;}
        public string PhoneNumber { get; set;}
        public string Speciality { get; set;}
        public string? Experience { get; set;}
        public double? ConsultationFee { get; set;}
        public string? status { get; set; }
        public ICollection<Patient>? PatientList { get; set; }
        public string? User { get; set;}


        
        

    }
}
