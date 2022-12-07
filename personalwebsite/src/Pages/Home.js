import React, { useContext } from 'react'
import { Data } from '../Store'
import './App.css'


const Home = () => {

  let { mode, setMode } = useContext(Data)



  return (
    <>
      <div id="Home">
        <div className={`container-fluid bg-${mode ? 'dark' : 'light'} pt-5 pt-lg-0`}>
          <div className="row home align-items-center justify-content-evenly">
            <div className={`col-lg-5 text-${mode?'light':'dark'} `}>
                <h1>hello!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus nam accusantium esse facilis rem voluptatibus quo ducimus ipsam. Dolorem.</p>
            </div>
            <div className="col-lg-5 ">
              <img src="Images/pexels-olia-danilevich-4974914.jpg" alt="" width="100%" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home