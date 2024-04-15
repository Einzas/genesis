import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../../../utils/configAxios";

const Usersconfig = () => {
  const [users, setUsuarios] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [creatingUser, setCreatingUser] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [newUserData, setNewUserData] = useState({
    name: '',
    lastName: '',
    dni: '',
    email: '',
    cellphone: '',
    roleId: 1,
    status: true
  });

  const openEditModal = (usuario) => {
    setEditingUser(usuario);
    setModalOpen(true);
    setCreatingUser(false);
  };

  const openCreateModal = () => {
    setModalOpen(true);
    setCreatingUser(true);
    setEditingUser(null);
    setNewUserData({
      name: '',
      lastName: '',
      dni: '',
      email: '',
      cellphone: '',
      roleId: 1,
      status: true
    });
  };

  const closeEditModal = () => {
    setEditingUser(null);
    setModalOpen(false);
  };

  const closeCreateModal = () => {
    setModalOpen(false);
    setCreatingUser(false);
  };

  const openDeleteConfirmation = (usuario) => {
    setDeletingUser(usuario);
    setConfirmDelete(true);
  };

  const closeDeleteConfirmation = () => {
    setDeletingUser(null);
    setConfirmDelete(false);
  };

  const handleDelete = () => {
    axiosEcommerce.delete(`/users/${deletingUser.id}`, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token
      }
    })
    .then(() => {
      getUsers();
      closeDeleteConfirmation();
    })
    .catch((error) => {
      console.error('Error al eliminar el usuario:', error);
    });
  };

  const handleEdit = (event) => {
    event.preventDefault();

    const updatedUser = {
      name: event.target.name.value,
      lastName: event.target.lastName.value,
      dni: event.target.dni.value,
      email: event.target.email.value,
      cellphone: event.target.cellphone.value,
      roleId: event.target.roleId.value,
      status: event.target.status.value === "Activo" ? true : false
    };

    axiosEcommerce.patch(
      `/users/${editingUser.id}`,
      updatedUser,
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token
        }
      }
    )
    .then((response) => {
      console.log('Usuario editado:', response.data);
      getUsers();
      closeEditModal();
    })
    .catch((error) => {
      console.error('Error al editar el usuario:', error);
    });
  };

  const handleNewUserSubmit = (event) => {
    event.preventDefault();

    axiosEcommerce.post(
      '/users',
      newUserData,
      {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token
        }
      }
    )
    .then((response) => {
      console.log('Nuevo usuario creado:', response.data);
      getUsers();
      closeCreateModal();
    })
    .catch((error) => {
      console.error('Error al crear el usuario:', error);
    });
  };

  function getUsers() {
    axiosEcommerce
      .get("/users", {
        headers: {
          Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token,
        },
      })
      .then((response) => {
        console.log(response);
        setUsuarios(response.data.users);
      })
      .catch((error) => {
        console.error('Error al obtener los usuarios:', error);
      });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-xl mb-4">Usuarios</h1>
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
              {users.map((users) => (
                <tr key={users.id} className="hover:bg-gray-200">
                  <td className="border border-gray-300 p-2">
                    {users.name}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {users.lastName}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {users.dni}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {users.email}
                  </td>
                  <td className="border border-gray-300 p-2">
                    {users.cellphone}
                  </td>
                  <td className="border border-gray-300 p-2">
                    <span className="bg-green-500 px-2 py-1 rounded-full text-white">
                      {users.roleId === 1
                        ? "Administrador"
                        : users.roleId === 2
                        ? "Profesor"
                        : users.roleId === 3
                        ? "Estudiante"
                        : "Invitado"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <span
                      className={`${
                        users.status ? "bg-green-500" : "bg-red-500"
                      } px-2 py-1 rounded-full text-white`}
                    >
                      {users.status ? "Activo" : "Inactivo"}
                    </span>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-md" onClick={() => openEditModal(usuario)}>
                      Editar
                    </button>
                  </td>
                  <td className="border border-gray-300 p-2">
                    <button className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md" onClick={() => openDeleteConfirmation(usuario)}>
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
            <h2 className="text-lg font-bold mb-4">{creatingUser ? 'Crear Nuevo Usuario' : 'Editar Usuario'}</h2>
            {creatingUser ? (
              <form onSubmit={handleNewUserSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newUserData.name} onChange={(e) => setNewUserData({...newUserData, name: e.target.value})} />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
                  <input type="text" id="lastName" name="lastName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newUserData.lastName} onChange={(e) => setNewUserData({...newUserData, lastName: e.target.value})} />
                </div>
                <div className="mb-4">
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700">Cedula</label>
                  <input type="text" id="dni" name="dni" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newUserData.dni} onChange={(e) => setNewUserData({...newUserData, dni: e.target.value})} />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
                  <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newUserData.email} onChange={(e) => setNewUserData({...newUserData, email: e.target.value})} />
                </div>
                <div className="mb-4">
                  <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700">Celular</label>
                  <input type="text" id="cellphone" name="cellphone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newUserData.cellphone} onChange={(e) => setNewUserData({...newUserData, cellphone: e.target.value})} />
                </div>
                <div className="mb-4">
                  <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">Rol</label>
                  <select id="roleId" name="roleId" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newUserData.roleId} onChange={(e) => setNewUserData({...newUserData, roleId: e.target.value})}>
                    <option value="1">Administrador</option>
                    <option value="2">Profesor</option>
                    <option value="3">Estudiante</option>
                    <option value="4">Invitado</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado</label>
                  <select id="status" name="status" className="mt-1 p-2 border border-gray-300 rounded-md w-full" value={newUserData.status ? "Activo" : "Inactivo"} onChange={(e) => setNewUserData({...newUserData, status: e.target.value === "Activo" ? true : false})}>
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
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input type="text" id="name" name="name" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingUser.name} />
                </div>
                <div className="mb-4">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
                  <input type="text" id="lastName" name="lastName" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingUser.lastName} />
                </div>
                <div className="mb-4">
                  <label htmlFor="dni" className="block text-sm font-medium text-gray-700">Cedula</label>
                  <input type="text" id="dni" name="dni" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingUser.dni} />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo</label>
                  <input type="email" id="email" name="email" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingUser.email} />
                </div>
                <div className="mb-4">
                  <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700">Celular</label>
                  <input type="text" id="cellphone" name="cellphone" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingUser.cellphone} />
                </div>
                <div className="mb-4">
                  <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">Rol</label>
                  <select id="roleId" name="roleId" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingUser.roleId}>
                    <option value="1">Administrador</option>
                    <option value="2">Profesor</option>
                    <option value="3">Estudiante</option>
                    <option value="4">Invitado</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="status" className="block text-sm font-medium text-gray-700">Estado</label>
                  <select id="status" name="status" className="mt-1 p-2 border border-gray-300 rounded-md w-full" defaultValue={editingUser.status ? "Activo" : "Inactivo"}>
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
            <h2 className="text-lg font-bold mb-4">Eliminar Usuario</h2>
            <p>¿Seguro que quieres eliminar el usuario <strong>{deletingUser.name}</strong>?</p>
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

export default Usersconfig;