import { motion } from "framer-motion";

const TextoImpactante = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="space-y-10">
        {/* Primera sección */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Imagen de la primera sección */}
            <img
              src="/image/noelia12.jpg"
              alt="Conexión espiritual"
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-red-800">
                Emociones fluyen y se crean lazos que trascienden el tiempo.
              </h2>
              <p className="text-lg text-gray-100">
                Noelia Pace nos ofrece la oportunidad de explorar el poder de la conexión espiritista/astral,
                permitiéndonos reencontrarnos con aquellos que ya no están físicamente con nosotros.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Segunda sección */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1.5, ease: "easeOut", delay: 5 }} // Retraso de 5 segundos
        >
          <div className="flex flex-col md:flex-row-reverse items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Imagen de la segunda sección */}
            <img
              src="/image/noelia10.jpg"
              alt="Médium Noelia Pace"
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-red-800">Un canal de comunicación con el más allá</h2>
              <p className="text-lg text-gray-100">
                Reconocida por su don de médium, Noelia transmite el mensaje de las almas, las ve, las oye e incorpora.
                Ofrece una experiencia en la que el público tendrá la oportunidad de presenciar la comunicación entre el mundo espiritual y el nuestro.
                Noelia actúa como canal de comunicación, permitiendo que estas energías trasciendan las barreras entre los planos.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tercera sección */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 1.5, ease: "easeOut", delay: 10 }} // Retraso de 10 segundos
        >
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Imagen de la tercera sección */}
            <img
              src="/image/noelia9.jpg"
              alt="Reflexión sobre la vida"
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
            <div className="md:w-2/3">
              <h2 className="text-xl font-bold text-red-800">Un viaje transformador a través de la muerte</h2>
              <p className="text-lg text-gray-100">
                El objetivo fundamental de esta experiencia es ofrecer a los asistentes una oportunidad única para aprender a transitar las distintas etapas del duelo
                y experimentar la muerte desde una perspectiva completamente diferente. Noelia Pace, a través de su conexión con el más allá, nos invita a reflexionar sobre
                la naturaleza de la vida y la trascendencia del espíritu, brindándonos consuelo y una nueva comprensión de nuestro propio viaje existencial.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextoImpactante;
