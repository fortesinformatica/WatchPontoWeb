using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WatchPontoWeb.Startup))]
namespace WatchPontoWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            
        }
    }
}
