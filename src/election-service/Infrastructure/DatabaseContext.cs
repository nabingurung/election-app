using Microsoft.EntityFrameworkCore;
using ElectionService.Models;

namespace ElectionService.Infrastructure
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options) { }

        public DbSet<Voter> Voters { get; set; }

       
    }
}