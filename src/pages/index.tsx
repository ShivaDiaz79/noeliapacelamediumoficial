import { NextPage } from "next";
import BannerVideo from "@/components/BannerVideo";
import Testimonios from "@/components/Testimonios";
import PizarraConEnlaces from "@/components/PizarraConEnlaces";
import DisponibilidadVuelos from "@/components/DisponibilidadVuelos";
import DisponibilidadHospedajes from "@/components/DisponibilidadHospedajes";

const Home: NextPage = () => {
  return (
    <div className="bg-black">
      <BannerVideo 
        videoSrc="/image/noelia1.mp4" // Ruta del video dinámico
        images={["/image/noelia5.jpg", "/image/noelia6.jpg", "/image/noelia7.jpg","/image/noelia8.jpg"]}
        title="NOELIA PACE LA MEDIUM DE LATINOAMERICA"
        description="En un mundo cada vez más conectado, nos encontramos con una propuesta especial en la que se fusiona la magia 
del teatro con el misterio del más allá. Estamos hablando de un evento que promete emociones intensas y 
encuentros inolvidables: el show en vivo de Noelia Pace, una reconocida médium capaz de conectar con los seres 
que se encuentran en el otro plano."
      />
      <Testimonios 
        headerImage="/image/noelia2.jpg" 
        videoPaths={["/image/testimonio1.mp4", "/image/testimonio2.mp4","/image/testimonio3.mp4","/image/testimonio4.mp4",]}
      />
      <PizarraConEnlaces />
      
      {/* Contenedor en flex para los dos componentes en la misma fila */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center my-12">
        <DisponibilidadVuelos />
        <DisponibilidadHospedajes />
      </div>
    </div>
  );
};

export default Home;
