using System;
using System.ComponentModel.DataAnnotations;

namespace WatchPontoWeb.Models
{
    public class FiltroExtrato
    {
        [Required]
        public string PIS { get; set; }

        [Required]
        [Display(Name = "Data Inicial")]
        public DateTime DataInicio { get; set; }

        [Required]
        [Display(Name = "Data Final")]
        public DateTime DataFim { get; set; }
    }
}
