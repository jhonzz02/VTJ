"use client";
import { motion, Variants } from "framer-motion";
import {
  ArrowDown,
} from "lucide-react";

export default function HERO() {
  // 2. Configuração dos Itens Filhos (o que cada um faz)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 }, // Começa invisível e um pouco pra baixo
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  
  return (
              <section className="container mx-auto px-4 flex flex-col justify-center">
              <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center space-y-8 w-full">
                {/* Badge (Item 2) */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span className="text-zinc-600 dark:text-zinc-400">
                    Sua agenda, simplificada.
                  </span>
                </motion.div>

                {/* Título (Item 3) */}
                <motion.h1
                  variants={itemVariants}
                  className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
                >
                  Organize sua vida com <br className="hidden md:block" />
                  <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    apenas um áudio.
                  </span>
                </motion.h1>

                {/* Descrição (Item 4) */}
                <motion.p
                  variants={itemVariants}
                  className="max-w-150 text-lg text-zinc-500 md:text-xl dark:text-zinc-400 leading-relaxed"
                >
                  Conheça a <strong>Maia</strong>. Envie uma mensagem de voz no
                  WhatsApp e veja seus compromissos aparecerem magicamente no
                  Google Agenda.
                </motion.p>

                {/* Botões (Item 5) */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
                >
                  <button className="inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-700">
                    <a href="#1">Ver demonstração </a>
                    <ArrowDown className="ml-h-4 w-4" />
                  </button>
                </motion.div>
              </div>
            </section>
  );
}
