using DEMO.APP.App_Start;
using System.Web.Mvc;

namespace DEMO.APP.Controllers
{
    [SessionExpireCheck]
    public class RoleSetupController : Controller
    {
        // GET: RoleSetup
        public ActionResult Index()
        {
            return View();
        }
    }
}