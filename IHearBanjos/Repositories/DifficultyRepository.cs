

using Microsoft.Extensions.Configuration;

namespace IHearBanjos.Repositories
{
    public class DifficultyRepository: BaseRepository, IDifficultyRepository
    {
        public DifficultyRepository(IConfiguration configuration) : base(configuration) { }
    }
}
