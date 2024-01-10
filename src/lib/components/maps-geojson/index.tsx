import type { FeatureCollection, Point } from 'geojson';
import type { LatLngExpression } from 'leaflet';
import L from 'leaflet';
import { MapContainer, Marker, Popup, GeoJSON, TileLayer } from 'react-leaflet';

interface MyGeoJsonProperties {
  name: string;
  address: string;
  openingHours: string;
}

const MapsGeoJSON = () => {
  const icon = L.icon({ iconUrl: '/images/marker-icon.png' });
  const dataGeoJSON: FeatureCollection<Point> = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-8.8280039, 115.1558519],
        },
        properties: {
          name: 'My Coffee Shop',
          address:
            'Jl. Pura Batu Pageh No.99R, Ungasan, Kec. Kuta Sel., Kabupaten Badung, Bali 80361',
          openingHours: '7am - 9pm',
        },
      },
    ],
  };
  // Extract  coordinates for Leaflet
  const [latitude, longitude] = dataGeoJSON.features[0].geometry.coordinates;
  const leafletCoordinates: LatLngExpression = [latitude, longitude];
  const { name, address } = dataGeoJSON.features[0]
    .properties as MyGeoJsonProperties;
  return (
    <div className="w-full">
      <MapContainer
        className="h-[300px] w-full"
        zoom={13}
        scrollWheelZoom={false}
        center={leafletCoordinates}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={leafletCoordinates} icon={icon}>
          <Popup>
            {name} <br /> {address}
          </Popup>
        </Marker>
        <GeoJSON data={dataGeoJSON} />
      </MapContainer>
    </div>
  );
};

export default MapsGeoJSON;
