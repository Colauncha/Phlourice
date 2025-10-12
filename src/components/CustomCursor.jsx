import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleHover = (e) => {
      if (e.target.closest('a, button, [data-cursor-hover]')) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleHover);
    };
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleVisibilityChange = () => {
      setHidden(document.visibilityState === 'hidden');
    };

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      style={{ top: 0, left: 0, willChange: 'transform' }}
      animate={{
        x: position.x - 8,
        y: position.y - 8,
        opacity: hidden ? 0 : 1,
        scale: clicked ? 0.8 : hovered ? 1.5 : 1,
      }}
      transition={{ type: 'spring', mass: 0.1 }}
    >
  
      <div className="w-4 h-4 rounded-full bg-green-600 shadow-[0_0_20px_8px_rgba(34,197,94,0.6)] transition-colors duration-200" />

    </motion.div>
  );
};

export default CustomCursor;



