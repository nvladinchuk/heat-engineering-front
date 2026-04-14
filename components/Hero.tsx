'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-screen w-full flex items-center justify-center bg-[#000000] overflow-hidden">
      
      {/* М'яке фонове світіння (Deep OLED Blue) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/20 blur-[160px] rounded-full" />
      </div>

      <motion.div style={{ scale, opacity }} className="relative z-10 text-center px-4">
        
        {/* АНІМОВАНЕ ГРАДІЄНТНЕ ЛОГО */}
        <h1 className="text-[65px] md:text-[140px] font-black tracking-tighter leading-[0.8] select-none italic">
          <span className="hero-text block">
            HEAT
          </span>
          <span className="hero-text block">
            ENGINEERING
          </span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12"
        >
          <p className="text-blue-500 text-[10px] md:text-sm tracking-[1.2em] uppercase font-bold pl-[1.2em]">
            Premium Control Systems
          </p>
        </motion.div>
      </motion.div>

      {/* Індикатор скролу (біла тонка лінія) */}
      <div className="absolute bottom-10 flex flex-col items-center gap-4">
        <motion.div 
          animate={{ height: [40, 80, 40], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-white via-blue-500 to-transparent"
        />
      </div>

      <style jsx>{`
        .hero-text {
          background: linear-gradient(
            to right, 
            #ffffff 0%, 
            #f97316 25%, 
            #2563eb 50%, 
            #f97316 75%, 
            #ffffff 100%
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 6s linear infinite;
          display: block;
        }

        @keyframes shine {
          to {
            background-position: 200% center;
          }
        }
      `}</style>
    </section>
  );
}