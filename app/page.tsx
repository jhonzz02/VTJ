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
              <span className="text-7xl md:text-8xl font-extrabold tracking-tighter text-white mb-4">
                VTJ
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
                <span className="text-2xl font-bold tracking-tighter bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] bg-clip-text text-transparent">VTJ</span>
                <div className="h-4 w-0.5 bg-zinc-300 dark:bg-zinc-700"></div>
                <span className="text-2xl font-medium">
                  Maia
                </span>
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
                  <a href="">Quero meu acesso agora!</a>
                </button>
              </div>
            </div>
          </motion.header>

          <main className="flex-1">
            {/* --- Hero Section --- */}
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
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              </div>
            </section>

            {/* video */}
            <motion.div
              variants={itemVariants}
              className="bg-linear-to-r from-[#100B31] to-[#100B31] h-[calc(100vh-32px)] flex justify-center items-center"
              id="1"
            >
              <div className="bg-amber-50 ">
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

            {/* --- How it Works / Features (COM SCROLL REVEAL) --- */}
            <motion.section
              className="container mx-auto px-4 py-12"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Como a Maia funciona?
                </h2>
                <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                  Fluxo simples, sem configurações complexas.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Card 1 (COM HOVER) */}
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-colors hover:border-violet-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
                    <AudioLines className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    1. Envie um Áudio ou Mensagem
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    Abra o WhatsApp e fale naturalmente. Não precisa digitar
                    datas ou preencher formulários.
                  </p>
                </motion.div>

                {/* Card 2 (COM HOVER) */}
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-colors hover:border-violet-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">2. IA Processa</h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    A Maia entende o contexto, identifica data, hora e
                    participantes e confirma com você instantaneamente.
                  </p>
                </motion.div>

                {/* Card 3 (COM HOVER) */}
                <motion.div
                  whileHover={{
                    y: -10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 transition-colors hover:border-violet-200 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-violet-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">
                    3. Agenda Atualizada
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400">
                    O evento é criado no seu Google Agenda e a Maia te envia
                    lembretes antes do compromisso.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* section conversa + agenda*/}
            <motion.div variants={itemVariants} className="w-full pb-12">
              <div className="relative mx-auto max-w-5xl rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl dark:border-zinc-800 dark:bg-zinc-950">
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-violet-500 to-transparent opacity-20"></div>

                <div className="grid md:grid-cols-2 gap-8 items-center p-8">
                  <div className="space-y-4">
                    <div className="flex items-end gap-3">
                      <div className="h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-xs">
                        Vc
                      </div>
                      <div className="rounded-2xl rounded-bl-none bg-violet-100 px-4 py-2 text-zinc-900 dark:bg-violet-900/30 dark:text-violet-100">
                        <div className="flex items-center gap-2">
                          <Mic className="h-4 w-4 text-violet-600" />
                          <div className="h-1 w-24 rounded bg-violet-300 dark:bg-violet-700"></div>
                          <span className="text-xs text-violet-600">0:12</span>
                        </div>
                        <p className="text-xs mt-1 opacity-70">
                          Maia, marca um almoço com o Carlos amanhã às 12h30.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-end gap-3 flex-row-reverse">
                      <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-xs text-white">
                        M
                      </div>
                      <div className="rounded-2xl rounded-br-none bg-zinc-100 px-4 py-2 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                        <p className="text-sm">
                          Combinado! Almoço com Carlos agendado para amanhã
                          (04/10) às 12:30. ✅
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <div className="flex items-center gap-2 mb-6 text-zinc-500">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm font-semibold">
                        Google Agenda
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="h-16 w-full rounded-lg border-l-4 border-violet-500 bg-violet-50 p-3 dark:bg-violet-900/10">
                        <div className="text-sm font-bold text-violet-900 dark:text-violet-100">
                          Almoço com Carlos
                        </div>
                        <div className="text-xs text-violet-700 dark:text-violet-300 mt-1">
                          12:30 - 13:30
                        </div>
                      </div>
                      <div className="h-16 w-full rounded-lg border-l-4 border-zinc-300 bg-zinc-50 p-3 opacity-50 dark:border-zinc-700 dark:bg-zinc-800/50">
                        <div className="h-3 w-24 rounded bg-zinc-200 mb-2 dark:bg-zinc-700"></div>
                        <div className="h-2 w-16 rounded bg-zinc-200 dark:bg-zinc-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* --- CTA Footer (COM SCROLL REVEAL) --- */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="border-t border-zinc-200 bg-zinc-50 py-24 dark:border-zinc-800 bg-linear-to-r from-[#100B31] to-[#100B31]"
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
                  <a href="">Quero automatizar minha agenda!</a>
                </button>
              </div>
            </motion.section>
          </main>

          {/* --- Footer (COM SCROLL REVEAL) --- */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-black"
          >
            <div className="container mx-auto flex flex-col max-sm:flex-col-reverse items-center justify-between px-4 gap-4 md:flex-row text-zinc-500 dark:text-zinc-400 text-sm">
              <div className="flex gap-6">
                <Image
                  src="/Logo.png"
                  alt="Logo da Marca"
                  width={30}
                  height={30}
                  className="rounded-full object-cover hover:cursor-pointer transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 backdrop-blur-sm"
                />
                <p className="flex justify-center items-center">
                  © 2026 VTJ Tecnologia. Todos os direitos reservados.
                </p>
              </div>

              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-white hover:text-zinc-400 font-bold"
                >
                  Contato
                </a>
              </div>
            </div>
          </motion.footer>
        </motion.div>
      )}
    </div>
  );
}
