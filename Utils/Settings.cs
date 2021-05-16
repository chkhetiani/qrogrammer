using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;

namespace qrogrammer.Utils
{
    public class Settings
    {
        public ConnectionStrings ConnectionStrings { get; set; }
        public string SecretKey { get; set; }
    }

    public class ConnectionStrings
    {
        public string DataContext { get; set; }
    }
}
