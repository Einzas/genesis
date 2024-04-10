import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../store/slices/userInfo.slice";
import Swal from "sweetalert2";
import '../pages/css/Signup.css'

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
    <div className="flex flex-col justify-center items-center min-h-screen mt-1">
      <div className="background-form2"></div> 
      <div className="mb-5">
      <img src="/img/logoas1.png" alt="logo" className="mx-auto h-24 w-auto -mb-5" />
      </div>
      <div className="bg-white rounded-lg shadow-xl p-6 lg:p-10 m-8 max-w-md w-full border-solid border-2 border-blue-800">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Cree su cuenta</h2>
        <form onSubmit={handleSubmit(submit)}>
          { /* Updated fields with floating labels */ }
          <div className="mb-5 relative">
            <input
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-stone-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              id="firstName"
              placeholder=" "
              {...register("firstName", { required: true })}
            />
            <label htmlFor="firstName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Nombre</label>
          </div>
          <div className="mb-5 relative">
            <input
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-stone-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              id="lastName"
              placeholder=" "
              {...register("lastName", { required: true })}
            />
            <label htmlFor="lastName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Apellido</label>
          </div>
          <div className="mb-5 relative">
            <input
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-stone-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="email"
              id="email"
              placeholder=" "
              {...register("email", { required: true })}
            />
            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Correo Electrónico</label>
          </div>
          <div className="mb-5 relative">
            <input
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-stone-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="password"
              id="password"
              placeholder=" "
              {...register("password", { required: true })}
            />
            <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Contraseña</label>
          </div>
          <div className="mb-5 relative">
            <input
              className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-stone-100 border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              type="text"
              id="phone"
              placeholder=" "
              {...register("phone", { required: true, minLength: 10, maxLength: 10 })}
            />
            <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Celular</label>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-9/12 mt-4 bg-amber-500 text-white font-bold py-2 px-4 rounded-lg transition duration-300 focus:outline-none hover:bg-amber-600" type="submit">
              Continuar <span className="ml-2">➔</span>
            </button>
            <p className="w-full text-center text-gray-600 text-sm mt-6">
              ¿Tienes una cuenta? <a href="/login" className="text-blue-700 hover:text-amber-500 underline">Inicia sesión</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
