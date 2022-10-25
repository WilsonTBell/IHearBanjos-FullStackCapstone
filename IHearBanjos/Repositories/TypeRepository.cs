using Microsoft.Extensions.Configuration;

namespace IHearBanjos.Repositories
{
    public class TypeRepository : BaseRepository, ITypeRepository
    {
        public TypeRepository(IConfiguration configuration) : base(configuration) { }
    }
}
