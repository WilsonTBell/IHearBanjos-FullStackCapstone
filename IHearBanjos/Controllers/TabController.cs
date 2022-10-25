using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using IHearBanjos.Models;
using IHearBanjos.Repositories;


namespace IHearBanjos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TabController : ControllerBase
    {
        private readonly ITabRepository _tabRepository;
        private readonly IBanjoistRepository _banjoistRepository;

        public TabController(ITabRepository tabRepository, IBanjoistRepository banjoistRepository)
        {
            _tabRepository = tabRepository;
            _banjoistRepository = banjoistRepository;
        }

        // GET: api/<ValuesController>
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_tabRepository.GetAllTabs());
        }

        [HttpGet("MyPosts")]
        public IActionResult GetMyPosts()
        {
            Banjoist currentBanjoist = GetCurrentBanjoist();
            return Ok(_tabRepository.GetTabsByBanjoistId(currentBanjoist.Id));
        }

        // GET api/<ValuesController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var tab = _tabRepository.GetTabById(id);
            if (tab == null)
            {
                return NotFound();
            }
            return Ok(tab);
        }

        // POST api/<ValuesController>
        [HttpPost]
        public void Tab([FromBody] string value)
        {
        }

        // PUT api/<ValuesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<ValuesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }

        private Banjoist GetCurrentBanjoist()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _banjoistRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}

