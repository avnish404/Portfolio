import { React, useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
    const projects = [
        {
            id: 1,
            img: 'public/GIFS/Quiz.gif',
            title: 'Quiz App',
            description: "An application made for those who wants test their general knowledge, user wins or loses the game based on how well he/she performed and if they want then they can play again",
            tech: [
                { name: 'HTML', background: 'linear-gradient(to bottom, #e34c26, #ef652a)' },
                { name: 'CSS', background: 'linear-gradient(to bottom, #264de4, #2965f1)' },
                { name: 'JS', background: '#f7df1e' }
            ]
        },
        {
            id: 2,
            img: 'public/GIFS/newsApp.gif',
            title: 'NewsnCoffee',
            description: 'An application made for those who loves to know what is happening around specially when it comes to morning coffee',
            tech: [
                { name: 'HTML', background: 'linear-gradient(to bottom, #e34c26, #ef652a)' },
                { name: 'CSS', background: 'linear-gradient(to bottom, #264de4, #2965f1)' },
                { name: 'JS', background: '#f7df1e' },
                { name: 'Reactjs', background: '#61dafb' }
            ]
        },
        {
            id: 3,
            img: 'public/GIFS/Blog.gif',
            title: 'Blog App',
            description: "Users can Create/Update/Read/Delete the posts once they login to the application, this application lets user pen down what they want into it",
            tech: [
                { name: 'Reactjs', background: '#61dafb' },
                { name: 'Tailwind css', background: 'linear-gradient(to right, #38bdf8, #0ea5e9)' },
                { name: 'Appwrite', background: '#F02E65' }
            ]
        },
        {
            id: 4,
            img: 'public/GIFS/WhatsApp Video 2025-07-17 at 00.45.29_9c45cba5.gif',
            title: 'Currency Convertor',
            description: "Users can now get to know that how much their currency is doing well, by comparing their currency values with other currencies",
            tech: [
                { name: 'HTML', background: 'linear-gradient(to bottom, #e34c26, #ef652a)' },
                { name: 'CSS', background: 'linear-gradient(to bottom, #264de4, #2965f1)' },
                { name: 'JS', background: '#f7df1e' }
            ]
        },
        {
            id: 5,
            img: 'public/GIFS/Weather2.gif',
            title: 'Weather App',
            description: "Users can get to know about the weather conditions around the world, added animations to make users make feel great about it",
            tech: [
                { name: 'Reactjs', background: '#61dafb' },
                { name: 'Tailwind css', background: 'linear-gradient(to right, #38bdf8, #0ea5e9)' }
            ]
        },
        {
            id: 6,
            img: 'public/GIFS/Todo.gif',
            title: 'TODO List',
            description: "Users can add their TODOS in this application and can remove or disable their tasks once after the completion",
            tech: [
                { name: 'Reactjs', background: '#61dafb' },
                { name: 'Tailwind css', background: 'linear-gradient(to right, #38bdf8, #0ea5e9)' },
                { name: 'Redux toolkit', background: '#764ABC' }
            ]
        }
    ];

    const ProjectRef = useRef();
    const CardRef = useRef([]);
    

    useEffect(() => {
        gsap.fromTo(ProjectRef.current, {
            opacity: 0,
            y: 80
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ProjectRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            }
        });
    }, []);

    useEffect(() => {
        CardRef.current.forEach((elem, index) => {
            gsap.fromTo(elem, {
                opacity: 0,
                y: 50  
            }, {
                opacity: 1,
                y: 0,   
                duration: 1,
                stagger: 0.2, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: elem,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                }
            });

            const handleMouseEnter = () => {
                gsap.to(elem, {
                    y: -10,
                    scale: 1.02,
                    duration: 0.3,
                    ease: "power2.inOut",
                });
            }

            const handleMouseOut = () => {
                gsap.to(elem, {
                    y: 0,
                    scale: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                })
            }

            elem.addEventListener("mouseenter", handleMouseEnter);
            elem.addEventListener("mouseleave", handleMouseOut);

            return () => {
                elem.removeEventListener("mouseenter", handleMouseEnter);
                elem.removeEventListener("mouseleave", handleMouseOut)
            }

            // elem.addEventListener('mouseenter',()=>
            // {
            //     gsap.to(elem,{
            //         scale:1.05,
            //         duration:0.5,
            //         ease:"power2.out"
            //     })
            // })
            //  elem.addEventListener('mouseleave', () => {
            //     gsap.to(elem, {
            //         scale: 1,
            //         duration: 0.5,
            //         ease: "power2.out"
            //     });
            // });
        });
    }, []);

    return (
        <>
            <div className='flex flex-col mt-10 p-4 items-center mb-20' ref={ProjectRef} id='Project'>
                <div className='mb-3'>
                    <h1 className='text-6xl font-bold mb-4'>Projects</h1>
                                <div className='w-58 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mb-8'></div>

                </div>
            </div>

            <div className='flex flex-col items-center justify-center w-full'>
                <div className='flex flex-col w-full max-w-7xl gap-8 px-4'>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={el => CardRef.current[index] = el}
                            className='relative group flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto md:border-2 border-b-2 border-white rounded-2xl shadow-md shadow-white p-8 gap-6 min-h-[250px] cursor-pointer transition-all duration-500 ease-in-out hover:shadow-xl hover:shadow-white/50'
                        >
                            <div className='absolute gradient-box inset-0 opacity-0 group-hover:opacity-50  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl'></div>
                            <div className='flex-shrink-0 z-10'>
                                <img src={project.img} alt={project.title} className='w-60 h-60 object-cover rounded-xl' />
                            </div>
                            <div className='flex flex-col p-4 gap-6 text-center md:text-left justify-center flex-1 z-10'>
                                <h1 className='text-4xl font-bold '>{project.title}</h1>
                                <p className='font-bold '>{project.description}</p>
                                <div className='flex flex-wrap gap-2 justify-center md:justify-start'>
                                    {project.tech.map((elem, i) => (
                                        <div
                                            key={i}
                                            className='w-fit px-4 py-1 rounded-2xl text-center relative '
                                            style={{
                                                background: elem.background,
                                                opacity: 0.85,
                                                color: 'black'
                                            }}
                                        >
                                            <p>{elem.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Projects;