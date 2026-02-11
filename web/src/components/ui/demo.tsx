"use client";

import React, { useEffect, useRef } from 'react';

const HalideLanding: React.FC = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const layersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mouse Parallax Logic
    const handleMouseMove = (e: MouseEvent) => {
      const x = (window.innerWidth / 2 - e.pageX) / 25;
      const y = (window.innerHeight / 2 - e.pageY) / 25;

      // Rotate the 3D Canvas
      canvas.style.transform = `rotateX(${55 + y / 2}deg) rotateZ(${-25 + x / 2}deg)`;

      // Apply depth shift to layers
      layersRef.current.forEach((layer, index) => {
        if (!layer) return;
        const depth = (index + 1) * 15;
        const moveX = x * (index + 1) * 0.2;
        const moveY = y * (index + 1) * 0.2;
        layer.style.transform = `translateZ(${depth}px) translate(${moveX}px, ${moveY}px)`;
      });
    };

    // Entrance Animation
    canvas.style.opacity = '0';
    canvas.style.transform = 'rotateX(90deg) rotateZ(0deg) scale(0.8)';
    
    const timeout = setTimeout(() => {
      canvas.style.transition = 'all 2.5s cubic-bezier(0.16, 1, 0.3, 1)';
      canvas.style.opacity = '1';
      canvas.style.transform = 'rotateX(55deg) rotateZ(-25deg) scale(1)';
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <style>{`
        :root {
          --bg: #0a0a0a;
          --silver: #e0e0e0;
          --accent: #ff3c00;
          --grain-opacity: 0.15;
        }

        .halide-body {
          background-color: var(--bg);
          color: var(--silver);
          font-family: sans-serif;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .halide-grain {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          pointer-events: none;
          z-index: 100;
          opacity: var(--grain-opacity);
        }

        .viewport {
          perspective: 2000px;
          width: 100vw; height: 100vh;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        .canvas-3d {
          position: relative;
          width: 800px; height: 500px;
          transform-style: preserve-3d;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .layer {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(224, 224, 224, 0.1);
          background-size: cover;
          background-position: center;
          transition: transform 0.5s ease;
        }

        .layer-1 { 
          background: linear-gradient(45deg, #0f0f0f 25%, #1a1a1a 25%, #1a1a1a 50%, #0f0f0f 50%, #0f0f0f 75%, #1a1a1a 75%, #1a1a1a 100%);
          background-size: 40px 40px;
          filter: contrast(1.2) brightness(0.5); 
        }
        .layer-2 { 
          background: radial-gradient(circle at 50% 50%, #222 0%, #000 100%);
          opacity: 0.6; 
          mix-blend-mode: screen; 
        }
        .layer-3 { 
          background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 60, 0, 0.1) 2px, rgba(255, 60, 0, 0.1) 4px);
          opacity: 0.4; 
          mix-blend-mode: overlay; 
        }

        .contours {
          position: absolute;
          width: 200%; height: 200%;
          top: -50%; left: -50%;
          background-image: repeating-radial-gradient(circle at 50% 50%, transparent 0, transparent 40px, rgba(255,255,255,0.05) 41px, transparent 42px);
          transform: translateZ(120px);
          pointer-events: none;
        }

        .interface-grid {
          position: fixed;
          inset: 0;
          padding: 4rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto 1fr auto;
          z-index: 10;
          pointer-events: none;
        }

        .hero-title {
          grid-column: 1 / -1;
          align-self: center;
          font-size: clamp(2rem, 8vw, 8rem);
          line-height: 0.85;
          letter-spacing: -0.04em;
          mix-blend-mode: difference;
          font-weight: 900;
          text-transform: uppercase;
        }

        .cta-button {
          pointer-events: auto;
          background: var(--silver);
          color: var(--bg);
          padding: 1rem 2rem;
          text-decoration: none;
          font-weight: 700;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%);
          transition: 0.3s;
        }

        .cta-button:hover { background: var(--accent); transform: translateY(-5px); }

        .scroll-hint {
          position: absolute;
          bottom: 2rem; left: 50%;
          width: 1px; height: 60px;
          background: linear-gradient(to bottom, var(--silver), transparent);
          animation: flow 2s infinite ease-in-out;
        }

        @keyframes flow {
          0%, 100% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}</style>

      <div className="halide-body">
        {/* SVG Filter for Grain */}
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
        </svg>

        <div className="halide-grain" style={{ filter: 'url(#grain)' }}></div>

        <div className="interface-grid">
          <div style={{ fontWeight: 700 }}>AGENT_CORE v1.0</div>
          <div style={{ textAlign: 'right', fontFamily: 'monospace', color: 'var(--accent)', fontSize: '0.7rem' }}>
            <div>STATUS: PROSPECTING...</div>
            <div>LEADS_FOUND: 142</div>
          </div>

          <h1 className="hero-title">AUTOMATED<br />REVENUE</h1>

          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>
              <p>[ SYSTEM ONLINE ]</p>
              <p>AI-DRIVEN BUSINESS GROWTH & AUTOMATION</p>
            </div>
            <a href="#" className="cta-button">LAUNCH AGENTS</a>
          </div>
        </div>

        <div className="viewport">
          <div className="canvas-3d" ref={canvasRef}>
            <div className="layer layer-1" ref={(el) => { if (el) layersRef.current[0] = el }}></div>
            <div className="layer layer-2" ref={(el) => { if (el) layersRef.current[1] = el }}></div>
            <div className="layer layer-3" ref={(el) => { if (el) layersRef.current[2] = el }}></div>
            <div className="contours"></div>
          </div>
        </div>

        <div className="scroll-hint"></div>
      </div>
    </>
  );
};

export default HalideLanding;
