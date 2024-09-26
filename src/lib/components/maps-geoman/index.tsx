import type { FeatureCollection, Point } from 'geojson';
import * as L from 'leaflet';
import type { LatLngExpression } from 'leaflet';
import { useEffect } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  GeoJSON,
  TileLayer,
  useMap,
} from 'react-leaflet';
import '@geoman-io/leaflet-geoman-free';

interface MyGeoJsonProperties {
  name: string;
  address: string;
  openingHours: string;
}

const AddGeomanControls = () => {
  const map = useMap();

  useEffect(() => {
    map.pm.addControls({
      position: 'topleft',
      drawMarker: true,
      drawPolygon: true,
      drawPolyline: true,
      drawCircle: true,
      drawCircleMarker: true,
      editMode: true,
      dragMode: true,
      cutPolygon: true,
      removalMode: true,
    });

    map.on('pm:create', () => {
      // console.log(e);
    });
  }, [map]);

  return null;
};

const WithGeoman = () => {
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

  // Extract coordinates for Leaflet
  const [latitude, longitude] = dataGeoJSON.features[0].geometry.coordinates;
  const leafletCoordinates: LatLngExpression = [latitude, longitude];
  const { name, address } = dataGeoJSON.features[0]
    .properties as MyGeoJsonProperties;

  return (
    <div className="w-full">
      <MapContainer
        className="h-[500px] w-full"
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
        <AddGeomanControls />
      </MapContainer>
    </div>
  );
};

export default WithGeoman;
