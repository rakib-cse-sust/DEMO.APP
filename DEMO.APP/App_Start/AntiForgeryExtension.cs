﻿using System;

namespace DEMO.APP.App_Start
{
    public static class AntiForgeryExtension
    {
        public static string RequestVerificationToken(System.Web.Mvc.HtmlHelper helper)
        {
            return String.Format("anti-forgery-token={0}", GetTokenHeaderValue());
        }

        private static string GetTokenHeaderValue()
        {
            string cookieToken, formToken;
            System.Web.Helpers.AntiForgery.GetTokens(null, out cookieToken, out formToken);
            return cookieToken + ":" + formToken;
        }
    }
}