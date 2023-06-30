using BigBangAssessment_2.Interfaces;
using BigBangAssessment_2.Models;
using Microsoft.EntityFrameworkCore;

namespace BigBangAssessment_2.Services
{
    public class UserRepo : IRepo<string,User>
    {
        private readonly Context _context;
        private readonly ILogger<UserRepo> _logger;

        public UserRepo(Context context, ILogger<UserRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        
        public async Task <User?> Add(User item)
        {
            try
            {
                _context.Users.Add(item);
                await _context.SaveChangesAsync();
                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
            }
            return null;
        }

        public async Task<User?> Get(string key) 
        {
            var user =await _context.Users.FirstOrDefaultAsync(u => u.Name.ToLower()== key.ToLower());
            if (user != null)
            {
                return user;
            }
            return null;
        }

        public async Task<User?> Delete(string name)
        {
            var user = await Get(name);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }
        public async Task<ICollection<User>?> GetAll()
        {
            var users = await _context.Users.ToListAsync();
            if (users.Count > 0)
                return users;
            return null;
        }

        public async Task<User?> Update(User item)
        {
            var user = await Get(item.Name);
            if (user != null)
            {
                user.Role = item.Role;
                user.PasswordHash = item.PasswordHash;
                user.PasswordKey = item.PasswordKey;
                await _context.SaveChangesAsync();
                return user;
            }
            return null;
        }
    }
}
