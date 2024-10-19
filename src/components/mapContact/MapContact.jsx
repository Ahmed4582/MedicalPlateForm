
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

const position = [68.000, 13.500]; 

const MapContact = () => {
  return (
    <MapContainer center={position} zoom={10} style={{ height: '40vh', width: '100%' }} className='shadow-sm '>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Lofoten Islands
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapContact;
