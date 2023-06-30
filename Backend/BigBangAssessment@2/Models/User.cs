using Microsoft.AspNetCore.Mvc.Formatters;
using System.ComponentModel.DataAnnotations;

namespace BigBangAssessment_2.Models
{
    public class User
    {
        public User() 
        { 
            Name = string.Empty;
            Role = string.Empty;
        }
        [Key]
        public int UserId { get; set; } 
        public string Name { get; set; }
        public byte[]? HashKey { get; set; }
        public byte[]? Password { get; set; }
        public string Role { get; set; }
    }
}
