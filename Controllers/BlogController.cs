using Microsoft.AspNetCore.Mvc;
using qrogrammer.Data;
using qrogrammer.Models;
using qrogrammer.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace qrogrammer.Controllers
{
    [Route("Blogs")]
    public class BlogsController : Controller
    {
        private DataContext _data;

        public BlogsController(DataContext data)
        {
            _data = data;
        }

        [HttpGet]
        [Auth]
        public IActionResult Index()
        {
            return Json(_data.Blogs.Take(100));
        }

        [HttpGet]
        [Route("{id}")]
        public IActionResult Get(int id)
        {
            return Json(_data.Blogs.Find(id));
        }

        [HttpPost]
        [Route("Add")]
        [Auth]
        public IActionResult Add([FromBody] Blog blog)
        {
            blog.ReleaseDate = DateTime.Now;
            _data.Blogs.Add(blog);
            _data.SaveChanges();
            return Ok();
        }
    }
}
