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

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="block">

            <h2 className="text-2xl md:text-3xl font-bold text-green-600">
              Экосервис
            </h2>

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
          <div className="hidden md:flex items-center gap-4">

            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-600 hover:bg-green-700 hover:scale-[1.03] active:scale-95 text-white px-6 py-3 rounded-2xl font-medium transition duration-300"
            >
              Заказать
            </button>

          </div>

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
            <div className="flex flex-col p-6 gap-6 text-xl sm:text-2xl font-semibold">

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
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold text-base md:text-lg transition"
              >
                Заказать
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-14 md:py-24 overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-[95vw]"
          >

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6">

              Биотуалеты
              <br />

              для стройки,
              <br />

              мероприятий
              <br />

              и бизнеса

            </h1>

            <p className="text-gray-600 text-base sm:text-lg md:text-2xl leading-relaxed mb-10 max-w-2xl">

              ООО «ЭкоСервис Новосибирск»
              предоставляет аренду,
              обслуживание и продажу
              туалетных кабин
              по Новосибирску и области.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">

              <button
                onClick={() => setIsOpen(true)}
                className="bg-green-600 hover:bg-green-700 hover:scale-[1.02] active:scale-95 text-white px-8 py-4 rounded-2xl text-base md:text-lg font-semibold transition-all duration-300"
              >
                Оставить заявку
              </button>

              <Link
                href="/services"
                className="border border-gray-300 hover:border-green-600 hover:text-green-600 px-8 py-4 rounded-2xl text-base md:text-lg font-medium transition-all duration-300 text-center"
              >
                Смотреть услуги
              </Link>

            </div>

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-white rounded-2xl p-5 shadow">

                <h3 className="text-3xl font-bold text-green-600">
                  5+
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  лет опыта
                </p>

              </div>

              <div className="bg-white rounded-2xl p-5 shadow">

                <h3 className="text-3xl font-bold text-green-600">
                  1000+
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  обслуженных объектов
                </p>

              </div>

              <div className="bg-white rounded-2xl p-5 shadow">

                <h3 className="text-3xl font-bold text-green-600">
                  24/7
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  поддержка клиентов
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >

            <div className="bg-green-100 rounded-[32px] min-h-[280px] sm:min-h-[350px] md:min-h-[600px] flex items-center justify-center shadow-xl overflow-hidden">

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-green-700 text-center px-6">
                Фото биотуалета
              </h2>

            </div>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-16 md:py-24 overflow-hidden">

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Наши услуги
        </h2>

        <p className="text-gray-600 text-base sm:text-lg mb-14 max-w-3xl leading-relaxed">
          Предоставляем полный спектр услуг
          по аренде, продаже
          и обслуживанию биотуалетов.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-[28px] p-7 md:p-10 shadow-lg transition-all duration-300"
          >

            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              Аренда
              <br />
              биотуалетов
            </h3>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              Краткосрочная и долгосрочная аренда кабин
              для стройплощадок,
              мероприятий и частных объектов.
            </p>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-[28px] p-7 md:p-10 shadow-lg transition-all duration-300"
          >

            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              Продажа кабин
            </h3>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              Продажа новых и обслуженных туалетных кабин
              для бизнеса и частного использования.
            </p>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-[28px] p-7 md:p-10 shadow-lg transition-all duration-300"
          >

            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              Обслуживание
            </h3>

            <p className="text-gray-600 text-base md:text-xl leading-relaxed">
              Очистка, дезинфекция
              и регулярное техническое обслуживание кабин.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-5 md:px-6 pb-20">

        <div className="max-w-6xl mx-auto bg-green-600 rounded-[32px] md:rounded-[40px] py-14 md:py-20 px-6 text-center text-white shadow-2xl">

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            Нужны биотуалеты?
          </h2>

          <p className="text-base sm:text-xl md:text-2xl mb-10 text-green-50 max-w-3xl mx-auto leading-relaxed">
            Оставьте заявку и мы подберём лучшее решение под ваш объект.
          </p>

          <button
            onClick={() => setIsOpen(true)}
            className="bg-white text-green-600 hover:bg-green-50 hover:scale-[1.03] active:scale-95 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-xl font-bold transition-all duration-300"
          >
            Оставить заявку
          </button>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Экосервис
            </h2>

            <p className="text-gray-400 text-base md:text-xl leading-relaxed">
              Аренда, продажа и обслуживание биотуалетов
              в Новосибирске и области.
            </p>

          </div>

          <div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Навигация
            </h3>

            <div className="space-y-4 text-gray-400 text-base md:text-xl">

              <p><Link href="/">Главная</Link></p>
              <p><Link href="/services">Услуги</Link></p>
              <p><Link href="/prices">Цены</Link></p>
              <p><Link href="/contacts">Контакты</Link></p>

            </div>

          </div>

          <div>

            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Контакты
            </h3>

            <div className="space-y-4 text-gray-400 text-base md:text-xl">

              <p>+7 (383) 319-40-21</p>
              <p>Новосибирск</p>
              <p>Советская ул., 64/1</p>

            </div>

          </div>

        </div>

      </footer>

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
              className="relative bg-white rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl"
            >

              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-3xl text-gray-400 hover:text-black transition"
              >
                ×
              </button>

              <h2 className="text-2xl md:text-3xl font-bold mb-6">
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
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
                >
                  Отправить
                </button>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  )
}