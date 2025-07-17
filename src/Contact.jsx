import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import emailjs from '@emailjs/browser';
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const contactRef = useRef();
  const formRef = useRef();
  const [messageSent,setMessageSent] = useState(false)
  useEffect(() => {
    const element = contactRef.current;
    
    if (!element) return;
    
    gsap.fromTo(element, 
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        ease: 'power3.out',
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const sendEmail = (e)=>
    {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result)=>
        {
            console.log(result.text)
                // alert('Message sent successfully')
                setMessageSent(true)
                setTimeout(() => {
                    setMessageSent(false)
                }, 5000);
               
                formRef.current.reset();
        },
    (error)=>{
        alert('Error occured please try again')
    })
        
    }


  return (
    <div className="flex flex-col items-center mt-32 px-4" id='Contact'>
      <h1 className="text-6xl font-bold mb-4 text-white opacity-100" ref={contactRef}>
        Contact us
      </h1>
      <div className="w-64 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mb-8"></div>
      
      <form className='flex flex-col bg-black/20 backdrop-blur-sm border-2 border-white/30 rounded-3xl w-full max-w-2xl p-8 gap-6' ref={formRef} onSubmit={sendEmail}>
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="name" className='text-white font-semibold text-lg'>Your Name</label>
          <input 
            type="text" 
            id="name"
            name='user_name'
            placeholder='Enter Your Name' 
            className='border-2 border-white/30 bg-black/20 backdrop-blur-sm rounded-2xl h-14 px-4 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300' 
          />
        </div>
        
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="email" className='text-white font-semibold text-lg'>Your Email</label>
          <input 
            type="email" 
            id="email"
            name='user_email'
            placeholder='Enter Your Email' 
            className='border-2 border-white/30 bg-black/20 backdrop-blur-sm rounded-2xl h-14 px-4 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300'
          />
        </div>
        
        <div className='flex flex-col gap-3 w-full'>
          <label htmlFor="message" className='text-white font-semibold text-lg'>Your Message</label>
          <textarea 
            name="message" 
            id="message" 
            placeholder='Send us a message' 
            rows="6"
            className='border-2 border-white/30 bg-black/20 backdrop-blur-sm rounded-2xl p-4 text-white placeholder-white/50 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 transition-all duration-300 resize-none'
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className='bg-gradient-to-r from-purple-400 to-pink-500 text-white font-bold py-4 px-8 rounded-2xl hover:from-purple-500 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'
        >
          Send Message
        </button>
      </form>
      {
          
          <div className={`opacity-0 duration-300 ease-in-out ${messageSent?('opacity-100 text-green-500 duration-300 ease-in-out'):('')}`}>Message Sent Successfully !!!</div>
      }
    </div>
  );
}

export default Contact;