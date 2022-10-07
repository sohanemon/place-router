import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        id='header'
        className='w-full z-30 py-1 sticky top-0 bg-white shadow-lg border-b border-emerald-400'
      >
        <div className='w-full flex items-center justify-between mt-0 px-6 py-2'>
          <label
            htmlFor='menu-toggle'
            className='cursor-pointer md:hidden block'
          >
            <svg
              className='fill-current text-emerald-600'
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
            >
              <title>menu</title>
              <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path>
            </svg>
          </label>
          <input className='hidden' type='checkbox' id='menu-toggle' />

          <div
            className='hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1'
            id='menu'
          >
            <nav>
              <ul className='md:flex items-center justify-between text-emerald-600 pt-4 md:pt-0'>
                {navs.map((e) => (
                  <li key={e}>
                    <Link
                      to={`/${e === "home" ? "" : e}`}
                      className='inline-block no-underline hover:text-emerald-800 font-medium py-2 px-4 lg:-ml-2 capitalize'
                    >
                      {e}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div
            className='order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4'
            id='nav-content'
          >
            <div className='auth flex items-center w-full md:w-full font-semibold'>
              <button className='active:scale-95 transition-all bg-transparent text-gray-800  px-4 py-[5px] rounded border border-gray-300 mr-4 hover:bg-gray-100 hover:text-gray-700'>
                Sign in
              </button>
              <button className='active:scale-95 transition-all bg-emerald-600 text-gray-200  px-4 py-[5px] rounded  hover:bg-emerald-500 hover:text-gray-100'>
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const navs = ["home", "photos", "timeline", "users", "about"];
