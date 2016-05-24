using System.Web.Mvc;

namespace DEMO.APP.Controllers
{
    public class AccountController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        //[ValidateAntiForgeryAngular]
        public ActionResult Signin(FormCollection fc)
        {
            return RedirectToAction("Index", "Dashboard");
        }

        public ActionResult Signout()
        {
            return RedirectToAction("Index");
        }

        public ActionResult Register()
        {
            return View();
        }
    }
}