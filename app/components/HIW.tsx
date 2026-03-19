"use client";
import { motion } from "framer-motion";
import {
  MessageCircle,
  CheckCircle2,
  AudioLines,
} from "lucide-react";

export default function HIW() {
  return (
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
  );
}
