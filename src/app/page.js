import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/app/mapComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <MapComponent />
    </div>
  );
}
