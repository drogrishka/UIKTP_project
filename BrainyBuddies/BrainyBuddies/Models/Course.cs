﻿using System.ComponentModel.DataAnnotations;


namespace BrainyBuddies.Models
{
    public class Course
    {
        [Required]
        public int Id { get; set; }
        [Required]
        [Display(Name = "Слика")]
        public string ImgURL { get; set; }
        [Required]
        [Display(Name = "Име")]
        public string Ime { get; set; }
        [Required]
        [Display(Name = "Категорија")]
        public string Pisatel { get; set; }
        [Required]
        [Display(Name = "Област/Предмет")]
        public string Predmet { get; set; }
        [Display(Name = "Опис")]
        public string Opis { get; set; }
    
    }
}