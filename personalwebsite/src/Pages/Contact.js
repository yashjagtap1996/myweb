import axios from 'axios'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    let {register,handleSubmit,formState:{errors},reset}=useForm()

    let Submit=(data,e)=>{
        e.preventDefault()
        axios.post("https://myweb-3e302-default-rtdb.firebaseio.com/contact.json",data)
        reset()
    }

  return (
    <>
        <div id="Contact">
            <div className="container pt-5 pt-lg-0">
                <div className="row contact align-items-center ">
                    <div className="col-lg-6">
                        <h1>CONTACT US</h1>
                        <p>You are more than welcome to leave your contact info and we will be in touch shortly.</p>
                    </div>
                    <div className="col-lg-6">
                        <form data-aos="flip-up" action="" onSubmit={handleSubmit(Submit)} className='p-3 shadow'>
                            <label htmlFor="" className='form-label fw-bolder' style={{color:' #0057E9'}}>Enter Name</label>
                            <input {...register("Name",{required:"this field is required!"})} type="text" className='form-control' />
                            <p className='fw-bolder' style={{color:'#E11845'}}>{errors.Name?.message}</p>
                            <label htmlFor="" className='form-label fw-bolder' style={{color:' #0057E9'}}>Enter Email</label>
                            <input {...register("Email",{required:"this field is required!"})} type="email" className='form-control' />
                            <p className='fw-bolder' style={{color:'#E11845'}}>{errors.Email?.message}</p>
                            <label htmlFor="" className='form-label fw-bolder' style={{color:' #0057E9'}}>Enter Phone</label>
                            <input {...register("Phone",{required:"this field is required!",minLength:{value:10,message:"min 10 digits required!"},maxLength:{value:10,message:"max 10 digits required!"}})} type="number" className='form-control' />
                            <p className='fw-bolder' style={{color:'#E11845'}}>{errors.Phone?.message}</p>
                            <label htmlFor="" className='form-label fw-bolder' style={{color:' #0057E9'}}>Any Query</label>
                            <input {...register("Query",{required:"this field is required!"})} type="text" className='form-control' />
                            <p className='fw-bolder' style={{color:'#E11845'}}>{errors.Query?.message}</p>
                            <input className='btn btn-outline-success' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact