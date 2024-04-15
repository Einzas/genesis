import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../../../utils/configAxios";

const PermisosConfig = () => {
  const [permisos, setPermisos] = useState([]);

  // Función para obtener los permisos desde el backend
  function getPermisos() {
    axiosEcommerce
      .get("/permissions", {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token,
        },
      })
      .then((response) => {
        console.log(response);
        setPermisos(response.data.permisions);
      })
      .catch((error) => {
        console.error('Error al obtener los permisos:', error);
      });
  }

  useEffect(() => {
    getPermisos();
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-4">Permisos</h1>
      <hr className="py-[1px] bg-blue-500 " />
      <section className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <article className="flex flex-col overflow-auto">
          <table className="table-auto min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Nombre</th>
                <th className="border border-gray-300 p-2">Detalle</th>
                <th className="border border-gray-300 p-2">Estado</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {permisos.map((permissions) => (
                <tr key={permissions.id_permiso} className="hover:bg-gray-200">
                  <td className="border border-gray-300 p-2">{permissions.id_permiso}</td>
                  <td className="border border-gray-300 p-2">{permissions.nombre_permiso}</td>
                  <td className="border border-gray-300 p-2">{permissions.detalle_permiso}</td>
                  <td className="border border-gray-300 p-2">
                    <span
                      className={`${
                        permissions.estado_permiso ? "bg-green-500" : "bg-red-500"
                      } px-2 py-1 rounded-full text-white`}
                    >
                      {permissions.estado_permiso ? "Activo" : "Inactivo"}
                    </span>
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

export default PermisosConfig;
