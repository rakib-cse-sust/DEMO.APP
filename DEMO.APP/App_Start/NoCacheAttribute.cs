using System;
using System.Web;
using System.Web.Mvc;

namespace DEMO.APP.App_Start
{
    public class NoCacheAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuting(ResultExecutingContext filterContext)
        {
            var session = filterContext.HttpContext.Session["IsAuthenticated"];
            if (session == null)
            {
                filterContext.HttpContext.Response.Cache.SetExpires(DateTime.UtcNow.AddDays(-1));
                filterContext.HttpContext.Response.Cache.SetValidUntilExpires(false);
                filterContext.HttpContext.Response.Cache.SetRevalidation(HttpCacheRevalidation.AllCaches);
                filterContext.HttpContext.Response.Cache.SetCacheability(HttpCacheability.NoCache);
                filterContext.HttpContext.Response.Cache.SetNoStore();
                base.OnResultExecuting(filterContext);
            }
            else
                filterContext.HttpContext.Response.Redirect("~/Dashboard");
        }
    }
}