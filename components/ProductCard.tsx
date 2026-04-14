'use client';
import Image from 'next/image';
import { useCart } from '../store/useCart';
import { motion } from 'framer-motion';

export const ProductCard = ({ id, name, price, image }: any) => {
  const addItem = useCart((state) => state.addItem);

  return (
    <div className="group relative bg-[#050505] rounded-[40px] p-1 transition-all duration-500 hover:scale-[1.03]">
      {/* Тонка рамка, що ледь світиться */}
      <div className="absolute inset-0 rounded-[40px] border border-white/5 group-hover:border-blue-500/30 transition-colors" />
      
      <div className="relative z-10 p-8 flex flex-col h-full">
        {/* Контейнер для фото гаджета */}
        <div className="relative h-64 w-full mb-8 overflow-hidden rounded-[30px] bg-[#0a0a0a] border border-white/5">
          <Image 
            src={image || '/logo.jpg'} 
            alt={name} 
            fill 
            className="object-contain p-12 grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" 
          />
        </div>
        
        <h3 className="text-xl font-bold text-white leading-tight mb-8 h-14 overflow-hidden group-hover:text-blue-400 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Price</span>
            <span className="text-2xl font-light text-white italic">{price} ₴</span>
          </div>
          
          <motion.button 
            whileTap={{ scale: 0.95 }}
            onClick={() => addItem({ id, name, price })}
            className="bg-white text-black h-14 px-10 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-blue-500/40"
          >
            Купити
          </motion.button>
        </div>
      </div>
    </div>
  );
};