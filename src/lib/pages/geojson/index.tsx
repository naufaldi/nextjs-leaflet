'use client';

import dynamic from 'next/dynamic';

const GeoJSON = () => {
  const NotSSRMaps = dynamic(() => import('@/lib/components/maps-geojson'), {
    ssr: false,
  });
  return (
    <div className="mx-auto flex min-h-[60vh] w-full max-w-screen-lg flex-col items-center justify-center gap-8 text-center">
      <NotSSRMaps />
    </div>
  );
};

export default GeoJSON;
