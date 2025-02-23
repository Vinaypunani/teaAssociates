import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Signup = () => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        if(data.password === data.cpassword){
            console.log(data)
        }
        else{
            toast.error("Password not match")
        }
        
    }

  return (
    <div className='bg-[#F5F5F5] w-full h-screen flex items-center justify-center'>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full md:w-[480px] md:bg-white px-4 py-7 rounded-md flex flex-col gap-7'>
            <h2 className='text-2xl font-semibold'>Create Account</h2>
            <div className='flex flex-col gap-5'>
                <input
                className='border border-gray-300 px-4 py-1.5 rounded placeholder:text-black'
                placeholder='Username'
                required
                {...register("username")} />
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
                <input 
                className='border border-gray-300 px-4 py-1.5 rounded placeholder:text-black'
                placeholder='Confirm Password'
                required
                {...register("cpassword")} />

                <input className='bg-black text-white py-3 rounded text-lg font-semibold' type="submit" value={"Sign Up"} />

                <p className='text-right text-gray-600'>Already have an account <Link to={'/login'} className='text-gray-900 font-semibold'>Login here</Link></p>
            </div>
        </form>
    </div>
  )
}

export default Signup