import React from 'react';

const Users = () => {
    return (
        <div className="bg-gray-100 p-8">
          {/* Div azul con esquinas superiores redondeadas */}
          <div className="bg-blue-600 text-white text-xl font-bold p-4 rounded-t-lg">
            Inicio / User
          </div>
          {/* Div blanco sin margen en la parte superior para unirse visualmente con el div azul */}
          <div className="bg-white shadow-md rounded-b-lg p-6">
            <nav className="flex border-b">
              <a className="text-blue-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" href="#information">
                Información
              </a>
              <a className="text-blue-600 py-4 px-6 block hover:text-blue-500 focus:outline-none" href="#cursos">
                Cursos
              </a>
          {/* More tabs... */}
        </nav>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="md:col-span-2 space-y-4">
              {/* First Name */}
              <div className="flex items-center">
                <label className="w-32 text-gray-700 text-sm font-bold" htmlFor="firstName">
                  Nombre
                </label>
                <input
                  className="flex-1 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="firstName"
                  type="text"
                  placeholder="Erick"
                />
              </div>
              {/* Last Name */}
              <div className="flex items-center">
                <label className="w-32 text-gray-700 text-sm font-bold" htmlFor="lastName">
                  Apellido(s)
                </label>
                <input
                  className="flex-1 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Garces"
                />
              </div>
              {/* Email Address */}
              <div className="flex items-center">
                <label className="w-32 text-gray-700 text-sm font-bold" htmlFor="email">
                  Dirección de correo electrónico
                </label>
                <input
                  className="flex-1 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="garceserick32@gmail.com"
                />
              </div>
              {/* Divider */}
              <hr className="my-4" />
              {/* Username */}
              <div className="flex items-center">
                <label className="w-32 text-gray-700 text-sm font-bold" htmlFor="username">
                  Nombre de usuario
                </label>
                <input
                  className="flex-1 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="ErickGarces"
                />
              </div>
              {/* Password */}
              <div className="flex items-center">
                <label className="w-32 text-gray-700 text-sm font-bold" htmlFor="password">
                  Contraseña
                </label>
                <input
                  className="flex-1 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="********"
                />
              </div>
              <hr className="my-4" />
              <div className="flex items-center">
                                <label htmlFor="biography" className="w-32 text-gray-700 text-sm font-bold mr-2">Biografía</label>
                                <textarea
                                    id="biography"
                                    className="flex-1 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Cuéntanos más sobre ti..."
                                    rows="3"
                                ></textarea>
                            </div>
                            {/* Zona horaria ajustada para alinear */}
                            <div className="flex items-center">
                                <label htmlFor="timezone" className="w-32 text-gray-700 text-sm font-bold mr-2">Zona Horaria</label>
                                <select
                                    id="timezone"
                                    className="flex-1 shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option>GMT-5</option>
                                    <option>GMT-6</option>
                                    <option>GMT+1</option>
                                    {/* Más zonas horarias según sea necesario */}
                                </select>
                            </div>
                            <hr className="my-4" />
                            {/* Botón de guardar en el centro */}
                            <div className="flex justify-center">
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <img
                                className="h-24 w-24 bg-gray-200 rounded-full"
                                src="path-to-your-default-profile-picture.png"
                                alt="Profile"
                            />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4">
                                Cargar foto del perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;