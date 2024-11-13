import { FC, useState } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
import { database } from "@/../utils/firebase"; // Importación corregida

const PizarraConEnlaces: FC = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  const handleEnviarFormulario = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(database, "noelia"), { // Uso de "database"
        nombre,
        correo,
        timestamp: new Date(),
      });
      setNombre("");
      setCorreo("");
      alert("Formulario enviado correctamente.");
    } catch (error) {
      console.error("Error al enviar el formulario: ", error);
      alert("Hubo un error al enviar el formulario.");
    }
  };

  return (
    <motion.div className="text-center my-12 p-6 bg-black rounded-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="flex justify-center space-x-4 mb-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 text-white px-4 py-2 rounded shadow-green-400 shadow-xl"
          onClick={() => window.open("https://wa.me/+59174173733", "_blank")}
        >
          Enviar WhatsApp
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white px-4 py-2 rounded shadow-blue-400 shadow-xl"
          onClick={() => setMostrarFormulario(!mostrarFormulario)}
        >
          Consultas
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-purple-500 text-white px-4 py-2 rounded shadow-purple-400 shadow-xl"
          onClick={() => window.open("https://superticket.bo/Mediumnidad/", "_blank")} // Abrir en una nueva pestaña
        >
          Compra tu entrada
        </motion.button>
      </div>
      
      {mostrarFormulario && (
        <motion.form
          onSubmit={handleEnviarFormulario}
          className="bg-white p-4 rounded shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <input
            type="text"
            placeholder="Nombre"
            className="border p-2 w-full mb-2"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo"
            className="border p-2 w-full mb-2"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Enviar</button>
        </motion.form>
      )}
    </motion.div>
  );
};

export default PizarraConEnlaces;
