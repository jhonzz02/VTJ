"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black"
    >
      <div className="container mx-auto flex flex-col max-sm:flex-col-reverse items-center justify-between px-4 gap-4 md:flex-row text-zinc-500 dark:text-zinc-400 text-sm">
        <div className="flex gap-6">
          {/*                 <Image
                  src="/Logo.png"
                  alt="Logo da Marca"
                  width={30}
                  height={30}
                  className="rounded-full object-cover hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
                /> */}
          <p className="flex justify-center items-center">
            © 2026 VTJ Tecnologia. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-white hover:text-zinc-400 font-bold">
            Contato
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
