import React, { useState, useRef, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import gsap from 'gsap';

function Nava() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();
  const barsRef = useRef();
  const crossRef = useRef();

  // Animate dropdown menu when menuOpen changes
  useEffect(() => {
    if (menuOpen) {
      gsap.to(menuRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.8,
        ease: 'power2.inOut',
        display: 'block',
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut',
        onComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.display = 'none';
          }
        },
      });
    }
  }, [menuOpen]);

  // Rotate the active icon
  const rotateIcon = (iconRef) => {
    gsap.fromTo(
      iconRef.current,
      { rotate: 0 },
      { rotate: 180, duration: 0.6, ease: 'power2.out' }
    );
  };

  return (
    <div className="bg-black text-white px-4 py-3">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-5xl font-bold font-serif"><img src="Icons/bag.png" alt="" className='h-10 w-10 invert'/></h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <a className="cursor-pointer hover:text-gray-300" href='#Project'>Work</a>
          <a className="cursor-pointer hover:text-gray-300" href='#Skill'>Skill</a>
          <a className="cursor-pointer hover:text-gray-300" href='#Contact'>Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <XMarkIcon
              ref={crossRef}
              className="h-7 w-7 cursor-pointer"
              onClick={() => {
                setMenuOpen(false);
                rotateIcon(crossRef);
              }}
            />
          ) : (
            <Bars3Icon
              ref={barsRef}
              className="h-7 w-7 cursor-pointer"
              onClick={() => {
                setMenuOpen(true);
                rotateIcon(barsRef);
              }}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden"
        style={{ height: 0, opacity: 0, display: 'none' }}
      >
        <div className="flex flex-col gap-4 mt-4 items-center  border-b pt-2 border-white">
          <a className="cursor-pointer hover:text-gray-300" href='#Project'>Work</a>
          <a className="cursor-pointer hover:text-gray-300" href='#Skill'>Skill</a>
          <a className="cursor-pointer hover:text-gray-300" href='#Contact'>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Nava;
