import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-[100%] w-[100%] relative">
        <nav className="absolute navlinks sm:block 
         z-50 top-[50%] 
        translate-y-[-50%] left-[15px] ">
          <ul className="flex flex-col gap-[7px]">
            <li>
              <Link class="text-white link font-medium link"  data-replace="Home" to="/"><span>Home</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Overview" to="/Overview"><span>Overview</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Skills" to="/Skills"><span>Skills</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Projects" to="/Projects"><span>Projects</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Contact" to="/contact"><span>Contact</span></Link>
            </li>
          </ul>
        </nav>
        <nav className="absolute block sm:hidden w-full bottom-0 z-20  left-[50%] translate-x-[-50%]">
          <ul className="flex items-center h-full gap-10 w-full justify-center bg-black p-2 rounded-lg ">
            <li>
              <Link class="text-white link font-medium link"  data-replace="Home" to="/"><span>Home</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Overview" to="/Overview"><span>Overview</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Skills" to="/Skills"><span>Skills</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Projects" to="/Projects"><span>Projects</span></Link>
            </li>
            <li>
              <Link class="text-white link font-medium link" data-replace="Contact" to="/contact"><span>Contact</span></Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </div>
    </>
  )
};

export default Layout;