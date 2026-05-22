'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function PricesPage() {

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
              className="hover:text-green-600 hover:scale-105 transition"
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
              className="text-green-600 font-semibold hover:scale-105 transition"
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
      <section className="max-w-7xl mx-auto px-5 md:px-6 py-14 md:py-20 overflow-hidden">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Цены на услуги
          </h1>

          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mb-14 md:mb-16 leading-relaxed">
            Предлагаем выгодные тарифы на аренду,
            обслуживание и продажу биотуалетов
            в Новосибирске и области.
          </p>

        </motion.div>

        {/* PRICE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-[28px] p-7 md:p-8 shadow-lg hover:shadow-2xl transition duration-300"
          >

            <p className="text-green-600 font-semibold mb-4">
              Базовый
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              1500₽
            </h2>

            <div className="space-y-4 text-gray-700 mb-10 text-base md:text-lg">
              <p>✓ Аренда кабины</p>
              <p>✓ Доставка</p>
              <p>✓ Стандартное обслуживание</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white py-4 rounded-2xl font-semibold transition duration-300"
            >
              Оставить заявку
            </button>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-[28px] p-7 md:p-8 shadow-lg border-4 border-green-600 hover:shadow-2xl transition duration-300"
          >

            <p className="text-green-600 font-semibold mb-4">
              Популярный
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              3000₽
            </h2>

            <div className="space-y-4 text-gray-700 mb-10 text-base md:text-lg">
              <p>✓ Улучшенная кабина</p>
              <p>✓ Частое обслуживание</p>
              <p>✓ Подходит для мероприятий</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white py-4 rounded-2xl font-semibold transition duration-300"
            >
              Оставить заявку
            </button>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{
              y: -10,
              scale: 1.02
            }}
            className="bg-white rounded-[28px] p-7 md:p-8 shadow-lg hover:shadow-2xl transition duration-300"
          >

            <p className="text-green-600 font-semibold mb-4">
              Премиум
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-8 break-words">
              Индивидуально
            </h2>

            <div className="space-y-4 text-gray-700 mb-10 text-base md:text-lg">
              <p>✓ VIP кабины</p>
              <p>✓ Обслуживание мероприятий</p>
              <p>✓ Персональные условия</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-slate-900 hover:bg-slate-800 hover:scale-105 active:scale-95 text-white py-4 rounded-2xl font-semibold transition duration-300"
            >
              Связаться
            </button>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-5 md:px-6 pb-16 md:pb-24 overflow-hidden">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-green-600 rounded-[32px] md:rounded-[50px] p-8 md:p-24 text-white text-center shadow-2xl"
          >

            <h2 className="text-3xl sm:text-4xl md:text-7xl font-bold mb-8">
              Нужна консультация?
            </h2>

            <p className="text-base sm:text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Поможем подобрать подходящий тариф
              под ваш объект и бюджет.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-white text-green-700 hover:bg-gray-100 hover:scale-105 active:scale-95 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-base md:text-2xl font-bold transition duration-300"
            >
              Связаться с нами
            </button>

          </motion.div>

        </div>

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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="relative bg-white rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl"
            >

              {/* CLOSE BUTTON */}
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

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white mt-20 overflow-hidden">

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Экосервис
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              Аренда, продажа и обслуживание биотуалетов
              в Новосибирске и области.
            </p>

          </div>

          <div>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Навигация
            </h3>

            <div className="space-y-3 text-gray-400 text-base md:text-lg">

              <p><Link href="/">Главная</Link></p>
              <p><Link href="/services">Услуги</Link></p>
              <p><Link href="/prices">Цены</Link></p>
              <p><Link href="/contacts">Контакты</Link></p>

            </div>

          </div>

          <div>

            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Контакты
            </h3>

            <div className="space-y-3 text-gray-400 text-base md:text-lg">

              <p>+7 (383) 319-40-21</p>
              <p>Новосибирск</p>
              <p>Советская ул., 64/1</p>

            </div>

          </div>

        </div>

      </footer>

    </main>
  )
}