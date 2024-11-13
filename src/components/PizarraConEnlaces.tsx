// src/components/PizarraConEnlaces.tsx
import { FC, useState } from "react";
import { motion } from "framer-motion";

const PizarraConEnlaces: FC = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  return (
    <motion.div className="text-center my-12 p-6 bg-blue-100 rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <motion.div className="bg-white p-4 rounded shadow-md inline-block mb-6" whileHover={{ scale: 1.05 }}>
        <a href="/enlace-especial" className="text-blue-600 font-semibold">Enlace Importante</a>
      </motion.div>
      <div className="flex justify-center space-x-4 mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => window.open("https://wa.me/1234567890", "_blank")}
        >
          Enviar WhatsApp
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          Abrir Formulario
        </motion.button>
      </div>
      {mostrarFormulario && (
        <motion.form className="bg-white p-4 rounded shadow-md" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <input type="text" placeholder="Nombre" className="border p-2 w-full mb-2" />
          <input type="email" placeholder="Correo" className="border p-2 w-full mb-2" />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default PizarraConEnlaces;
