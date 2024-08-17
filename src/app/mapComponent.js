"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import L from "leaflet";


const defaultIcon = L.icon({
  iconUrl: "/leaflet/marker-icon.png",
  iconSize: [20, 32], 
  iconAnchor: [10, 32], 
});

L.Marker.prototype.options.icon = defaultIcon;

const markers = [
  { position: [28.6139, 77.209], label: "New Delhi" },
  { position: [19.076, 72.8777], label: "Mumbai" },
  { position: [13.0827, 80.2707], label: "Chennai" },
  { position: [22.5726, 88.3639], label: "Kolkata" },
  { position: [12.9716, 77.5946], label: "Bangalore" },
];

function ChangeMapView({ center }) {
  const map = useMap();
  map.setView(center, map.getZoom());
  return null;
}

const MapComponent = () => {
  const [center, setCenter] = useState([20.5937, 78.9629]); 

  return (
    <div style={{ height: "100vh", width: "100vw" }}> 
      <MapContainer
        center={center}
        zoom={5}
        style={{ height: "100%", width: "100%" }} 
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, idx) => (
          <Marker
            key={idx}
            position={marker.position}
            eventHandlers={{
              click: () => {
                setCenter(marker.position);
              },
            }}
          />
        ))}
        <ChangeMapView center={center} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
