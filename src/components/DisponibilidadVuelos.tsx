// src/components/DisponibilidadVuelos.tsx
import { FC } from "react";
import { motion } from "framer-motion";

const DisponibilidadVuelos: FC = () => {
  return (
    <motion.div className="text-center my-12 p-6 bg-gray-100 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-2xl font-bold mb-4">Disponibilidad de Vuelos</h2>
      <motion.iframe
        src="https://www.vuelosbaratos.es/"
        title="Disponibilidad de Vuelos"
        className="w-full h-80 rounded"
        whileHover={{ scale: 1.02 }}
      ></motion.iframe>
    </motion.div>
  );
};

export default DisponibilidadVuelos;
