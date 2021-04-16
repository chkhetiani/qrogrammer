using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using qrogrammer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace qrogrammer.Data.EntityConfiguration
{
    public class BlogConfiguration : IEntityTypeConfiguration<Blog>
    {
        public void Configure(EntityTypeBuilder<Blog> builder)
        {
            builder.HasKey(b => b.Id);

            builder.Property(b => b.Id).HasColumnName(nameof(Blog.Id)).IsRequired();
            builder.Property(b => b.Title).HasColumnName(nameof(Blog.Title)).IsRequired();
            builder.Property(b => b.ReleaseDate).HasColumnName(nameof(Blog.ReleaseDate)).IsRequired();
            builder.Property(b => b.Content).HasColumnName(nameof(Blog.Content)).IsRequired();
        }
    }
}
