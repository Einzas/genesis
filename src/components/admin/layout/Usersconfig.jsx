import React from 'react';

const UsersConfig = () => {
  const users = [
    { id: 852, name: 'Katherine Montiel', email: 'k.montiel@importfactoryusa.com', session: true, role: 'Vendedor', commission: 'USD 2115.32$' },
    { id: 26635, name: 'Evelyn Cherrez', email: 'e.cherrez@gmail.com', session: true, role: 'Alumno Vendedor', commission: 'USD 0$' },
    { id: 27033, name: 'Adrian Velez', email: 'a.velez@imporsuit.com', session: true, role: 'Alumno Vendedor', commission: 'USD 0$' },
    // ...otros usuarios
  ];

  return (
    <div className="users-config">
      <button className="create-user-btn">Crear vendedor</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Sesión</th>
            <th>Rol</th>
            <th>Enlace</th>
            <th>Comisiones</th>
            <th>Opción</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.session ? 'Conectado' : 'Desconectado'}</td>
              <td>{user.role}</td>
              <td>Pendiente</td>
              <td>{user.commission}</td>
              <td>...</td> {/* Aquí podrías poner botones o iconos para las acciones */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersConfig;
