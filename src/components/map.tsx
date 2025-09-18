"use client"
import { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'

import 'mapbox-gl/dist/mapbox-gl.css';


function Map() {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const mapRef = useRef<mapboxgl.Map | null>(null);

    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

    useEffect(() => {
        mapboxgl.accessToken = token;
        if (mapContainerRef.current) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
            });
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
            }
        };
    }, []);

    return (
        <>
            <div id='map-container' ref={mapContainerRef} style={{ width: '100%', height: '100%' }} />
        </>
    );
}

export default Map