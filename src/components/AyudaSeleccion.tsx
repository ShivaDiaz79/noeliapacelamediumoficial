import { FC } from "react";
import { motion } from "framer-motion";

const AyudaSeleccion: FC = () => {
  const items = [
    { title: "Vuelo", image: "/image/boa.png", link: "https://www.boa.bo/" },
    { title: "Pasaje en Bus", image: "/image/bus.png", link: "https://www.ticketsbolivia.com.bo/" },
    { title: "Alojamiento", image: "/image/house.png", link: "https://www.airbnb.com.bo/?_set_bev_on_new_domain=1714492355_M2RmMTY0ODFlMjBhs" },
  ];

  return (
    <motion.div className="text-center my-12 p-6 bg-black rounded-lg">
      <h2 className="text-2xl text-white font-semibold mb-6">
        Si sos del interior, te ayudamos a seleccionar tu vuelo, pasaje en bus o tu alojamiento
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.open(item.link, "_blank")}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-white text-lg font-bold">
              {item.title}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default AyudaSeleccion;
