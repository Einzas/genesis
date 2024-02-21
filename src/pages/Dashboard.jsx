import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState(false);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div>
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
        {/* sidebar */}
        <div
          className={`fixed transition-all ${
            sidebar ? "-left-0" : "-left-full"
          } lg:static top-0  w-[80%] md:w-[50%] lg:w-full  h-full overflow-y-scroll md:overflow-hidden col-span-1 p-8 border-r z-50 bg-white`}
        >
          {/* Logo */}
          <div className="text-center p-8">
            <h1 className="uppercase font-bold tracking-[4px]">Logo</h1>
          </div>
          {/* Menu */}
          <div className=" h-[750px] flex flex-col justify-between">
            <nav>
              <ul>
                <li>
                  <Link
                    className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                    to={"home"}
                  >
                    <i className="bx bxs-dashboard"></i> Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                    to={"about"}
                  >
                    <i className="bx bx-info-circle"></i>
                    Acerca
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                    to={"contact"}
                  >
                    <i className="bx bx-food-menu"></i>
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col gap-4">
              <img src="/assets/draw.svg" alt="Image" />
              <div className="bg-cyan-100 p-8 flex flex-col">
                <h3 className="text-xl text-center">Get UPGRADE</h3>
                <span className="text-gray-500 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
                <button className="bg-cyan-500 text-white p-2 rounded-lg">
                  Learn More
                </button>
              </div>
              <Link
                className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                to={"/logout"}
              >
                <i className="bx bx-log-out-circle text-3xl text-red-500"></i>
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Menu */}

        <button
          onClick={handleSidebar}
          className="grid lg:hidden fixed place-content-center bottom-4 right-4 p-2 bg-cyan-500 z-40 text-white rounded-full text-2xl"
        >
          {sidebar ? (
            <i className="bx bx-x"></i>
          ) : (
            <i className="bx bx-menu"></i>
          )}
        </button>

        {/* content  */}
        <div className=" col-span-5">
          {/* header */}
          <header className="flex flex-col md:flex-row gap-4 items-center justify-between p-4 md:px-8 lg:px-12 w-full">
            {/* Search */}
            <form className="w-full md:w-[40%] lg:w-[30%] order-1 md:order-none">
              <div className="relative">
                <i className="bx bx-search absolute left-2 top-3 "></i>
                <input
                  type="text"
                  className="bg-gray-200 pl-8 pr-4 py-2 outline-none w-full rounded-md"
                  placeholder="Search"
                />
              </div>
            </form>
            {/* Notification */}
            <nav className="md:w-[60%]  lg:w-[70%] flex w-full justify-center md:justify-end">
              <ul className="flex items-center gap-4">
                <li>
                  <Link to="/notification" className="relative">
                    <i className="bx bx-bell text-2xl"></i>
                    <i className="bx bxs-circle absolute -right-0 -top-3 text-xs text-red-400"></i>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-1" to="/profile">
                    <span>Jorge Falcones</span>
                    <i className="bx bx-chevron-down"></i>
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          {/* Main */}
          <main className="p-4 md:p-8 lg:p-12 bg-gray-100">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-gray-500">
                Dashboard
              </h1>
            </div>
            {/* Search content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-6">
              <form className="col-span-1 md:col-span-2">
                <div className="relative">
                  <i className="bx bx-search absolute left-2 top-3 text-cyan-300"></i>
                  <input
                    type="text"
                    className="bg-white pl-8 pr-4 py-2 outline-none w-full rounded-md"
                    placeholder="Search"
                  />
                </div>
              </form>
              <form className="co-span-1">
                <div className="relative">
                  <i className="bx bx-map-pin absolute left-2 top-3 text-cyan-300"></i>
                  <select
                    type="text"
                    className="bg-white text-gray-400 pl-8 pr-4 py-2 outline-none w-full rounded-md"
                    placeholder="Location"
                  >
                    <option value="">Anywhere</option>
                  </select>
                </div>
              </form>
              <form className="col-span-1 relative">
                <div className="relative">
                  <i className="bx bx-filter absolute left-2 top-3 text-cyan-300"></i>
                  <input
                    type="text"
                    className="bg-white pl-8 pr-4 py-2 outline-none w-full rounded-md"
                    placeholder="Filter"
                  />
                </div>
                <span className="absolute text-sm right-2 top-[7px] rounded-full text-white bg-cyan-500 py-1 px-[10px]">
                  4
                </span>
              </form>
            </div>

            {/* bubbles */}
            <div className="flex items-center flex-wrap gap-4 mb-20">
              <span className="bg-white flex items-center gap-4 pl-4 pr-6 py-2 rounded-full">
                <button className="bg-cyan-100 grid place-content-center py-1 rounded-full text-xs text-cyan-400 px-1">
                  <i className="bx bx-x"></i>
                </button>
                <span className="text-gray-500">Design</span>
              </span>
              <span className="bg-white flex items-center gap-4 pl-4 pr-6 py-2 rounded-full">
                <button className="bg-cyan-100 grid place-content-center py-1 rounded-full text-xs text-cyan-400 px-1">
                  <i className="bx bx-x"></i>
                </button>
                <span className="text-gray-500">Regular</span>
              </span>
              <span className="bg-white flex items-center gap-4 pl-4 pr-6 py-2 rounded-full">
                <button className="bg-cyan-100 grid place-content-center py-1 rounded-full text-xs text-cyan-400 px-1">
                  <i className="bx bx-x"></i>
                </button>
                <span className="text-gray-500">Full Time</span>
              </span>
              <span className="bg-white flex items-center gap-4 pl-4 pr-6 py-2 rounded-full">
                <button className="bg-cyan-100 grid place-content-center py-1 rounded-full text-xs text-cyan-400 px-1">
                  <i className="bx bx-x"></i>
                </button>
                <span className="text-gray-500">B2B</span>
              </span>
              <button className="text-gray-500 ml-4 ">Clear All</button>
            </div>

            {/* Results */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-gray-500">
                We`ve found <span className="text-cyan-500">523 results!</span>
              </p>
              <p className="flex gap-2 items-center">
                Sort by:{" "}
                <span className="text-cyan-600 font-bold hover:cursor-pointer">
                  Date
                </span>
                <i className="bx bx-chevron-down"></i>
              </p>
            </div>

            {/* Cards */}
            <Link
              to={"#"}
              className="bg-white transition-all mb-4 rounded-2xl hover:border-cyan-300 border-2 border-transparent p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg"
            >
              {/* Icon */}
              <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                <i className="bx bxl-dropbox text-5xl bg-cyan-100 rounded-md p-4"></i>
              </div>
              {/* Title */}
              <div className="w-full md:w-[70%]">
                <h1 className=" text-xl flex items-center gap-4 mb-2">
                  UX Designer{" "}
                  <span className="text-xs py-1 px-2 rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    Remote
                  </span>
                  <span className="text-xs py-1 px-2 rounded-full bg-green-100 text-green-600 font-bold">
                    Sketch
                  </span>{" "}
                </h1>
                <p className="text-gray-500">Dropbox ---- Warzawa</p>
              </div>
              {/* Price Ranges */}
              <div className="w-full md:w-[20%] flex flex-col items-end">
                <h3 className="text-xl text-gray-500 mb-2">8.8 - 13.7K PLN</h3>
                <p className="text-gray-400">2 days ago</p>
              </div>
            </Link>
            <Link
              to={"#"}
              className="bg-white transition-all mb-4 rounded-2xl hover:border-cyan-300 border-2 border-transparent p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg"
            >
              {/* Icon */}
              <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                <i className="bx bxl-youtube text-5xl bg-cyan-100 rounded-md p-4"></i>
              </div>
              {/* Title */}
              <div className="w-full md:w-[70%]">
                <h1 className=" text-xl flex items-center gap-4 mb-2">
                  Database Administrator{" "}
                  <span className="text-xs py-1 px-2 rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    Remote
                  </span>
                  <span className="text-xs py-1 px-2 rounded-full bg-green-100 text-green-600 font-bold">
                    Sketch
                  </span>{" "}
                </h1>
                <p className="text-gray-500">Youtube ---- Canada</p>
              </div>
              {/* Price Ranges */}
              <div className="w-full md:w-[20%] flex flex-col items-end">
                <h3 className="text-xl text-gray-500 mb-2">15.6 - 18.7K USD</h3>
                <p className="text-gray-400">2 days ago</p>
              </div>
            </Link>
            <Link
              to={"#"}
              className="bg-white transition-all mb-4 rounded-2xl hover:border-cyan-300 border-2 border-transparent p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg"
            >
              {/* Icon */}
              <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                <i className="bx bxl-google text-5xl bg-cyan-100 rounded-md p-4"></i>
              </div>
              {/* Title */}
              <div className="w-full md:w-[70%]">
                <h1 className=" text-xl flex items-center gap-4 mb-2">
                  SEO Managment{" "}
                  <span className="text-xs py-1 px-2 rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    Remote
                  </span>
                  <span className="text-xs py-1 px-2 rounded-full bg-green-100 text-green-600 font-bold">
                    Sketch
                  </span>{" "}
                </h1>
                <p className="text-gray-500">Google ---- Taiwan</p>
              </div>
              {/* Price Ranges */}
              <div className="w-full md:w-[20%] flex flex-col items-end">
                <h3 className="text-xl text-gray-500 mb-2">12.3 - 15.7K PLN</h3>
                <p className="text-gray-400">4 days ago</p>
              </div>
            </Link>
            <Link
              to={"#"}
              className="bg-white transition-all mb-4 rounded-2xl hover:border-cyan-300 border-2 border-transparent p-8 flex flex-col md:flex-row gap-8 w-full drop-shadow-lg"
            >
              {/* Icon */}
              <div className="w-full md:w-[10%] flex items-center justify-start md:justify-center">
                <i className="bx bxl-amazon text-5xl bg-cyan-100 rounded-md p-4"></i>
              </div>
              {/* Title */}
              <div className="w-full md:w-[70%]">
                <h1 className=" text-xl flex items-center gap-4 mb-2">
                  Product Designer{" "}
                  <span className="text-xs py-1 px-2 rounded-full bg-cyan-100 text-cyan-600 font-bold">
                    Remote
                  </span>
                </h1>
                <p className="text-gray-500">Amazon ---- Warzta</p>
              </div>
              {/* Price Ranges */}
              <div className="w-full md:w-[20%] flex flex-col items-end">
                <h3 className="text-xl text-gray-500 mb-2">8.8 - 14.7K PLN</h3>
                <p className="text-gray-400">12 days ago</p>
              </div>
            </Link>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
