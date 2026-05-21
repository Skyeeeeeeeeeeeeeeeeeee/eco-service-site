// app/loading.tsx

'use client'

import { motion } from "framer-motion"

export default function Loading() {

  return (

    <div className="fixed inset-0 bg-[#f5f5f5] flex items-center justify-center z-[9999]">

      <div className="flex flex-col items-center">

        {/* LOGO */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.6
          }}
          className="text-4xl md:text-6xl font-bold text-green-600 mb-8"
        >
          Экосервис
        </motion.h1>

        {/* DOTS */}
        <div className="flex gap-3">

          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0
            }}
            className="w-4 h-4 rounded-full bg-green-600"
          />

          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.15
            }}
            className="w-4 h-4 rounded-full bg-green-600"
          />

          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              delay: 0.3
            }}
            className="w-4 h-4 rounded-full bg-green-600"
          />

        </div>

      </div>

    </div>

  )

}