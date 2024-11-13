import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface TestimoniosProps {
  headerImage: string;
  videoPaths: string[];
}

const Testimonios: FC<TestimoniosProps> = ({ headerImage, videoPaths }) => {
  return (
    <div className="text-center my-12 p-6 bg-gray-100 rounded-lg">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Image src={headerImage} width={800} height={400} alt="Imagen de encabezado" className="mx-auto mb-6 rounded-lg" />
      </motion.div>
      <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {videoPaths.map((videoPath, idx) => (
          <motion.div
            key={idx}
            className="bg-black rounded-lg overflow-hidden relative"
            whileHover={{ scale: 1.05 }}
          >
            <video
              className="w-full h-auto"
              controls
              poster="/path/to/video-poster.jpg"
              src={videoPath}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonios;
