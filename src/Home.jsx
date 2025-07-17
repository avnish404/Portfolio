import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function Home() {
  const headRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { marginTop: '20px', opacity: 0 },
      {
        marginTop: '-20px',
        opacity: 1,
        ease: 'power2.inOut',
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div className='bg-black text-white w-full'>
      {/* Hero Section */}
      <div className='h-screen flex flex-col items-center justify-center px-4'>
        <div className='mt-4 md:mt-8 p-3 md:w-[800px]'>
          <h1
            className='headline text-4xl font-bold md:text-6xl mt-8 text-center p-5'
            ref={headRef}
          >
            Transforming <span className='highlight1'>Ideas</span> into Beautiful Web
            Products. From <span className='highlight2'>concept</span> to launch, I help
            you go live with <span className='highlight3'>confidence</span>.
          </h1>
        </div>

        <div className='mb-2 p-4'>
          <p className='text-center md:text-2xl p-4'>
            Hi, I'm Avnish — a web developer focused on helping you bring that product
            idea to life. With clear communication and a feedback-first approach, I make
            sure you're involved every step of the way. Let's build something great,
            together.
          </p>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <ul className='flex flex-row gap-4 p-2'>
             <a href="https://github.com/avnish404" target='_blank'>
              <img
                src='Icons/github.png'
                alt='icon1'
                className='h-10 w-10'
              />
            </a>
        <a href="https://www.linkedin.com/in/avnish-shukla-2113771ba/" target='_blank'>
              <img
                src='Icons/linkedin.png'
                alt='icon2'
                className='h-10 w-10'
              />
            </a>
        <a href="https://x.com/avnish_shuk4915" target='_blank'>
              <img
                src='Icons/twitter.png'
                alt='icon3'
                className='h-10 w-10'
              />
            </a>
          </ul>

          <a className='text-center flex items-center justify-center h-[70px] w-[150px] cursor-pointer bg-green-500 hover:bg-green-400 duration-300 rounded-2xl' href='#Project'>
            See My Work
          </a>
        </div>
      </div>

      {/* Projects Section - Will scroll into view */}
   
    </div>
  );
}

export default Home;
