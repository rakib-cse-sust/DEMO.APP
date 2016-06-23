using DEMO.APP.App_Start;
using System.Web.Mvc;

namespace DEMO.APP.Controllers
{
    [SessionExpireCheck]
    public class DashboardController : Controller
    {
        // GET: Dashboard
        public ActionResult Index()
        {
            return View();
        }
    }
}