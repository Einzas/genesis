import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, loginUser } from '../store/slices/userInfo.slice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const FloatingLabelInput = ({ label, id, register, required, type = "text" }) => {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={type}
        placeholder=" "
        {...register(id, { required })}
        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-blue-500 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={id}
        className="px-2 absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
    </div>
  );
};

const PasswordInput = ({ label, id, register, required }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mb-4">
      <input
        id={id}
        type={showPassword ? "text" : "password"}
        placeholder=" "
        {...register(id, { required })}
        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-200 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-blue-500 dark:focus:border-amber-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label
        htmlFor={id}
        className="px-2 absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
      >
        {label}
      </label>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="text-gray-700 focus:outline-none"
        >
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </button>
      </div>
    </div>
  );
};

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.userInfo);
  const { token, user } = userInfo;

  const submit = (data) => {
    dispatch(loginUser(data));
    reset();
  };

  const handleClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen  bg-opacity-80 mb-20 mt-1 ">
      <div className="mb-6 mb-1 mb-1 ">
        <img src="/img/logoarbol.png" alt="logo" className="mx-auto h-40 w-auto " />
      </div>
      <div className="bg-gray-100 shadow-md rounded-lg mx-auto p-7 w-full max-w-md border-solid border-2 border-sky-500">
        {token && user ? (
          <div className="text-center">
            <p className="text-lg text-gray-800">Bienvenido, {user.firstName}</p>
            <button
              onClick={handleClickLogOut}
              className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Inicio de sesión</h2>
            <form onSubmit={handleSubmit(submit)} className="space-y-6 ">
              <FloatingLabelInput label="Correo electrónico" id="email" register={register} required type="email" />
              <PasswordInput label="Contraseña" id="password" register={register} required />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-9/12 mt-4 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg transition duration duration-300 focus:outline-none hover:bg-amber-600"
                  >
                    Continuar
                  </button>
                </div>
              </form>
              <div className="text-center mt-6">
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  ¿Olvidaste la contraseña?
                </Link>
                <p className="mt-4">
                  ¿No tienes una cuenta?{' '}
                  <Link
                    to="/signup"
                    className="text-sm text-blue-600 hover:underline transition duration-300"
                  >
                    Regístrate
                  </Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Login;
  
