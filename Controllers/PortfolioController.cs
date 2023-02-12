using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Tradar.Web.Services;
//using Tradar.Web.Models;

namespace Tradar.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PortfolioController : ControllerBase
    {
        private static readonly string[] Positions = new[]
        {
        "AAPL", "TSLA", "VZ", "DIS", "F", "UBER", "PLTR", "TAN", "SPY", "GLD"
        };

        private readonly ILogger<PortfolioController> _logger;

        public PortfolioController(ILogger<PortfolioController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<TradeAnalysis> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new TradeAnalysis
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55)
            })
            .ToArray();
        }
    }
}