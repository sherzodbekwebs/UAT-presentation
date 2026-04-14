import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, color } from 'framer-motion';
import { TruckModel, Category, truckData } from './truckData';
import { ArrowDown, Check, Info, X, ChevronRight, Truck as TruckIcon, ExternalLink } from 'lucide-react';

const specLabels: Record<string, string> = {
  wheelFormula: "Колесная формула",
  curbWeight: "Снаряженная масса",
  loadCapacity: "Грузоподъемность",
  enginePower: "Мощность двигателя",
  transmission: "Трансмиссия",
  engineResource: "Ресурс двигателя",
  fuelConsumption: "Расход топлива",
  features: "Особенности",
  tankVolume: "Объем бака",
  serviceInterval: "Сервисный интервал",
  warranty: "Гарантия",
  price: "Цена",
  year: "Год",
  source: "Источник"
};

const Hero = ({ categories }: { categories: Category[] }) => {
  const scrollToCategory = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-10 md:py-20 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 md:mb-16"
      >
        <h1 className="text-3xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-6 text-slate-900 uppercase leading-tight">
          UAT: СИЛА И <br className="md:hidden" /> НАДЕЖНОСТЬ
        </h1>
        <p className="text-slate-500 text-sm md:text-xl max-w-2xl mx-auto px-4">
          Сравните лучшие технические характеристики и надежность с конкурентами.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1400px] w-full px-4">
        {categories.map((cat, idx) => {
          const kamaz = cat.models.find(t => t.isOurProduct)!;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white border border-slate-200 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300"
            >
              <div className="aspect-[4/3] mb-4 md:mb-6 overflow-hidden rounded-xl bg-slate-50">
                <img 
                  src={kamaz.image} 
                  alt={kamaz.name}
                  className="w-full h-full object-contain p-2 md:p-4 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="mb-4 md:mb-6">
                <span className="text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1 block">
                  {cat.id} 
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">{kamaz.name}</h3>
                <p className="text-blue-600 text-base md:text-lg font-bold">{kamaz.specs.price}</p>
              </div>
              <button 
                onClick={() => scrollToCategory(cat.id)}
                className="w-full flex items-center justify-center gap-2 py-2.5 md:py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-blue-600 transition-colors group/btn"
              >
                Сравнение
                <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

function OrbitSection({ category }: { category: Category }) {
  const [selectedTruck, setSelectedTruck] = useState<TruckModel | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [radius, setRadius] = useState(320);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const kamaz = category.models.find(t => t.isOurProduct)!;
  const competitors = category.models.filter(t => !t.isOurProduct);

  useEffect(() => {
    const updateRadius = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        if (width < 640) setRadius(width / 2.8);
        else if (width < 1024) setRadius(width / 2.5);
        else setRadius(320);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  return (
    <section id={category.id} className="py-12 md:py-24 px-4 border-t border-slate-100 bg-white">
      <div className="max-w-[1550px] mx-auto" ref={containerRef}>
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-2 md:mb-4 uppercase tracking-tighter">{category.title}</h2>
          <p className="text-slate-500 text-sm md:text-base mb-6 px-4">{category.description}</p>
          <div className="h-1 w-12 md:w-20 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="relative h-[400px] sm:h-[600px] md:h-[800px] flex items-center justify-center overflow-visible">
          <div className="absolute border border-slate-100 rounded-full" style={{ width: radius * 2, height: radius * 2 }} />
          <motion.div className="relative z-10 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} animate={{ scale: isHovered ? 1.02 : 1 }} >
            <div className="absolute inset-0 bg-blue-100/50 blur-[40px] md:blur-[80px] rounded-full" />
            <div className="relative bg-white p-4 md:p-10 rounded-[24px] md:rounded-[40px] border border-slate-200 shadow-2xl">
              <img src={kamaz.image} alt={kamaz.name} className="w-32 sm:w-56 md:w-96 h-auto object-contain" />
              <div className="mt-2 md:mt-4 text-center">
                <span className="px-2 md:px-4 py-1 bg-blue-600 text-[8px] md:text-[11px] font-bold uppercase rounded-full text-white mb-1 inline-block">НАШ ПРОДУКТ</span>
                <h4 className="text-xs md:text-3xl font-bold text-slate-900 uppercase">{kamaz.name}</h4>
              </div>
            </div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <motion.div className="relative w-full h-full pointer-events-auto" animate={{ rotate: isHovered ? 0 : 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} >
              {competitors.map((truck, idx) => {
                const angle = (idx / competitors.length) * (2 * Math.PI);
                return (
                  <motion.div key={truck.name} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer group" style={{ x: Math.cos(angle) * radius, y: Math.sin(angle) * radius }} onClick={() => setSelectedTruck(truck)} >
                    <motion.div animate={{ rotate: isHovered ? 0 : -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} >
                      <div className="bg-white p-2 md:p-4 rounded-xl md:rounded-2xl border border-slate-200 shadow-xl group-hover:border-blue-500 transition-all group-hover:scale-110">
                        <img src={truck.image} alt={truck.name} className="w-12 sm:w-24 md:w-36 h-auto object-contain" />
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          <AnimatePresence>
            {selectedTruck && (
              <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="absolute z-50 bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 w-[90%] max-w-lg bg-white border border-slate-200 p-4 md:p-8 rounded-2xl md:rounded-[32px] shadow-3xl" >
                <button onClick={() => setSelectedTruck(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><X size={20} /></button>
                <div className="flex gap-4 md:gap-6 items-center">
                  <img src={selectedTruck.image} alt={selectedTruck.name} className="w-20 md:w-32 h-auto rounded-xl bg-slate-50 p-2" />
                  <div>
                    <h5 className="text-base md:text-2xl font-bold text-slate-900 leading-tight">{selectedTruck.name}</h5>
                    <p className="text-blue-600 font-bold text-sm md:text-xl">{selectedTruck.specs.price}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- TABLE SECTION --- */}
        <div className="mt-10 md:mt-20 w-full overflow-x-auto rounded-xl md:rounded-[32px] border border-slate-100 shadow-md no-scrollbar">
          <style>{`
            .no-scrollbar::-webkit-scrollbar { display: none; }
            .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>
          
          <table className="w-full min-w-[800px] md:min-w-full border-collapse bg-white">
            <thead>
              <tr className="bg-slate-50">
                <th className="sticky left-0 z-10 bg-slate-50 p-2 md:p-4 text-left text-slate-400 text-[9px] md:text-[11px] font-black uppercase tracking-tighter border-b border-slate-100 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  Характеристики
                </th>
                {category.models.map(truck => (
                  <th key={truck.name} className={`p-2 md:p-4 border-b border-slate-100 ${truck.isOurProduct ? 'bg-blue-50/50' : ''}`}>
                    <div className="text-center">
                      <span className={`block text-[9px] md:text-[11px] font-black uppercase leading-tight break-words ${truck.isOurProduct ? 'text-blue-600' : 'text-slate-900'}`}>
                        {truck.name}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.keys(specLabels).map((key) => (
                <tr key={key} className="hover:bg-slate-50/50 transition-colors">
                  <td className="sticky left-0 z-10 bg-white p-2 md:p-4 px-3 md:px-6 text-slate-500 text-[9px] md:text-[11px] font-semibold border-b border-slate-50 border-r shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    {specLabels[key]}
                  </td>
                  {category.models.map(truck => (
                    <td 
                      key={truck.name + key} 
                      className={`p-2 md:p-4 text-center text-[9px] md:text-[11px] border-b border-slate-50 leading-tight break-words ${truck.isOurProduct ? 'bg-blue-50/30 font-bold text-slate-900' : 'text-slate-600'}`}
                    >
                      {key === 'source' ? (
                        truck.specs[key as keyof typeof truck.specs]?.startsWith('http') ? (
                          <a href={truck.specs[key as keyof typeof truck.specs]} target="_blank" rel="noreferrer" className="text-blue-500 underline font-bold">Link</a>
                        ) : truck.specs[key as keyof typeof truck.specs]
                      ) : (
                        truck.specs[key as keyof typeof truck.specs] || "—"
                      )}
                      
                      {truck.isOurProduct && (key === 'warranty' || key === 'price' || key === 'enginePower') && (
                        <div className="text-[7px] md:text-[9px] text-green-600 font-black uppercase mt-0.5">✔ ВЫГОДНО</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-2 text-center text-[10px] text-slate-400 md:hidden">
          ← Surib ko'ring →
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased overflow-x-hidden">
      {/* Navbar Responsive Fix */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-4">
        <div className="max-w-[1500px] mx-auto h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="./public/light.png" alt="Kamaz.spec Logo" width={90} height={"auto"} className="w-[70px] md:w-[90px]" />
          </div>
          
          {/* hidden lg:flex klassini o'zgartirib barcha ekranlarda ko'rinadigan qildik */}
          <div className="flex items-center gap-3 md:gap-10">
            {truckData.map(cat => (
              <button 
                style={{color: "#3b5aaf"}} 
                key={cat.id} 
                onClick={() => document.getElementById(cat.id)?.scrollIntoView({ behavior: 'smooth' })}  
                className="text-[12px] md:text-[15px] font-bold cursor-pointer whitespace-nowrap" 
              >
                {cat.id}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero categories={truckData} />
        {truckData.map(category => (
          <OrbitSection key={category.id} category={category} />
        ))}
      </main>

      <footer className="py-16 border-t border-slate-100 text-center bg-slate-50">
        <p className="text-[10px] md:text-[11px] font-black uppercase text-slate-400 tracking-[0.3em]">© 2026 KAMAZ PRESENTATION | UZBEKISTAN</p>
      </footer>
    </div>
  );
}