using System.Web.Mvc;


namespace DEMO.APP.App_Start
{
    public class SessionExpireCheck : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)

        {
            var session = filterContext.HttpContext.Session["IsAuthenticated"];
            if (session == null || (bool)session == false)
                //filterContext.Result = new RedirectResult(string.Format("/Account/Signout?targetUrl={0}", filterContext.HttpContext.Request.Url.AbsolutePath));
                filterContext.Result = new RedirectToRouteResult(new System.Web.Routing.RouteValueDictionary { { "Controller", "Account" },{ "Action", "Signout" } });
        }
    }
}