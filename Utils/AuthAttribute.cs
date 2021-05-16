using System;
using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using qrogrammer.Models;

namespace qrogrammer.Utils
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method)]
    public sealed class AuthAttribute : Attribute, IAuthorizationFilter
    {
        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var user = (User)context.HttpContext.Items[Constants.User];
            if (user == null)
            {
                context.Result = new JsonResult(new { messsage = "Unauthorized" })
                {
                    StatusCode = (int)HttpStatusCode.Unauthorized
                };
            }
        }
    }
}