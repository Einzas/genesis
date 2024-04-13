import React, { useEffect, useState } from 'react';
import { axiosEcommerce } from '../../../utils/configAxios';

const Rol = () => {
  const [rols, setRols] = useState([]);
  const [editingRole, setEditingRole] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [creatingRole, setCreatingRole] = useState(false);
  const [deletingRole, setDeletingRole] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [newRoleData, setNewRoleData] = useState({
    nombre_rol: '',
    estado_rol: 'Activo'
  });

  const openEditModal = (role) => {
    setEditingRole(role);
    setModalOpen(true);
    setCreatingRole(false);
  };

  const openCreateModal = () => {
    setModalOpen(true);
    setCreatingRole(true);
    setEditingRole(null);
    setNewRoleData({
      nombre_rol: '',
      estado_rol: 'Activo'
    });
  };

  const closeEditModal = () => {
    setEditingRole(null);
    setModalOpen(false);
  };

  const closeCreateModal = () => {
    setModalOpen(false);
    setCreatingRole(false);
  };

  const openDeleteConfirmation = (role) => {
    setDeletingRole(role);
    setConfirmDelete(true);
  };

  const closeDeleteConfirmation = () => {
    setDeletingRole(null);
    setConfirmDelete(false);
  };

  const handleDelete = () => {
    axiosEcommerce.delete(`/roles/${deletingRole.role_id}`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token
      }
    })
    .then(() => {
      getRoles()
      closeDeleteConfirmation();
    })
    .catch((error) => {
      console.error('Error al eliminar el rol:', error);
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();
  
    const updatedRole = {
      nombre_rol: event.target.nombre_rol.value,
      estado_rol: event.target.estado_rol.value === "Activo" ? true : false
    };
    axiosEcommerce.patch(
      `/roles/${editingRole.role_id}`,
      {
        nombre_rol: updatedRole.nombre_rol
      },
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token
        }
      }
    )
    .then((response) => {
      console.log('Rol editado:', response.data);
      getRoles();
      closeEditModal();
    })
    .catch((error) => {
      console.error('Error al editar el rol:', error);
    });
  };

  const handleNewRoleSubmit = (event) => {
    event.preventDefault();
    axiosEcommerce.post(
      '/roles',
      {
        nombre_rol: newRoleData.nombre_rol,
        estado_rol: newRoleData.estado_rol === "Activo" ? true : false
      },
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token
        }
      }
    )
    .then((response) => {
      console.log('Nuevo rol creado:', response.data);
      getRoles();
      closeCreateModal();
    })
    .catch((error) => {
      console.error('Error al crear el rol:', error);
    });
  };

  function getRoles() {
    axiosEcommerce
      .get("/roles", {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token,
        },
      })
      .then((response) => {
        console.log(response);
        setRols(response.data.roles);
      })
      .catch((error) => {
        console.error('Error al obtener los roles:', error);
      });
  }

  useEffect(() => {
    getRoles()
  }, []);

  return (
    <div>
      <section className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl inline-block">Roles</h1>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-md text-sm" onClick={openCreateModal}>Crear Usuario</button>
        </div>
        <hr className="py-[1px] bg-blue-500 " />
        <article className="flex flex-col overflow-auto">
          <table className="table-auto min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="border border-gray-300 p-2">Nombre rol</th>
                <th className="border border-gray-300 p-2">Estado Rol</th>
                <th className="border border-gray-300 p-2 text-center" colSpan={3}>
                  Acciones
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {rols.map((role) => (
                <tr key={role.role_id} className="hover:bg-gray-200">
                  <td className="border border-gray-300 p-2">{role.nombre_rol}</td>
                  <td className="border border-gray-300 p-2">
                    <span className={`${role.estado_rol  =="Activo"? "bg-green-500" : "bg-red-500"} px-2 py-1 rounded-full text-white`}>
                      {role.estado_rol =="Activo" ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-md" onClick={() => openEditModal(role)}>
                      Editar
                    </button>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md" onClick={() => openDeleteConfirmation(role)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      </section>
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-bold mb-4">{creatingRole ? 'Crear Nuevo Rol' : 'Editar Rol'}</h2>
            {creatingRole ? (
              <form onSubmit={handleNewRoleSubmit}>
                <div className="mb-4">
                  <label htmlFor="nombre_rol" className="block text-sm font-medium text-gray-700">Nombre del Rol</label>
                  <input type="text" id="nombre_rol" name="nombre_rol" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newRoleData.nombre_rol} onChange={(e) => setNewRoleData({...newRoleData, nombre_rol: e.target.value})} />
                </div>
                <div className="mb-4">
                  <label htmlFor="estado_rol" className="block text-sm font-medium text-gray-700">Estado del Rol</label>
                  <select id="estado_rol" name="estado_rol" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newRoleData.estado_rol} onChange={(e) => setNewRoleData({...newRoleData, estado_rol: e.target.value})}>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-md" onClick={closeCreateModal}>Cancelar</button>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Guardar</button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleEdit}>
                <div className="mb-4">
                  <label htmlFor="nombre_rol" className="block text-sm font-medium text-gray-700">Nombre del Rol</label>
                  <input type="text" id="nombre_rol" name="nombre_rol" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingRole.nombre_rol} />
                </div>
                <div className="mb-4">
                  <label htmlFor="estado_rol" className="block text-sm font-medium text-gray-700">Estado del Rol</label>
                  <select id="estado_rol" name="estado_rol" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingRole.estado_rol ? "Activo" : "Inactivo"}>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
                <div className="flex justify-end">
                  <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-md" onClick={closeEditModal}>Cancelar</button>
                  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">Guardar</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      {confirmDelete && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-bold mb-4">Eliminar Rol</h2>
            <p>¿Seguro que quieres eliminar el rol <strong>{deletingRole.nombre_rol}</strong>?</p>
            <div className="flex justify-end mt-4">
              <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-md" onClick={closeDeleteConfirmation}>Cancelar</button>
              <button type="button" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md" onClick={handleDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rol;
