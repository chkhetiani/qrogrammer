using Microsoft.EntityFrameworkCore;
using System;
using System.Linq;

namespace qrogrammer.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public string URL
        {
            get
            {
                return new string(Title
                    .ToLower()
                    .Replace(' ', '-')
                    .Where(c => char.IsLetterOrDigit(c) || c == '-')
                        .ToArray());
            }
        }
        public string Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public string Content { get; set; }
    }
}
