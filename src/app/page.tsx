"use client"
import ChatInterface from '@/components/ChatInterface';
import map from "../../public/map.png"


import ArgoVisualizer from '@/components/argo';
import { useState } from 'react';

export default function Home() {

  const [openFloat, setOpenFloat] = useState<number | null>(null);
  const [closed, setClosed] = useState<{ [id: number]: boolean }>({});
  // Float positions for demo
  const floats = [
    { id: 1, style: "absolute top-[40%] left-[40%] w-5 h-auto hover:cursor-pointer" },
    { id: 2, style: "absolute top-[45%] left-[54%] w-5 h-auto hover:cursor-pointer" },
    { id: 3, style: "absolute top-[55%] left-[56%] w-5 h-auto hover:cursor-pointer" },
    { id: 4, style: "absolute top-[65%] left-[46%] w-5 h-auto hover:cursor-pointer" },
  ];
  return (
    <div className="h-screen bg-gray-900 text-white relative">
      {/* Main content area */}
      <div className="w-full h-full bg-gray-900">
        <img src={map.src} alt="Map" className="w-full h-full object-cover" />
        {floats.map(f => (
          <div key={f.id} className={f.style}>
            <img
              src="https://incois.gov.in/OON/OON-Logos-images/Final/mooredbuoys.png"
              className="w-5 h-auto hover:cursor-pointer"
              onClick={() => {
                setOpenFloat(f.id);
                setClosed(prev => ({ ...prev, [f.id]: false }));
              }}
              alt={`Float ${f.id}`}
            />
            {openFloat === f.id && !closed[f.id] && (
              <div className="relative z-50 mt-2">
                <ArgoVisualizer closed={closed[f.id]} onClose={() => setClosed(prev => ({ ...prev, [f.id]: true }))} />
              </div>
            )}
          </div>
        ))}
      </div>
      <ChatInterface />
    </div>
  );
}