using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace eCommerceBackend.Features.Products
{
    [Route("api/v1/products")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        public ProductsController() { }

        [HttpGet]
        public IActionResult GetProducts()
        {
            return Ok();
        }

        [HttpGet("{id}")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                return Ok("");
            }
            catch
            {
                return BadRequest("");
            }

        }


        [HttpDelete("{id}")]
        public IActionResult DeleteProductById(int id)
        {
            return Ok("Product deleted");
        }


    }
}
