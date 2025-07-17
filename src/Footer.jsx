import React from 'react'

function Footer() {
  return (
    <>
    <footer className="text-center py-6 mt-20 text-white text-sm  flex flex-row justify-between m-5 border-t-2 border-white/30">
      {/* © {new Date().getFullYear()} Avnish Shukla. All rights reserved. */}
      <div>
        <p className='opacity-60'>© {new Date().getFullYear()} Avnish Shukla. All rights reserved.</p>
      </div>
      <div className='flex flex-row md:gap-6 sm:gap-4 gap-2'> 
        <a href="https://github.com/avnish404" target='_blank'>
        <img src="/Icons/github (1).png" alt="GitHub" className="sm:h-10 sm:w-10  h-6 w-6" />
        </a>
        <a href="https://x.com/avnish_shuk4915" target='_blank'>
        <img src="/Icons/twitter.png" alt="Twitter"  className='sm:h-10 sm:w-10  h-6 w-6 invert'/>
        </a>
        <a href="https://www.linkedin.com/in/avnish-shukla-2113771ba/" target='_blank'>
        <img src="/Icons/linkedin.png" alt="Linkedin" className='sm:h-10 sm:w-10  h-6 w-6 '/>
        </a>
      </div>
    </footer>
    </>
  )
}

export default Footer