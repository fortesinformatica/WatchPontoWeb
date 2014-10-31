using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using WatchPontoWeb.Models;

namespace WatchPontoWeb.Controllers
{
    public class DataSourceController : ApiController
    {
        [HttpGet]
        public HttpResponseMessage Extrato([FromUri] string filtro)
        {
            var pis = filtro.Split('|')[0].Trim();
            var dataInicial = filtro.Split('|')[1].Trim();
            var dataFinal = filtro.Split('|')[2].Trim();
            object dados = new {};

            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("http://localhost:9000/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                var response =
                    client.GetAsync(string.Format("http://fortesponto.azurewebsites.net/api/Ocorrencias/{0}/{1}/{2}",
                        pis, dataInicial, dataFinal)).Result;

                if (response.IsSuccessStatusCode)
                    dados = response.Content.ReadAsAsync<dynamic>().Result;
            }

            return Request.CreateResponse(HttpStatusCode.OK, dados);
        }
    }
}