import { useEffect } from "react"; 
import { NextPage } from "next";
import BannerVideo from "@/components/BannerVideo";
import Testimonios from "@/components/Testimonios";
import PizarraConEnlaces from "@/components/PizarraConEnlaces";
import TextoImpactante from "@/components/TextoImpactante";
import AyudaSeleccion from "@/components/AyudaSeleccion";

const Index: NextPage = () => {
  useEffect(() => {
    // Asegura que el scroll esté al principio de la página al cargar
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black min-h-screen">
    <BannerVideo/>
      <TextoImpactante/>
      
       <PizarraConEnlaces />
      <Testimonios
        headerImage="/image/noelia2.jpg"
        videoPaths={[
          { src: "/image/testimonio1.mp4", poster: "/image/testimonio1.png" },
          { src: "/image/testimonio2.mp4", poster: "/image/testimonio2.png" },
          { src: "/image/testimonio3.mp4", poster: "/image/testimonio3.png" },
          { src: "/image/testimonio4.mp4", poster: "/image/testimonio4.png" }
        ]}
      />
     
     
     <AyudaSeleccion/>
    </div>
  );
};

export default Index;
