import Home from "./Views/Home/index";
import About from "./Views/About/About";
import Contact from "./Views/Contact";
import BlogsListing from "./Views/Blogs/BlogsListing/BlogsListing";
import SingleBlog from "./Views/Blogs/SingleBlog/SingleBlog";
import JobsListing from "./Views/Jobs/JobsListing/JobsListing";
import SingleJob from "./Views/Jobs/SingleJob/SingleJob";

const ROUTES = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact-us",
    component: Contact,
  },
  {
    path: "/all-blogs",
    component: BlogsListing,
  },
  {
    path: "/blog/id",
    component: SingleBlog,
  },
  {
    path: "/all-jobs",
    component: JobsListing,
  },
  {
    path: "/jobs/id",
    component: SingleJob,
  },
 
];


export default ROUTES;