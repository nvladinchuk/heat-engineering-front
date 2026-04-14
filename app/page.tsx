'use client';
import Hero from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../store/useCart';
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const PRODUCTS = [
  { id: '1', name: 'Smart Thermostat S-Series Wi-Fi', price: 2850, image: '/logo.jpg' },
  { id: '2', name: 'Precision Temperature Sensor Z1', price: 920, image: '/logo.jpg' },
  { id: '3', name: 'OLED Touch Control Panel', price: 4100, image: '/logo.jpg' },
  { id: '4', name: 'Water Leakage Protection Kit', price: 1250, image: '/logo.jpg' },
  { id: '5', name: 'Smart Relay Hub v2', price: 1800, image: '/logo.jpg' },
  { id: '6', name: 'Actuator 230V Pro Edition', price: 680, image: '/logo.jpg' },
];

export default function Home() {
  const items = useCart((state) => state.items);

  // Спільний стиль для великих літер
  const shimmerStyle = {
    background: 'linear-gradient(to right, #ffffff 0%, #f97316 25%, #2563eb 50%, #f97316 75%, #ffffff 100%)',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };

  return (
    <main className="bg-black min-h-screen text-white">
      {/* Кнопка кошика — скляний OLED ефект */}
      <Link href="/checkout" className="fixed top-8 right-8 z-50 bg-white/10 backdrop-blur-xl text-white h-16 px-8 rounded-full border border-white/10 flex items-center gap-4 hover:bg-blue-600 transition-all active:scale-95">
        <ShoppingBag size={20} />
        <span className="font-bold border-l border-white/20 pl-4">{items.length}</span>
      </Link>

      <Hero />

      {/* Секція товарів */}
      <section className="container mx-auto px-6 py-32">
        <div className="mb-24">
          {/* ВЕЛИКІ БУКВИ З ГРАДІЄНТОМ */}
          <motion.h2 
            animate={{ backgroundPosition: ['0% center', '200% center'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={shimmerStyle}
            className="text-5xl md:text-[100px] font-black tracking-tighter leading-none mb-8 italic uppercase"
          >
            DISCOVER NEW
          </motion.h2>
          
          <p className="text-slate-500 text-lg md:text-xl font-light max-w-2xl leading-relaxed mt-4">
            Відчуйте новий рівень контролю клімату з технологіями майбутнього.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </section>
      
      {/* Футер */}
      <footer className="border-t border-white/5 py-20 text-center">
        <p className="text-slate-700 text-[10px] tracking-[1em] uppercase font-bold">
          © 2026 HEAT ENGINEERING
        </p>
      </footer>
    </main>
  );
}