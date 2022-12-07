import React, { useContext, useEffect } from 'react'
import { Data } from '../Store'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    let {mode}=useContext(Data)

    let info=[
        {
            id:1,
            title:"Name",
            data:"Yash Suresh Jagtap"
        },
        {
            id:2,
            title:"DOB",
            data:"25 Dec 1996"
        },
        {
            id:3,
            title:"Email",
            data:"yashjagtap918@gmail.com"
        },
        {
            id:4,
            title:"Phone",
            data:"+91-9359341742"
        },
    ]

  return (
    <>
        <div id="About">
            <div className={`container-fluid bg-${mode?'dark':'light'} text-${mode?'light':'dark'} pt-5 pt-lg-0`}>
                <div className="row justify-content-center about align-items-center">
                    <div className="col-lg-5">
                        <img data-aos="flip-left" src="Images/pexels-andrea-piacquadio-3760093.jpg" alt="" width="100%" />
                    </div>

                    <div className="col-lg-6">
                        <h1>Hello,I am Yash Jagtap</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia necessitatibus odio ipsa, ducimus dolores excepturi a rem commodi dignissimos architecto.</p>
                        <table className={`table text-${mode?'light':'dark'}`}>
                            {
                                info.map((e)=>{
                                    return (
                                        <tbody key={e.id}>
                                            <tr>
                                                <th>{e.title}</th>
                                                <td>{e.data }</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                        </table>
                        <button className='btn btn-outline-success'><a className={`text-${mode?'light':'dark'}`} href="Images/pexels-olia-danilevich-4974914.jpg" download>Download CV</a></button> 
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About