import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/slices/userInfo.slice";
import Swal from "sweetalert2";

const SignUp = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (data) => {
    dispatch(registerUser(data));
    reset();
    Swal.fire({
      icon: "success",
      title: "Welcome Aboard!",
      text: "Your registration was successful, please log in.",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-opacity-80 px-4">
      <div className="bg-white rounded-lg shadow-xl p-6 lg:p-10 m-4 max-w-lg w-full">
        <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Cree su cuenta</h2>
        <form onSubmit={handleSubmit(submit)}>
          <div className="mb-5">
            <label htmlFor="firstName" className="block text-gray-800 text-xl font-bold mb-2">Nombre</label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="firstName"
              placeholder="Ingrese su nombre"
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="lastName" className="block text-gray-800 text-xl font-bold mb-2">Apellido</label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="lastName"
              placeholder="Ingrese su apellido"
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-800 text-xl font-bold mb-2">Correo Electrónico</label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              placeholder="Ingrese su correo electrónico"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block text-gray-800 text-xl font-bold mb-2">Contraseña</label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              placeholder="Crea una contraseña"
              {...register("password", { required: true })}
            />
          </div>
          <div className="mb-5">
            <label htmlFor="phone" className="block text-gray-800 text-xl font-bold mb-2">Celular</label>
            <input
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="phone"
              placeholder="Ingrese su número de celular"
              {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
            />
          </div>
          <button className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-3 px-6 w-full rounded focus:outline-none focus:shadow-outline transition-colors duration-300 text-xl" type="submit">
            Continuar <span className="ml-2">➔</span>
          </button>
          <p className="text-center text-gray-600 text-xl mt-6">
            ¿Tienes una cuenta? <a href="/login" className="text-blue-700 hover:text-purple-800">Inicia sesión</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
