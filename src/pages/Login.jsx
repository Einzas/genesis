import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, loginUser } from "../store/slices/userInfo.slice";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const { token, user } = useSelector((store) => store.userInfo);

  const submit = (data) => {
    dispatch(loginUser(data));
    reset({ email: "", password: "" });
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
      timer: 1500,
    });
  };

  return (
    <main className="bg-gray-100 grid place-content-center px-2">
      {token ? (
        <section className="bg-white p-4 rounded-md text-center w-[300px] grid gap-6">
          <i className="bx bxs-user-circle text-6xl "></i>
          <h3 className="capitalize ">
            {user?.firstName} {user?.lastName}
          </h3>
          <button
            onClick={handleClickLogOut}
            className="bg-red-500 text-white py-2 w-full rounded-md block"
          >
            Logout
          </button>
        </section>
      ) : (
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white p-4 rounded-md max-w-[320px] grid gap-6"
        >
          <h2 className="text-2xl font-[500] text-gray-700">
            ¡Bienvenido! Ingrese su correo y contraseña para continuar
          </h2>
          <section className="bg-[#d8f5fd] p-4 rounded-md py-2">
            <h3 className="text-center font-bold">Datos para prueba</h3>
            <div className="flex gap-2 items-center">
              <i className="bx bx-envelope text-xl"></i>
              <span>john@gmail.com</span>
            </div>
            <div className="flex gap-2 items-center">
              <i className="bx bx-lock-alt text-xl"></i>
              <span>john1234</span>
            </div>
          </section>
          <div className="grid gap-1">
            <label htmlFor="email">Correo</label>
            <input
              className="border-[1px] border-gray-300 p-1 outline-none"
              type="email"
              id="email"
              placeholder="Ingrese su correo"
              {...register("email", { required: true })}
            />
          </div>
          <div className="grid gap-1">
            <label htmlFor="password">Contraseña</label>
            <input
              className="border-[1px] border-gray-300 p-1 outline-none"
              type="password"
              id="password"
              placeholder="Ingrese su contraseña"
              {...register("password", { required: true })}
            />
          </div>
          <button className="block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors">
            Iniciar sesión
          </button>
          <span className="text-sm">
            ¿No tienes una cuenta?{" "}
            <Link className="text-blue-400" to="/signup">
              Registrate
            </Link>
          </span>
        </form>
      )}
    </main>
  );
};

export default Login;
