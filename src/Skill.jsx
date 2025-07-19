import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Skill() {
    const skills = [
        {
            id: 1,
            skill: "HTML",
            image: 'Icons/html-5.png'
        },
        {
            id: 2,
            skill: 'CSS',
            image: 'Icons/css-3.png'
        },
        {
            id: 3,
            skill: 'Javascript',
            image: 'Icons/js.png'
        },
        {
            id: 4,
            skill: 'Tailwind CSS',
            image: 'Icons/tailwind.png',
            // image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC"
        },
        {
            id: 5,
            skill: 'ReactJs',
            image: 'Icons/react.png',
            // 'https://portfolio-beta-three-22.vercel.app/logos/react.png'
            // image:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        },
        {
            id: 6,
            skill: 'Redux Toolkit',
            image: 'Icons/redux.png',
            // image:'https://redux-toolkit.js.org/img/redux_white.svg'
        },
        {
            id: 7,
            skill: 'Context API',
            image: 'Icons/api.png'
        },
        {
            id: 8,
            skill: 'AppWrite',
            image: 'Icons/appwrite (1).png'
        },
        {
            id: 9,
            skill: 'GSAP',
            image: 'Icons/gsap.png'
        },
        {
            id: 10,
            skill: 'Bootstrap',
            image: 'Icons/bootstrap.png'
        },
        {
            id: 11,
            skill: 'C++',
            image: 'Icons/c-.png'
        },
        {
            id:12,
            skill:'Github',
            image:'Icons/github.png'
        }


    ]
    const skillRef = useRef();
 

    useEffect(() => {
        gsap.fromTo(skillRef.current, {
            opacity: 0,
            y: 80,
        }, {
            opacity: 1,
            y: 0,
            ease: "power3.out",
            duration: 1,
            scrollTrigger: {
                trigger: skillRef.current,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        })
    }, [])
    
    return (
        <div className='flex flex-col items-center mt-30' id='Skill'>
            <div className='flex flex-col items-center gap-4 mb-10'>
                <h1 className='text-6xl font-bold ' ref={skillRef}>Skills</h1>
                <div className='w-32 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mb-8'></div>
                <p className='font-bold text-2xl text-center'>Skills and tools i use to bring ideas to reality</p>
            </div>
            <div className='w-[80%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-12'>

                {
                    skills.map((skill, index) => (
                        <div className='relative group flex flex-col  items-center p-5 gap-4 hover:gap-2 hover:duration-300 rounded-2xl bg-gray-900 backdrop-opacity-20 hover:scale-105 transition-all duration-500' key={index}>
                            <div className='absolute gradient-box inset-0 opacity-50 md:opacity-0 md:group-hover:opacity-50  bg-gradient-to-r from-black via-white to-green-500 rounded-2xl'></div>
                            <img src={skill.image} alt="" className='h-12 group-hover:rotate-12 duration-300' />
                            <p className='text-center'>{skill.skill}</p>
                        </div>
                    )

                    )
                }

            </div>
        </div>
    )
}

export default Skill