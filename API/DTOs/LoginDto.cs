using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class LoginDto
    {
        //Data Object Filter Using the Login
        public string Email { get; set; }
        public string Password { get; set; }
    }
}