import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../../../utils/configAxios";

const Usersconfig = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    axiosEcommerce
      .get("/users", {
        headers: {
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token,
        },
      })
      .then((response) => {
        console.log(response)
        setUsuarios(response.data.users);
      });
  }, []);
  return (
    <div>
      <h1 className="text-xl mb-4"> Usuarios</h1>
      <hr className="py-[1px] bg-blue-500 " />
      <section className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <article className="flex flex-col overflow-auto">
          <table className="table-auto min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">Apellidos</th>
                <th className="border border-gray-300 p-2">Cedula</th>
                <th className="border border-gray-300 p-2">Correo</th>
                <th className="border border-gray-300 p-2">Celular</th>
                <th className="border border-gray-300 p-2">Rol</th>
                <th className="border border-gray-300 p-2">Estado</th>
                <th className="border border-gray-300 p-2" colSpan={2}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {usuarios.map((usuario) => (
                <tr key={usuario.id} className="hover:bg-gray-200">
                  <td className="border border-gray-300 p-2">
                    {usuario.name}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {usuario.lastName}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {usuario.dni}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {usuario.email}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {usuario.cellphone}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <span className="bg-green-500 px-2 py-1 rounded-full text-white">
                      {usuario.roleId === 1
                        ? "Administrador"
                        : usuario.roleId === 2
                        ? "Profesor"
                        : usuario.roleId === 3
                        ? "Estudiante"
                        : "Invitado"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <span
                      className={`${
                        usuario.status ? "bg-green-500" : "bg-red-500"
                      } px-2 py-1 rounded-full text-white`}
                    >
                      {usuario.status ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-md">
                      Editar
                    </button>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
    </div>
  );
};

export default Usersconfig;
