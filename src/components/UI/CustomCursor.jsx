import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Instant position for dot
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  // Smooth position for follower
  const followerX = useSpring(cursorX, { stiffness: 100, damping: 20 });
  const followerY = useSpring(cursorY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Dot (strict to cursor) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          translateX: cursorX,
          translateY: cursorY,
        }}
      />

      {/* Follower (smooth motion) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998]"
        style={{
          translateX: followerX,
          translateY: followerY,
        }}
      />
    </>
  );
};

export default CustomCursor;
