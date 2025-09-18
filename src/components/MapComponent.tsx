'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Fix for default markers in React Leaflet
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Custom float marker icon
const FloatIcon = L.icon({
  iconUrl: 'https://incois.gov.in/OON/OON-Logos-images/Final/mooredbuoys.png',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10]
});

interface MapComponentProps {
  onFloatClick: (floatId: number) => void;
}

export default function MapComponent({ onFloatClick }: MapComponentProps) {
  useEffect(() => {
    // Set default icon for all markers
    L.Marker.prototype.options.icon = DefaultIcon;
  }, []);

  // Float positions (latitude, longitude)
  const floats = [
    { id: 1, position: [20.5937, 78.9629] as [number, number], name: "Float 1" },
    { id: 2, position: [19.0760, 72.8777] as [number, number], name: "Float 2" },
    { id: 3, position: [13.0827, 80.2707] as [number, number], name: "Float 3" },
    { id: 4, position: [22.5726, 88.3639] as [number, number], name: "Float 4" },
    { id: 5, position: [15.2993, 74.1240] as [number, number], name: "Float 5" },
    { id: 6, position: [11.2588, 75.7804] as [number, number], name: "Float 6" },
    { id: 7, position: [8.5241, 76.9366] as [number, number], name: "Float 7" },
    { id: 8, position: [17.6868, 83.2185] as [number, number], name: "Float 8" },
    { id: 9, position: [21.1702, 72.8311] as [number, number], name: "Float 9" },
    { id: 10, position: [12.9716, 77.5946] as [number, number], name: "Float 10" },
    { id: 11, position: [18.5204, 73.8567] as [number, number], name: "Float 11" },
    { id: 12, position: [16.7050, 74.2433] as [number, number], name: "Float 12" },
    { id: 13, position: [14.5203, 75.7223] as [number, number], name: "Float 13" },
    { id: 14, position: [10.8505, 76.2711] as [number, number], name: "Float 14" },
    { id: 15, position: [9.9312, 76.2673] as [number, number], name: "Float 15" },
  ];

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {floats.map((float) => (
        <Marker
          key={float.id}
          position={float.position}
          icon={FloatIcon}
          eventHandlers={{
            click: () => onFloatClick(float.id),
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-semibold text-gray-800">{float.name}</h3>
              <p className="text-sm text-gray-600">
                Lat: {float.position[0].toFixed(4)}<br />
                Lng: {float.position[1].toFixed(4)}
              </p>
              <button
                onClick={() => onFloatClick(float.id)}
                className="mt-2 px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
              >
                View Data
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}