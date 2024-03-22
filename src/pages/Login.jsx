import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logOut, loginUser } from "../store/slices/userInfo.slice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.userInfo);
  const { token, user } = userInfo;

  const submit = (data) => {
    dispatch(loginUser(data));
    reset();
    showNotification("¡Inicio de sesión correcto!");
  };

  const handleClickLogOut = () => {
    dispatch(logOut());
    showNotification("Cierre de sesión correcto!");
  };

  const showNotification = (message) => {
    Swal.fire({
      icon: "success",
      title: "Correcto",
      text: message,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-opacity-80 px-4">
      <div className="bg-white/80 backdrop-blur-sm p-12 rounded-xl shadow-2xl w-full max-w-md mx-auto">
        {token && user ? (
          <div className="text-center">
            <p>Bienvenido, {user.firstName}</p>
            <button onClick={handleClickLogOut} className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
              Inicio de sesión
            </h2>
            <p className="text-lg font-bold text-gray-600 text-center mb-8">
              ¡Bienvenido! Inicia sesión para continuar.
            </p>
            <form onSubmit={handleSubmit(submit)} className="space-y-6">
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  className="mt-1 w-full px-5 py-2 bg-white border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-indigo-700 rounded-lg text-lg"
                  type="email"
                  id="email"
                  placeholder="Ingrese su correo"
                  {...register("email", { required: true })}
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-lg font-medium text-gray-700">
                  Contraseña
                </label>
                <input
                  className="mt-1 w-full px-5 py-2 bg-white border border-gray-300 placeholder-gray-400 focus:outline-none focus:border-indigo-700 rounded-lg text-lg"
                  type="password"
                  id="password"
                  placeholder="Ingrese su contraseña"
                  {...register("password", { required: true })}
                />
              </div>
              <button className="w-full px-5 py-2 text-lg text-white bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none flex justify-center items-center">
                Continuar <span className="ml-2">➔</span>
              </button>
            </form>
            <div className="text-center text-lg mt-6">
              <Link to="/forgot-password" className="text-gray-600 hover:text-gray-800 block mb-4">
                ¿Olvidaste la contraseña?
              </Link>
              <Link to="/signup" className="text-blue-600 hover:underline block">
                ¿No tienes una cuenta? Registrate
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
