import { FC, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface BannerVideoProps {
  videoSrc: string;
  images: string[];
  title: string;
  description: string;
}

const BannerVideo: FC<BannerVideoProps> = ({ videoSrc, images, title, description }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Reproducción automática bloqueada", error);
      });
    }
  }, []);

  const bannerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc} // Video dinámico
        autoPlay
        loop
        muted
        controls
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="relative flex flex-col items-start justify-end h-full p-6 md:p-12 lg:p-16 bg-black bg-opacity-50">
        <motion.div initial="hidden" animate="visible" variants={bannerVariants}>
          <h1 className="text-4xl font-bold mb-2 text-white">{title}</h1>
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
      </div>
    </div>
  );
};

export default BannerVideo;
