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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUserData(prevState => ({
      ...prevState,
      [name]: name === 'roleId' ? parseInt(value) : value
    }));
  };

  const openCreateModal = () => {
    setNewUserData({
      name: '',
      lastName: '',
      dni: '',
      email: '',
      cellphone: '',
      roleId: 1,
      status: true
    });
    setCreatingUser(true);
    setModalOpen(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setNewUserData({
      name: user.name,
      lastName: user.lastName,
      dni: user.dni,
      email: user.email,
      cellphone: user.cellphone,
      roleId: user.roleId,
      status: user.status
    });
    setCreatingUser(false);
    setModalOpen(true);
  };

  const closeModal = () => {
    setEditingUser(null);
    setCreatingUser(false);
    setModalOpen(false);
  };

  const openDeleteConfirmation = (user) => {
    setDeletingUser(user);
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

  const handleUserSubmit = (event) => {
    event.preventDefault();
    const endpoint = creatingUser ? '/users' : `/users/${editingUser.id}`;
    const method = creatingUser ? axiosEcommerce.post : axiosEcommerce.patch;

    method(endpoint, newUserData, {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token
      }
    })
    .then((response) => {
      console.log(`${creatingUser ? 'Created' : 'Updated'} user:`, response.data);
      getUsers();
      closeModal();
    })
    .catch((error) => {
      console.error(`Error ${creatingUser ? 'creating' : 'updating'} user:`, error);
    });
  };

  function getUsers() {
    axiosEcommerce.get("/users", {
      headers: {
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("userInfo")).token,
      },
    })
    .then((response) => {
      setUsuarios(response.data.users);
    })
    .catch((error) => {
      console.error('Error getting users:', error);
    });
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-xl mb-4">Usuarios</h1>
        <button
          onClick={openCreateModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Crear Usuario
        </button>
      </div>
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
                <th className="border border-gray-300 p-2" colSpan={2}>Acciones</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-200">
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.dni}</td>
                  <td>{user.email}</td>
                  <td>{user.cellphone}</td>
                  <td>{user.roleId === 1 ? "Administrador" : user.roleId === 2 ? "Profesor" : user.roleId === 3 ? "Estudiante" : "Invitado"}</td>
                  <td>{user.status ? "Activo" : "Inactivo"}</td>
                  <td>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => openEditModal(user)}>
                      Editar
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => openDeleteConfirmation(user)}>
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
            <form onSubmit={handleUserSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="name" name="name" value={newUserData.name} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Apellidos</label>
                <input type="text" id="lastName" name="lastName" value={newUserData.lastName} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="dni" className="block text-sm font-medium text-gray-700">DNI</label>
                <input type="text" id="dni" name="dni" value={newUserData.lastName} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Apellidos</label>
                <input type="text" id="email" name="email" value={newUserData.lastName} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="mb-4">
                <label htmlFor="cellphone" className="block text-sm font-medium text-gray-700">Apellidos</label>
                <input type="text" id="cellphone" name="cellphone" value={newUserData.lastName} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" required />
              </div>
              <div className="flex justify-end">
                <button type="button" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mr-2 rounded-md" onClick={closeModal}>Cancelar</button>
                <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md">{creatingUser ? 'Crear' : 'Actualizar'}</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {confirmDelete && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-bold mb-4">Eliminar Usuario</h2>
            <p>¿Está seguro de querer eliminar al usuario <strong>{deletingUser.name}</strong>?</p>
            <div className="flex justify-end">
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
