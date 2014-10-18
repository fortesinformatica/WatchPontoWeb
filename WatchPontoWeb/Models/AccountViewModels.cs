using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WatchPontoWeb.Models
{
    public class LoginViewModel
    {
        [Required]
        public string PIS { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Senha")]
        public string Senha { get; set; }
    }
}
