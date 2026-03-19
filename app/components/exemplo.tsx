"use client";
import { motion,  Variants } from "framer-motion";
import {
  Calendar,
  Mic
} from "lucide-react";

export default function EXEMPLO() {
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
  );
}
