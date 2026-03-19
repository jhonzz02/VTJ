"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
       <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="border-t border-zinc-200 py-24 dark:border-zinc-800 bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9]"
            >
              <div className="container mx-auto px-4 text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                  Pronto para recuperar seu tempo?
                </h2>
                <p className="mb-8 text-lg text-zinc-500 dark:text-zinc-400">
                  Junte-se a centenas de pessoas que usam a VTJ para gerenciar o
                  dia a dia.
                </p>
                <button className="rounded-full bg-black px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all transform hover:scale-105 active:scale-95 duration-200">
                  <a href="https://pay.kiwify.com.br/fqyeisf" target="_blank">Quero automatizar minha agenda!</a>
                </button>
              </div>
            </motion.section>
  );
}
