using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WatchPontoWeb.Models;

namespace WatchPontoWeb.Controllers
{
    public class DataSourceController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Login(FiltroExtrato filtro)
        {
            //return login != null && usuarios.Any(u => u.pis.Equals(login.pis))
            //    ? Request.CreateResponse(HttpStatusCode.OK, login)
            //    : Request.CreateResponse(HttpStatusCode.BadRequest);

            return Request.CreateResponse(HttpStatusCode.OK);
        }
    }
}