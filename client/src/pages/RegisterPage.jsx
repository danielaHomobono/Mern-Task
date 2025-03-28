import { useForm } from 'react-hook-form';
import {registerRequest} from '../api/auth';

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-zinc-800 max-w-md p-10 rounded-md">
      <form
        onSubmit={handleSubmit(async(values) => {
          console.log(values);         
          const res = await registerRequest(values);
          console.log(res);
            
        })}
        
        className="space-y-4"
      >
        <input
          type="text"
          {...register('username', { required: true })}
          className="w-full bg-zinc-700 px-4 py-2 rounded-md text-white my-2"
          placeholder="Username"
        />
        <input
          type="email"
          {...register('email', { required: true })}
          className="w-full bg-zinc-700 px-4 py-2 rounded-md text-white my-2"
          placeholder="Email"
        />
        <input
          type="password"
          {...register('password', { required: true })}
          className="w-full bg-zinc-700 px-4 py-2 rounded-md text-white my-2"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full bg-orange-400 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
