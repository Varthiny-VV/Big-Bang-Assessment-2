﻿using Microsoft.AspNetCore.Mvc.Formatters;
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
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordKey { get; set; }
        public string Role { get; set; }
    }
}
