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