"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Calendar,
  Mic,
  MessageCircle,
  CheckCircle2,
  ArrowDown,
  AudioLines,
} from "lucide-react";
import Image from "next/image";
import Footer from "./components/footer";
import CTA from "./components/CTA";
import HIW from "./components/HIW";
import EXEMPLO from "./components/exemplo";
import HERO from "./components/HERO";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mantive o tempo de 2.5s que definimos antes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  // --- CONFIGURAÇÕES DE ANIMAÇÃO (VARIANTS) ---

  // 1. Configuração do Container Pai (controla a orquestra)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        // Atrasa o início para não atropelar a saída do splash
        delayChildren: 0.3,
        // Cada filho vai aparecer 0.2s depois do anterior
        staggerChildren: 0.2,
      },
    },
  };

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
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900 font-sans dark:bg-black dark:text-zinc-50 selection:bg-violet-500 selection:text-white relative">
      {/* --- SPLASH SCREEN --- */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="splash-screen"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              filter: "blur(15px)",
              scale: 1.05,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-linear-to-br from-zinc-900 via-black to-violet-950"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-7xl md:text-8xl font-extrabold tracking-tighter text-white mb-4 text-center">
                Conheça Sua Assistente Virtual <br /> <br /> Maia
              </span>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                className="h-1 bg-violet-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CONTEÚDO PRINCIPAL --- */}
      {!isLoading && (
        <motion.div
          variants={containerVariants} // Aplica a orquestração
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col"
        >
          {/* --- Header (Item 1 da cascata) --- */}
          <motion.header
            variants={itemVariants}
            className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80"
          >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tighter bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] bg-clip-text text-transparent">
                  Maia
                </span>
                {/*                 <div className="h-4 w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>
                <span className="text-2xl font-medium">
                  VTJ
                </span> */}
              </div>

              <nav className="hidden md:flex gap-6 text-sm font-medium">
                {/*                 <Link href="#1" className="hover:text-violet-600 transition-colors">Como funciona</Link>
                 */}
                {/*                 <Link href="#privacidade" className="hover:text-violet-600 transition-colors">Privacidade</Link>
                 */}{" "}
              </nav>

              <div className="flex items-center gap-4">
                {/*                 <button className="hidden md:block text-sm font-medium hover:underline">Login</button>
                 */}{" "}
                <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-all">
                  <a href="https://pay.kiwify.com.br/fqyeisf" target="blank">
                    Quero meu acesso agora!
                  </a>
                </button>
              </div>
            </div>
          </motion.header>

          <main className="flex-1">
            <HERO />

            {/* video */}
            <motion.div
              variants={itemVariants}
              className="bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] h-[calc(100vh-32px)] flex justify-center items-center"
              id="1"
            >
              <div className="border">
                <video
                  src="/Video.mp4"
                  className="h-[480] w-[848] rounded-lg"
                  controls
                  autoPlay={true}
                  muted={true}
                >
                  <source src="/main.mp4" type="video/mp4" />
                </video>
              </div>
            </motion.div>

            <HIW />
            <EXEMPLO />
            <CTA />
          </main>
          <Footer />
        </motion.div>
      )}
    </div>
  );
}
