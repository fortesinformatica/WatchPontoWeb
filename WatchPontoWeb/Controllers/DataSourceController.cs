using System;
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
        public HttpResponseMessage Extrato(FiltroExtrato filtro)
        {
            var dados = new List<dynamic>
            {
                new
                {
                    Dia = DateTime.Now.AddDays(-2).Date,
                    Batidas = new List<dynamic>
                    {
                        new {Tipo = "Relógio", Hora = "08:00:00"},
                        new {Tipo = "Relógio", Hora = "12:00:00"},
                        new {Tipo = "Relógio", Hora = "13:00:00"},
                        new {Tipo = "Relógio", Hora = "16:00:00"},
                        new {Tipo = "Relógio", Hora = "17:00:00"},
                        new {Tipo = "Relógio", Hora = "18:00:00"}
                    },
                    Quebras = new List<string>()
                },
                new
                {
                    Dia = DateTime.Now.AddDays(-1).Date,
                    Batidas = new List<dynamic>
                    {
                        new {Tipo = "Relógio", Hora = "08:00:00"},
                        new {Tipo = "Relógio", Hora = "12:00:00"},
                        new {Tipo = "Relógio", Hora = "13:00:00"},
                        new {Tipo = "Relógio", Hora = "18:00:00"}
                    },
                    Quebras = new List<string>
                    {
                        "Quebra por excedência de Horário"
                    }
                },
                new
                {
                    Dia = DateTime.Now.Date,
                    Batidas = new List<dynamic>
                    {
                        new {Tipo = "Relógio", Hora = "08:00:00"},
                        new {Tipo = "Relógio", Hora = "12:00:00"},
                        new {Tipo = "Relógio", Hora = "13:00:00"},
                        new {Tipo = "Manual", Motivo = "Esquecimento", Hora = "18:00:00"}
                    },
                    Quebras = new List<string>
                    {
                        "Quebra por excedência de Horário",
                        "Esquecimento de batida"
                    }
                }
            };

            return Request.CreateResponse(HttpStatusCode.OK, dados);
        }
    }
}