"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  Calendar,
  Mic,
  MessageCircle,
  CheckCircle2,
  ArrowDown,
  AudioLines,
  Bell,
  Search,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Mantive o tempo de 2.5s que definimos antes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const tryPlayWithSound = async () => {
    try {
      video.muted = false;
      video.volume = 0.5;
      await video.play();
    } catch (err) {
      // fallback: começa mutado
      video.muted = true;
      video.play().catch(() => {});
    }
  };

  // tenta direto
  tryPlayWithSound();

  // força tentativa após micro-interação
  const forceInteraction = () => {
    tryPlayWithSound();

    document.removeEventListener("click", forceInteraction);
    document.removeEventListener("touchstart", forceInteraction);
    document.removeEventListener("scroll", forceInteraction);
  };

  document.addEventListener("click", forceInteraction);
  document.addEventListener("touchstart", forceInteraction);
  document.addEventListener("scroll", forceInteraction);

  return () => {
    document.removeEventListener("click", forceInteraction);
    document.removeEventListener("touchstart", forceInteraction);
    document.removeEventListener("scroll", forceInteraction);
  };
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

  //botao hero que abre o video
const handleOpenVideo = () => {
  const video = document.getElementById("demoVideo");

  if (!video) return;

  // scroll suave
  video.scrollIntoView({ behavior: "smooth", block: "center" });

  // adiciona destaque visual (zoom leve)
  video.classList.add("scale-105", "transition-all", "duration-500");

  setTimeout(() => {
    video.classList.remove("scale-105");

    // fullscreen
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }

    video.play();
    // Tenta desmutar após play
    setTimeout(() => {
      video.muted = false;
      video.volume = 0.5;
    }, 100);
  }, 600); // tempo da animação
};
  return (
    <div className="flex min-h-screen flex-col selection:bg-violet-500 selection:text-white relative">
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
              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  fill
                  className="object-cover"
                />
              </div>

              {/*   <span className="text-7xl md:text-8xl font-extrabold tracking-tighter text-white mb-4 text-center">
                Conheça Sua Assistente Virtual <br /> <br /> Maia
              </span> */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                className="h-1 bg-violet-500 rounded-full mt-6"
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
            className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-black"
          >
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
              <div className="flex items-center text-2xl  tracking-tighter ">
                <p className="font-bold bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] bg-clip-text text-transparent">
                  Maia
                </p>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://pay.kiwify.com.br/fqyeisf",
                    "_blank",
                    "noopener,noreferrer",
                  )
                }
                className="font-bold flex items-center rounded-full bg-green-500 px-4 py-2 text-sm text-white hover:bg-green-700 transition-all cursor-pointer "
              >
                Quero meu acesso agora!
              </button>
            </div>
          </motion.header>

          <main className="flex-1 bg-black">
            {/* HERO */}
            <section className="container mx-auto px-4 flex flex-col justify-center">
              <div className="h-[calc(100vh-64px)] flex flex-col justify-center items-center text-center space-y-8 w-full">
                {/* frase de efeito */}
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-sm shadow-sm  "
                >
                  <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  <span>Sua agenda, simplificada.</span>
                </motion.div>

                {/* Título */}
                <motion.h1
                  variants={itemVariants}
                  className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl text-white"
                >
                  Organize sua vida com <br className="hidden md:block" />
                  <span className="bg-linear-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                    apenas um áudio.
                  </span>
                </motion.h1>

                {/* Descrição*/}
                <motion.p
                  variants={itemVariants}
                  className="max-w-150 text-lg text-white md:text-xl leading-relaxed"
                >
                  Conheça a <strong>Maia</strong>. Envie uma mensagem de voz no
                  WhatsApp e veja seus compromissos aparecerem magicamente no
                  Google Agenda.
                </motion.p>

                {/* Botões */}
                <motion.div
                  variants={itemVariants}
                  className="flex flex-col sm:flex-row gap-4 w-full justify-center pt-4"
                >
                  <button
                    onClick={handleOpenVideo}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-violet-600 px-8 text-base font-medium text-white shadow transition-colors hover:bg-violet-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-violet-700"
                  >
                    Ver demonstração
                    <ArrowDown className="ml-2 h-4 w-4" />
                  </button>
                </motion.div>
              </div>
            </section>

            {/* video */}
            <motion.div
              variants={itemVariants}
              className="bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] min-h-screen flex items-center border-white border-y"
              id="video"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Video */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                  >
                    <video
                      id="demoVideo"
                      ref={videoRef}
                      src="/Video.mp4"
                      className="w-full max-w-2xl h-auto rounded-2xl shadow-2xl border-4 border-white/20"
                      controls
                      autoPlay
                      muted
                      playsInline
                      loop
                    />
                  </motion.div>

                  {/* Features */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white"
                  >
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent mb-2">
                      Recursos Principais
                    </h2>
                    <p className="text-lg text-violet-100 mb-2">
                      Descubra como a Maia transforma sua gestão de tempo com
                      inteligência artificial avançada.
                    </p>
                    <div className="space-y-2">
                      {[
                        {
                          icon: Calendar,
                          text: "Integração completa com Google Agenda",
                        },
                        {
                          icon: AudioLines,
                          text: "Suporte a áudio, texto e imagens",
                        },
                        {
                          icon: MapPin,
                          text: "Detalhes completos no agendamento (local e participantes)",
                        },
                        {
                          icon: Bell,
                          text: "Lembretes diários em diversos horários",
                        },
                        {
                          icon: CheckCircle2,
                          text: "Antecipação do planejamento do dia seguinte",
                        },
                        {
                          icon: MessageCircle,
                          text: "Gerenciamento inteligente de tarefas",
                        },
                        {
                          icon: Search,
                          text: "Maia consegue fazer buscas na internet e mandar endereços através do google maps",
                        },
                      ].map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
                        >
                          <feature.icon className="h-8 w-8 text-violet-300 mt-1 shrink-0" />
                          <span className="text-lg font-medium">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* COMO FUNCIONA */}
            <motion.section
              className="mx-auto py-12 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  Como a Maia funciona?
                </h2>
              </div>

              {/* cards */}
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Card 1 */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="flex-1 group relative overflow-hidden rounded-2xl border border-zinc-200 bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] text-white p-8 transition-colors hover:border-violet-200 hover:shadow-lg dark:hover:border-violet-900"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
                      <AudioLines className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">
                      1. Envie um Áudio ou Mensagem
                    </h3>
                    <p>
                      Abra o WhatsApp e fale naturalmente. Não precisa digitar
                      datas ou preencher formulários.
                    </p>
                  </motion.div>

                  {/* Card 2 */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="flex-1 group relative overflow-hidden rounded-2xl border border-zinc-200 bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] text-white p-8 transition-colors hover:border-violet-200 hover:shadow-lg dark:hover:border-violet-900"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">2. IA Processa</h3>
                    <p>
                      A Maia entende o contexto, identifica data, hora e
                      participantes e confirma com você instantaneamente.
                    </p>
                  </motion.div>

                  {/* Card 3 */}
                  <motion.div
                    whileHover={{
                      y: -10,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                    className="flex-1 group relative overflow-hidden rounded-2xl border border-zinc-200 bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9] text-white p-8 transition-colors hover:border-violet-200 hover:shadow-lg dark:hover:border-violet-900"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 text-xl font-bold">
                      3. Agenda Atualizada
                    </h3>
                    <p>
                      O evento é criado no seu Google Agenda e a Maia te envia
                      lembretes antes do compromisso.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* EXEMPLO */}
            <motion.div variants={itemVariants} className="w-full pb-12 px-4">
              <div className="relative mx-auto max-w-5xl rounded-2xl border border-zinc-200 bg-black p-4 shadow-xl">
                <div className="absolute top-0 left-0 right-0 h-px bg-liner-to-r from-transparent via-violet-500 to-transparent opacity-20"></div>

                <div className="grid md:grid-cols-2 gap-8 items-center p-8">
                  {/* CHAT */}
                  <div className="space-y-4">
                    {/* Mensagem usuário */}
                    <div className="flex items-end gap-3">
                      <div className="h-8 w-8 rounded-full bg-zinc-200 flex items-center justify-center text-xs">
                        Vc
                      </div>

                      <div className="rounded-2xl rounded-bl-none bg-violet-900/30 px-4 py-2 text-zinc-900">
                        <div className="flex items-center gap-2">
                          <Mic className="h-4 w-4 text-violet-600" />
                          <div className="h-1 w-24 rounded bg-violet-700"></div>
                          <span className="text-xs text-violet-600">0:12</span>
                        </div>

                        <p className="text-xs mt-1 opacity-70 text-white">
                          Maia, marca um almoço com o Carlos amanhã às 12h30.
                        </p>
                      </div>
                    </div>

                    {/* Resposta IA */}
                    <div className="flex items-end gap-3 flex-row-reverse">
                      <div className="h-8 w-8 rounded-full bg-violet-600 flex items-center justify-center text-xs text-white">
                        M
                      </div>

                      <div className="rounded-2xl rounded-br-none bg-zinc-900 px-4 py-2 text-zinc-900">
                        <p className="text-sm text-white">
                          Combinado! Almoço com Carlos agendado para amanhã
                          (04/10) às 12:30. ✅
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CARD AGENDA */}
                  <div className="rounded-xl border border-zinc-200 bg-zinc-900 p-6 shadow-sm">
                    <div className="flex items-center gap-2 mb-6 text-zinc-500">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm font-semibold">
                        Google Agenda
                      </span>
                    </div>

                    <div className="space-y-3">
                      {/* Evento */}
                      <div className="h-16 w-full rounded-lg border-l-4 border-violet-500 bg-violet-900/10 p-3">
                        <div className="text-sm font-bold text-white">
                          Almoço com Carlos
                        </div>
                        <div className="text-xs text-white mt-1">
                          12:30 - 13:30
                        </div>
                      </div>

                      {/* Placeholder */}
                      <div className="h-16 w-full rounded-lg border-l-4 border-zinc-700 bg-zinc-800/50 p-3 opacity-50">
                        <div className="h-3 w-24 rounded bg-zinc-700 mb-2"></div>
                        <div className="h-2 w-16 rounded bg-zinc-700"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="border-t border-zinc-200 py-24  bg-linear-to-r from-[#0D42BE] via-[#2325C3] to-[#360FC9]"
            >
              <div className="container mx-auto px-4 text-center">
                <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl text-white">
                  Pronto para recuperar seu tempo?
                </h2>
                <p className="mb-8 text-lg text-white">
                  Junte-se a centenas de pessoas que usam a VTJ para gerenciar o
                  dia a dia.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://pay.kiwify.com.br/fqyeisf",
                      "_blank",
                      "noopener,noreferrer",
                    )
                  }
                  className="rounded-full px-8 py-4 text-lg font-bold text-white shadow-lg hover:bg-zinc-800 transition-all transform hover:scale-105 active:scale-95 duration-200 cursor-pointer bg-green-500"
                >
                  Quero automatizar minha agenda!
                </button>
              </div>
            </motion.section>
          </main>
          {/* FOOTER */}
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border-t border-zinc-200 py-12 bg-black"
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
                <a
                  href="https://wa.me/5511974530928?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre"
                  target="_blank"
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
