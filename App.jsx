import React, { useState } from 'react';
import { LucideArrowLeft, LucidePlus } from 'lucide-react';

// UPDATE THESE NAMES TO MATCH YOUR FILES IN /public/images/
const MY_PROJECTS = {
  logos: ["/images/logo1.jpg", "/images/logo2.jpg"],
  banners: ["/images/banner1.jpg"],
  packaging: ["/images/package1.jpg"],
  posters: ["/images/poster1.jpg"],
  cartoons: ["/images/toon1.jpg"],
  social: ["/images/social1.jpg"],
  other: ["/images/extra1.jpg"]
};

const CATEGORIES = [
  { id: 'logos', title: 'Logos', description: 'Visual identities & branding systems.' },
  { id: 'banners', title: 'Banners', description: 'Digital advertising and website hero assets.' },
  { id: 'packaging', title: 'Packaging', description: 'Physical product design & box layouts.' },
  { id: 'posters', title: 'Posters', description: 'Large scale print and digital poster art.' },
  { id: 'cartoons', title: 'Cartoons', description: 'Character design & digital illustrations.' },
  { id: 'social', title: 'Social Media', description: 'Dynamic content for digital platforms.' },
  { id: 'other', title: 'Other', description: 'NFTs, 3D explorations, and experiments.' }
];

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-white selection:text-black">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-[100]" />

      <nav className="fixed top-0 left-0 w-full z-50 p-6 md:p-8 flex justify-between items-start mix-blend-difference pointer-events-none">
        <div className="pointer-events-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase leading-none">Arjun</h1>
          <p className="text-[10px] md:text-[11px] mt-2 tracking-[0.4em] uppercase opacity-70 font-medium whitespace-nowrap">Graphic Designer / Visionary</p>
        </div>
      </nav>

      {!selectedCategory ? (
        <div className="flex flex-col md:flex-row h-screen w-full pt-32 md:pt-0 overflow-hidden">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              onClick={() => setSelectedCategory(cat)}
              className="relative flex-1 group cursor-pointer border-b md:border-b-0 md:border-r border-white/5 last:border-r-0 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:flex-[2.5]"
            >
              <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                <img
                  src={MY_PROJECTS[cat.id]?.[0]}
                  alt={cat.title}
                  className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
                <span className="text-[10px] font-mono opacity-30">0{index + 1}</span>
                <div className="mb-4">
                  <h2 className="text-3xl md:text-4xl font-light tracking-tight group-hover:-translate-y-2 transition-transform duration-500">
                    {cat.title}
                  </h2>
                  <div className="h-px w-0 group-hover:w-full bg-white/40 transition-all duration-500 mt-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="pt-48 p-8 md:p-16 animate-in fade-in duration-700">
          <button
            onClick={() => setSelectedCategory(null)}
            className="group fixed top-8 left-8 md:top-12 md:left-16 z-[60] flex items-center gap-3 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity mix-blend-difference"
          >
            <LucideArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back
          </button>
          <header className="max-w-5xl mb-24">
            <h2 className="text-6xl md:text-[10rem] font-light tracking-tighter mb-8 leading-[0.85]">{selectedCategory.title}</h2>
            <p className="text-xl md:text-3xl text-neutral-500 font-light max-w-2xl leading-tight">
              {selectedCategory.description}
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 pb-20">
            {MY_PROJECTS[selectedCategory.id]?.map((img, idx) => (
              <div key={idx} className={`group relative overflow-hidden bg-neutral-900 ${idx % 3 === 0 ? 'md:col-span-8 aspect-[16/9]' : 'md:col-span-4 aspect-square'}`}>
                <img
                  src={img}
                  alt={`${selectedCategory.title} work ${idx}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;