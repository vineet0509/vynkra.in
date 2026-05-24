import React, { useEffect } from 'react';

export default function ParallaxOrbs() {
  useEffect(() => {
    const orbs = document.querySelectorAll('.glow-orb');
    
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      
      orbs.forEach((orb, index) => {
        const factor = (index + 1) * 15;
        const dx = (mouseX - window.innerWidth / 2) / factor;
        const dy = (mouseY - window.innerHeight / 2) / factor;
        orb.style.transform = `translate(${dx}px, ${dy}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="glow-orb orb-1" id="orb1"></div>
      <div className="glow-orb orb-2" id="orb2"></div>
      <div className="glow-orb orb-3" id="orb3"></div>
      <div className="glow-orb orb-4" id="orb4"></div>
    </>
  );
}
