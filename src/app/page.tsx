"use client"
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ChatInterface from '@/components/ChatInterface';
import ArgoVisualizer from '@/components/argo';

// Dynamically import MapComponent to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('@/components/MapComponent'), {
  ssr: false,
  loading: () => <div className="flex items-center justify-center h-full bg-gray-900 text-white">Loading map...</div>
});

export default function Home() {
  const [openFloat, setOpenFloat] = useState<number | null>(null);
  const [closed, setClosed] = useState<{ [id: number]: boolean }>({});

  const handleFloatClick = (floatId: number) => {
    setOpenFloat(floatId);
    setClosed(prev => ({ ...prev, [floatId]: false }));
  };

  return (
    <div className="h-screen bg-gray-900 text-white relative">
      {/* Main content area */}
      <div className="w-full h-full bg-gray-900">
        <MapComponent onFloatClick={handleFloatClick} />
      </div>
      
      {/* Floating Argo Visualizer */}
      {openFloat && !closed[openFloat] && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <ArgoVisualizer 
            closed={closed[openFloat]} 
            onClose={() => setClosed(prev => ({ ...prev, [openFloat]: true }))} 
          />
        </div>
      )}
      
      <ChatInterface />
    </div>
  );
}