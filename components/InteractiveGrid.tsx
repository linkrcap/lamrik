"use client";

import { useEffect, useRef, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function InteractiveGrid() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="interactive-grid"
      style={{ opacity: isVisible ? 1 : 0, transition: "opacity 1s ease" }}
    >
      {/* Grid Pattern */}
      <div className="grid-pattern" />
      
      {/* Cursor Glow */}
      <div
        className="grid-glow"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
      />
      
      {/* Gradient Orbs */}
      <div 
        className="gradient-orb gradient-orb-gold"
        style={{
          width: "800px",
          height: "800px",
          right: "-200px",
          top: "-200px",
        }}
      />
      <div 
        className="gradient-orb gradient-orb-blue"
        style={{
          width: "600px",
          height: "600px",
          left: "-150px",
          bottom: "-150px",
          animationDelay: "-10s",
        }}
      />
      <div 
        className="gradient-orb gradient-orb-gold"
        style={{
          width: "400px",
          height: "400px",
          right: "20%",
          bottom: "20%",
          opacity: 0.08,
          animationDelay: "-5s",
        }}
      />
    </div>
  );
}

