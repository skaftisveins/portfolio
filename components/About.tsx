import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#008ad8] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="https://www.splashbacks.co.uk/wp-content/uploads/2020/11/PSB215-water-splash-768x576.jpg"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here we{" "}
          <span className="underline decoration-[#008ad8]/50">freakin</span> go
        </h4>
        <p className="text-base">
          Þekking, menntun, færni og reynsla – Lauk þriggja annar
          forritunarbraut í ntv árið 2020 og hef síðan þá verið duglegur að bæta
          við mig þekkingu á því sviði. Hef ágætis þekkingu á helstu
          forritunarmálum og er opinn fyrir nýjum tækifærum. Get smíðað lítil
          forrit sjálfur eins og litla leiki í Python; en það er einmitt m. a.
          það sem ég hef verið að gera í udemy náminu, 100 Days of Python. 100
          verkefni á portfolio mitt.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
