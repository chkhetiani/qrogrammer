using Microsoft.EntityFrameworkCore;
using qrogrammer.Data.EntityConfiguration;
using qrogrammer.Models;
using System.Diagnostics.CodeAnalysis;

namespace qrogrammer.Data
{
    public class DataContext : DbContext
    {
        public DataContext([NotNull] DbContextOptions options) : base(options)
        {
        }

        public DbSet<Blog> Blogs { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new BlogConfiguration());
        }
    }
}
