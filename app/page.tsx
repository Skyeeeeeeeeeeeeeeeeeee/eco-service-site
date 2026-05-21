'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900 overflow-hidden">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="block">

            <h2 className="text-2xl md:text-3xl font-bold text-green-600">
              Экосервис
            </h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>

          </Link>

          {/* DESKTOP NAV */}
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

          {/* DESKTOP BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden md:block bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-6 py-3 rounded-2xl font-medium transition duration-300"
          >
            Заказать
          </button>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex flex-col gap-1"
          >

            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>
            <span className="w-6 h-0.5 bg-black"></span>

          </button>

        </div>

      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-50 flex flex-col"
          >

            {/* TOP */}
            <div className="flex items-center justify-between px-6 py-6 border-b">

              <div>

                <h2 className="text-2xl font-bold text-green-600">
                  Экосервис
                </h2>

                <p className="text-sm text-gray-500">
                  Новосибирск
                </p>

              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-4xl"
              >
                ×
              </button>

            </div>

            {/* LINKS */}
            <div className="flex flex-col p-6 gap-6 text-2xl font-semibold">

              <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                Главная
              </Link>

              <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
                Услуги
              </Link>

              <Link href="/prices" onClick={() => setMobileMenuOpen(false)}>
                Цены
              </Link>

              <Link href="/contacts" onClick={() => setMobileMenuOpen(false)}>
                Контакты
              </Link>

            </div>

            {/* BUTTON */}
            <div className="mt-auto p-6">

              <button
                onClick={() => {
                  setIsOpen(true)
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-lg transition"
              >
                Заказать
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-28">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6 md:mb-8">

              Биотуалеты
              <span className="text-green-600">
                {" "}для стройки,
              </span>

              <br />

              мероприятий и бизнеса

            </h1>

            <p className="text-gray-600 text-lg md:text-2xl leading-relaxed mb-8 md:mb-10">

              Аренда, продажа и обслуживание биотуалетов
              в Новосибирске и области.
              Быстрая доставка и качественный сервис.

            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <button
                onClick={() => setIsOpen(true)}
                className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300"
              >
                Оставить заявку
              </button>

              <Link
                href="/services"
                className="border border-gray-300 hover:border-green-600 hover:text-green-600 px-8 py-4 rounded-2xl text-lg font-medium transition-all duration-300 text-center"
              >
                Наши услуги
              </Link>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 mt-12">

              <div className="bg-white rounded-2xl p-4 shadow text-center">

                <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                  5+
                </h3>

                <p className="text-sm text-gray-600">
                  лет на рынке
                </p>

              </div>

              <div className="bg-white rounded-2xl p-4 shadow text-center">

                <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                  500+
                </h3>

                <p className="text-sm text-gray-600">
                  клиентов
                </p>

              </div>

              <div className="bg-white rounded-2xl p-4 shadow text-center">

                <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                  24/7
                </h3>

                <p className="text-sm text-gray-600">
                  поддержка
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="bg-white rounded-[40px] shadow-2xl p-6 h-[500px] flex items-center justify-center">

              <div className="text-center">

                <div className="text-8xl mb-6">
                  🚽
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  Фото биотуалета
                </h3>

                <p className="text-gray-500">
                  Здесь можно разместить
                  настоящее фото кабины
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold text-center mb-12 md:mb-16"
        >
          Наши услуги
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          {/* CARD */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-lg transition-all duration-300"
          >

            <div className="text-5xl mb-6">
              🚛
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Аренда
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Биотуалеты для стройки,
              мероприятий и бизнеса.
            </p>

          </motion.div>

          {/* CARD */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-lg transition-all duration-300"
          >

            <div className="text-5xl mb-6">
              🧼
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Обслуживание
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Регулярная очистка,
              дезинфекция и сервис.
            </p>

          </motion.div>

          {/* CARD */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-3xl p-6 md:p-8 shadow-lg transition-all duration-300"
          >

            <div className="text-5xl mb-6">
              🏢
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Продажа
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Продажа современных
              биотуалетов.
            </p>

          </motion.div>

        </div>

      </section>

    </main>
  )
}