import React, { useContext, useEffect } from 'react'
import { SiHtml5, SiCss3, SiBootstrap, SiJavascript, SiReact } from "react-icons/si";
import { Data } from '../Store';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {

    let {mode}=useContext(Data)

    useEffect(() => {
        AOS.init();
      }, [])

    let skills = [
        {
            id:1,
            icon: <SiHtml5 />,
            name: 'HTML',
            content: "Lorem ipsum dolor sit amet.",
            column: "col-sm-6 col-md-3",
            colour:"primary"
        },
        {
            id:2,
            icon: <SiCss3 />,
            name: 'CSS',
            content: "Lorem ipsum dolor sit amet.",
            column: "col-sm-6 col-md-3",
            colour:"danger"
        },
        {
            id:3,
            icon: <SiBootstrap />, 
            name: 'Bootstrap',
            content: "Lorem ipsum dolor sit amet.",
            column: "col-sm-12 col-md-3",
            colour:"info"
        },
        {
            id:4,
            icon: <SiJavascript />,
            name: 'Javascript',
            content: "Lorem ipsum dolor sit amet.",
            column: "col-sm-6 col-md-5",
            colour:"warning"
        },
        {
            id:5,
            icon: <SiReact />,
            name: 'Reactjs',
            content: "Lorem ipsum dolor sit amet.",
            column: "col-sm-6 col-md-5",
            colour:"primary"
        },
    ]

    return (
        <>
            <div id="Skills">
                <div className={`container-fluid bg-${mode?"dark":"light"} text-${mode?'light':'dark'} pt-5 pt-lg-0`}>
                    <div className="row skills align-items-center justify-content-evenly">
                        {
                            skills.map((e) => {
                                return (
                                    <div key={e.id} data-aos="zoom-in-down" className={`${e.column} shadow py-3 text-center rounded `}>
                                        <div className={`text-${e.colour}`} style={{ fontSize: '75px'}}>{e.icon}</div>
                                        <h4>{e.name}</h4>
                                        <p>{e.content}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
}

export default Skills