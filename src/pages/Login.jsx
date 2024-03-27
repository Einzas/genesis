import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, loginUser } from '../store/slices/userInfo.slice';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../pages/css/login.css'

// Componente para entradas de formulario con etiqueta flotante
const FloatingLabelInput = ({ label, id, register, required, errors }) => {
  return (
    <div className="relative mb-4">
      <input
        id={id}
        name={id}
        type="text"
        placeholder=" "
        {...register(id, { required: required })}
        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-stone-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label htmlFor={id} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
        {label}
      </label>
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id].message || 'Campo requerido'}</p>}
    </div>
  );
};

// Componente para la entrada de la contraseña con la opción de mostrar/ocultar contraseña
const PasswordInput = ({ label, id, register, required, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative mb-4">
      <input
        id={id}
        name={id}
        type={showPassword ? "text" : "password"}
        placeholder=" "
        {...register(id, { required: required })}
        className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-stone-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      />
      <label htmlFor={id} className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">
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
      {errors[id] && <p className="text-red-500 text-xs mt-1">{errors[id].message || 'Campo requerido'}</p>}
    </div>
  );
};

// Componente principal de inicio de sesión
const Login = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.userInfo);
  const [loginError, setLoginError] = useState('');

  const submit = async (data) => {
    try {
      await dispatch(loginUser(data)).unwrap();
      reset();
    } catch (error) {
      setLoginError('Error al iniciar sesión. Por favor, verifica tus credenciales y vuelve a intentarlo.');
    }
  };

  const handleClickLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen -translate-y-10 mt-5">
    {/* Fondo inclinado para el formulario */}
    <div className="background-form"></div> 

    <div className="mb-5">
      <img src="/img/logoas1.png" alt="logo" className="mx-auto h-28 w-auto" />
    </div>
    <div className="form-container bg-white shadow-md rounded-3xl mx-auto p-7 w-full max-w-md border-solid border-2 border-sky-500">
      {userInfo.token && userInfo.user ? (
        <div className="text-center">
          <p className="text-lg text-gray-800">Bienvenido, {userInfo.user.firstName}</p>
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
          {loginError && <div className="mb-4 text-center text-red-500">{loginError}</div>}
          <form onSubmit={handleSubmit(submit)} className="space-y-6">
            <FloatingLabelInput label="Correo electrónico" id="email" register={register} required errors={errors} />
            <PasswordInput label="Contraseña" id="password" register={register} required errors={errors} />
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
              className="text-sm text-blue-600 hover:text-amber-500 transition duration-300"
            >
              ¿Olvidaste la contraseña?
            </Link>
            <p className="mt-4">
              ¿No tienes una cuenta?{' '}
              <Link
                to="/signup"
                className="text-sm text-blue-600 hover:text-amber-500 underline transition duration-300"
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