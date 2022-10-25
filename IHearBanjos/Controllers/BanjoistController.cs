using Microsoft.AspNetCore.Mvc;

namespace IHearBanjos.Controllers
{
    public class BanjoistController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
