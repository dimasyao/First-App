using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace PPMT.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {

        public TaskController() 
        { 
        }

        [HttpGet]
        [Route("GetTasks")]
        public JsonResult Get() 
        {
            return new JsonResult("Task");
        }

    }
}
