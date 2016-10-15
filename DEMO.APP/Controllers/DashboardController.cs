using DEMO.APP.App_Start;
using System.Web.Mvc;

namespace DEMO.APP.Controllers
{
    public class DashboardController : Controller
    {
        // GET: Dashboard
        [SessionExpireCheck]
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Isotope()
        {
            return View();
        }
    }
}