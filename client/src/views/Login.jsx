import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div className='bg-[#F5F5F5] w-full h-screen flex items-center justify-center'>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full md:w-[480px] md:bg-white px-4 py-7 rounded-md flex flex-col gap-7'>
            <h2 className='text-2xl font-semibold'>Log in</h2>
            <div className='flex flex-col gap-5'>
                <input 
                className='border border-gray-300 px-4 py-1.5 rounded placeholder:text-black'
                placeholder='Email'
                required
                {...register("email")} />
                <input 
                className='border border-gray-300 px-4 py-1.5 rounded placeholder:text-black'
                placeholder='Password'
                required
                {...register("password")} />

                <input className='bg-black text-white py-3 rounded text-lg font-semibold' type="submit" value={"Login"} />

                <p className='text-right text-gray-600'>Don't have an account <Link to={'/signup'} className='text-gray-900 font-semibold'>Sign up</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Login