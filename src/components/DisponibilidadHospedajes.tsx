// src/components/DisponibilidadHospedajes.tsx
import { FC } from "react";
import { motion } from "framer-motion";

const DisponibilidadHospedajes: FC = () => {
  return (
    <motion.div className="text-center my-12 p-6 bg-gray-100 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <h2 className="text-2xl font-bold mb-4">Disponibilidad de Hospedajes</h2>
      <motion.iframe
        src="https://www.airbnb.com.bo/santa-cruz-de-la-sierra-bolivia/stays?_set_bev_on_new_domain=1714492355_M2RmMTY0ODFlMjBh"
        title="Disponibilidad de Hospedajes"
        className="w-full h-80 rounded"
        whileHover={{ scale: 1.02 }}
      ></motion.iframe>
    </motion.div>
  );
};

export default DisponibilidadHospedajes;
