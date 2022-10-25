using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using IHearBanjos.Models;

namespace IHearBanjos.Repositories
{
    public interface ITabRepository
    {
        List<Tab> GetAllTabs();
        public Tab GetTabById(int id);
        List<Tab> GetTabsByBanjoistId(int id);
    }
}
