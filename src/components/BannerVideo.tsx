import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Banner: FC = () => {
  const videoSrc = "/image/noelia1.mp4";
  const images = ["/image/noelia5.jpg", "/image/noelia6.jpg", "/image/noelia7.jpg", "/image/noelia8.jpg"];
  const title = "NOELIA PACE LA MEDIUM DE LATINOAMERICA";
  const description = "En un mundo cada vez más conectado, nos encontramos con una propuesta especial en la que se fusiona la magia del teatro con el misterio del más allá. Estamos hablando de un evento que promete emociones intensas y encuentros inolvidables: el show en vivo de Noelia Pace, una reconocida médium capaz de conectar con los seres que se encuentran en el otro plano.";

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true); // Estado para manejar el sonido

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Reproducción automática bloqueada", error);
      });
    }
  }, []);

  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const handleToggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted; // Alternar el estado del sonido
      setIsMuted(!isMuted); // Actualizar el estado
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        loop
        controls
        autoPlay
        playsInline
        muted={isMuted} // Control de sonido
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="relative flex flex-col items-start justify-end h-full p-6 md:p-12 lg:p-16 bg-black bg-opacity-50">
        <motion.div initial="hidden" animate="visible" variants={bannerVariants}>
          <h1 className="text-4xl font-bold mb-2 text-red-800 text-center opacity-90 bg-white/20 text-shadow-white">{title}</h1>
          <p className="text-lg text-white">{description}</p>
        </motion.div>
        <motion.div className="flex space-x-4 mt-6">
          {images.map((imgSrc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.5 }}
            >
              <Image src={imgSrc} width={80} height={80} alt={`Imagen ${idx + 1}`} className="rounded-lg" />
            </motion.div>
          ))}
        </motion.div>

        {/* Botón para activar el sonido */}
        <button
          onClick={handleToggleSound}
          className="absolute bottom-10 right-10 bg-white text-black py-2 px-4 rounded-full"
        >
          {isMuted ? "Activar sonido" : "Silenciar sonido"}
        </button>
      </div>
    </div>
  );
};

export default Banner;
