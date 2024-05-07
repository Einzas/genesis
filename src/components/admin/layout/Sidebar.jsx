import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosEcommerce } from "../../../utils/configAxios";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuOpen1, setMenuOpen1] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Aquí obtienes el rol del usuario del localStorage o de donde lo almacenes
    const roleId = JSON.parse(localStorage.getItem("roleId"));
    if (roleId) {
      setUserRole(roleId.roleId);
    }
  }, []);

  // Función para obtener usuarios solo si el rol del usuario es 1 (administrador) o 2 (maestro)
  function getUsers() {
    if (userRole === 1 || userRole === 2) {
      axiosEcommerce
        .get("/users", {
          headers: {
            Authorization: "Bearer " + JSON.parse(localStorage.getItem("roleId")).token,
          },
        })
        .then((response) => {
          setUsuarios(response.data.users);
        })
        .catch((error) => {
          console.error('Error getting users:', error);
        });
    } else {
      console.log("No tienes permiso para ver usuarios.");
    }
  }

  return (
    <div
      className={`fixed transition-all ${
        sidebar ? "-left-0" : "-left-full"
      } lg:static top-0  w-[80%] md:w-[50%] lg:w-full  h-full overflow-y-scroll md:overflow-hidden col-span-1 p-8 border-r z-50 bg-white`}
    >
      <div className="text-center p-8">
        <img src="/img/logoas1.png" alt="logo" className="mx-auto h-20 w-auto" />
      </div>
      <div className="h-[750px] flex flex-col justify-between">
        <nav>
          <ul>
            <li>
              <Link
                className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                to={"/admin"}
              >
                <i className="bx bxs-dashboard"></i> Dashboard
              </Link>
            </li>
            <li>
              <div
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                <i className="bx bx-info-circle"></i> Admin
                <i
                  className={`${
                    menuOpen ? "transform rotate-180" : "transform rotate-0"
                  } bx bx-chevron-down ml-auto`}
                ></i>
              </div>
              {menuOpen && (
                <ul className="pl-8">
                  {userRole === 1 || userRole === 2 ? (
                    <>
                      <li>
                        <Link
                          className="flex items-center gap-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                          to={"/admin/Users"}
                        >
                          Usuarios
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center gap-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                          to={"/admin/permisos"}
                        >
                          Permisos
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center gap-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                          to={"/admin/roles"}
                        >
                          Roles
                        </Link>
                      </li>
                    </>
                  ) : null}
                </ul>
              )}
            </li>
            <li>
              <div
                onClick={() => setMenuOpen1(!menuOpen1)}
                className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors cursor-pointer"
              >
                <i className="bx bx-food-menu"></i> Gestion cursos
                <i
                  className={`${
                    menuOpen1 ? "transform rotate-180" : "transform rotate-0"
                  } bx bx-chevron-down ml-auto`}
                ></i>
              </div>
              {menuOpen1 && (
                <ul className="pl-8">
                    <>
                      <li>
                        <Link
                          className="flex items-center gap-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                          to={"/admin/categorias"}
                        >
                          <i className='bx bx-category'></i>
                          Categorias
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="flex items-center gap-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                          to={"/admin/cursos"}
                        >
                          <i className='bx bxs-graduation' ></i>
                          Cursos
                        </Link>
                      </li>
                    </>
                </ul>
              )}
            </li>
            <li>
              <Link
                className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
                to={"contact"}
              >
                <i className="bx bxs-contact"></i>
                Contacto
              </Link>
            </li>
            <Link
              className="flex items-center gap-4 p-4 text-gray-400 hover:text-white rounded-lg hover:bg-cyan-400 transition-colors"
              to={"/login"}
            >
              <i className="bx bx-log-out-circle text-2xl text-red-500"></i>
              salir
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
