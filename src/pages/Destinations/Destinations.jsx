import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const defaultIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const destinations = [
  { id: 1, name: "Santorini", position: [36.3932, 25.4615], description: "Famous for its stunning sunsets and white-washed buildings" },
  { id: 2, name: "Kyoto", position: [35.0116, 135.7681], description: "Ancient temples and beautiful traditional gardens" },
  { id: 3, name: "Machu Picchu", position: [-13.1631, -72.5450], description: "The legendary lost city of the Incas" }
];

const Destinations = () => (
  <div className="min-h-screen py-12">
    <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">Explore Destinations</h1>
      <div className="h-[600px] mb-12 rounded-lg overflow-hidden shadow-lg">
        <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          {destinations.map(({ id, position, name, description }) => (
            <Marker key={id} position={position} icon={defaultIcon}>
              <Popup>
                <h3 className="font-semibold">{name}</h3>
                <p>{description}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map(({ id, name, description }) => (
          <div key={id} className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">{name}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Destinations;