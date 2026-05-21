'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed top-[-200px] right-[-200px] w-[500px] h-[500px] bg-green-300 opacity-20 blur-3xl rounded-full pointer-events-none" />

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white/70 backdrop-blur-xl sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="block">
            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-bold text-green-600"
            >
              Экосервис
            </motion.h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>
          </Link>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-10">

            <Link
              href="/"
              className="text-green-600 font-semibold hover:scale-105 transition"
            >
              Главная
            </Link>

            <Link
              href="/services"
              className="hover:text-green-600 hover:scale-105 transition"
            >
              Услуги
            </Link>

            <Link
              href="/prices"
              className="hover:text-green-600 hover:scale-105 transition"
            >
              Цены
            </Link>

            <Link
              href="/contacts"
              className="hover:text-green-600 hover:scale-105 transition"
            >
              Контакты
            </Link>

          </nav>

          {/* BUTTON */}
          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() => setIsOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/30"
          >
            Заказать
          </motion.button>

        </div>

      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-24 md:py-32 relative">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: "easeOut"
          }}
          className="max-w-4xl"
        >

          <motion.div
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity
            }}
          >

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">

              Биотуалеты
              <span className="text-green-600"> для стройки, </span>

              мероприятий
              и бизнеса

            </h1>

          </motion.div>

          <p className="text-gray-600 text-lg md:text-2xl max-w-3xl mb-10 leading-relaxed">

            Аренда, продажа и обслуживание биотуалетов
            в Новосибирске и области.
            Быстрая доставка, качественный сервис
            и выгодные условия для бизнеса.

          </p>

          <div className="flex flex-wrap gap-4">

            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{
                scale: 0.95
              }}
              onClick={() => setIsOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-green-500/30"
            >
              Оставить заявку
            </motion.button>

            <motion.div
              whileHover={{
                scale: 1.05
              }}
            >

              <Link
                href="/services"
                className="border border-gray-300 hover:border-green-600 hover:text-green-600 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 inline-block"
              >
                Наши услуги
              </Link>

            </motion.div>

          </div>

        </motion.div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Наши услуги
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -12,
              scale: 1.03
            }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
          >

            <div className="text-5xl mb-6">
              🚛
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Аренда биотуалетов
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Биотуалеты для стройки, мероприятий,
              парков и бизнеса с доставкой
              по Новосибирску и области.
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -12,
              scale: 1.03
            }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
          >

            <div className="text-5xl mb-6">
              🧼
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Обслуживание
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Регулярная очистка,
              дезинфекция и техническое
              обслуживание кабин.
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            whileHover={{
              y: -12,
              scale: 1.03
            }}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
          >

            <div className="text-5xl mb-6">
              🏢
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Продажа кабин
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Продажа современных
              биотуалетов для бизнеса,
              стройки и частного использования.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 relative">

        <div className="absolute inset-0 bg-green-600" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto px-4 text-center text-white"
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Нужны биотуалеты?
          </h2>

          <p className="text-xl md:text-2xl mb-10 text-green-50">
            Оставьте заявку и мы подберём
            оптимальное решение под ваш объект.
          </p>

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            onClick={() => setIsOpen(true)}
            className="bg-white text-green-600 hover:bg-green-50 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 shadow-2xl"
          >
            Оставить заявку
          </motion.button>

        </motion.div>

      </section>

      {/* POPUP */}
      <AnimatePresence>
        {isOpen && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4"
          >

            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 0.8,
                opacity: 0
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
            >

              {/* CLOSE */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-black transition"
              >
                ×
              </button>

              <h2 className="text-3xl font-bold mb-6">
                Оставить заявку
              </h2>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                />

                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600"
                />

                <textarea
                  placeholder="Комментарий"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-green-600 min-h-[120px]"
                />

                <button
                  className="w-full bg-green-600 hover:bg-green-700 hover:scale-[1.02] active:scale-95 text-white py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  Отправить
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Экосервис
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Аренда, продажа и обслуживание
              биотуалетов в Новосибирске и области.
            </p>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Навигация
            </h3>

            <div className="space-y-2 text-gray-400">

              <p>
                <Link href="/">
                  Главная
                </Link>
              </p>

              <p>
                <Link href="/services">
                  Услуги
                </Link>
              </p>

              <p>
                <Link href="/prices">
                  Цены
                </Link>
              </p>

              <p>
                <Link href="/contacts">
                  Контакты
                </Link>
              </p>

            </div>

          </div>

          <div>

            <h3 className="text-xl font-semibold mb-4">
              Контакты
            </h3>

            <div className="space-y-2 text-gray-400">

              <p>
                +7 (383) 319-40-21
              </p>

              <p>
                Новосибирск
              </p>

              <p>
                Советская ул., 64/1
              </p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  )
}