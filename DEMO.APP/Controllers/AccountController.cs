using DEMO.APP.App_Start;
using System.Web.Mvc;

namespace DEMO.APP.Controllers
{
    public class AccountController : Controller
    {
        [NoCache]
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        //[ValidateAntiForgeryAngular]
        public ActionResult Signin(FormCollection fc)
        {
            Session["IsAuthenticated"] = true;
            return RedirectToAction("Index", "Dashboard");
        }

        public ActionResult Signout()
        {
            Session["IsAuthenticated"] = false;
            return RedirectToAction("Index");
        }

        public ActionResult Register()
        {
            return View();
        }
    }
}