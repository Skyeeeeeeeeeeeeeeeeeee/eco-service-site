'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function PricesPage() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900">

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

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-10">
            <Link href="/" className="hover:text-green-600 transition">
              Главная
            </Link>

            <Link href="/services" className="hover:text-green-600 transition">
              Услуги
            </Link>

            <Link href="/prices" className="text-green-600 font-semibold">
              Цены
            </Link>

            <Link href="/contacts" className="hover:text-green-600 transition">
              Контакты
            </Link>
          </nav>

          {/* BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-6 py-3 rounded-2xl font-medium transition duration-300"
          >
            Заказать
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Цены на услуги
          </h1>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mb-16">
            Предлагаем выгодные тарифы на аренду, обслуживание и продажу
            биотуалетов в Новосибирске и области.
          </p>

        </motion.div>

        {/* PRICE CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >

            <p className="text-green-600 font-semibold mb-4">
              Базовый
            </p>

            <h2 className="text-5xl font-bold mb-8">
              1500₽
            </h2>

            <div className="space-y-4 text-gray-700 mb-10">
              <p>✓ Аренда кабины</p>
              <p>✓ Доставка</p>
              <p>✓ Стандартное обслуживание</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
            >
              Оставить заявку
            </button>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg border-4 border-green-600"
          >

            <p className="text-green-600 font-semibold mb-4">
              Популярный
            </p>

            <h2 className="text-5xl font-bold mb-8">
              3000₽
            </h2>

            <div className="space-y-4 text-gray-700 mb-10">
              <p>✓ Улучшенная кабина</p>
              <p>✓ Частое обслуживание</p>
              <p>✓ Подходит для мероприятий</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl font-semibold transition"
            >
              Оставить заявку
            </button>

          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >

            <p className="text-green-600 font-semibold mb-4">
              Премиум
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-8 break-words">
              Индивидуально
            </h2>

            <div className="space-y-4 text-gray-700 mb-10">
              <p>✓ VIP кабины</p>
              <p>✓ Обслуживание мероприятий</p>
              <p>✓ Персональные условия</p>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-2xl font-semibold transition"
            >
              Связаться
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
              transition={{ duration: 0.25 }}
              className="relative bg-white rounded-3xl p-8 w-full max-w-md shadow-2xl"
            >

              {/* CLOSE BUTTON */}
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
      <footer className="bg-slate-950 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-14 grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              Экосервис
            </h2>

            <p className="text-gray-400">
              Аренда, продажа и обслуживание биотуалетов
              в Новосибирске и области.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Навигация
            </h3>

            <div className="space-y-2 text-gray-400">
              <p><Link href="/">Главная</Link></p>
              <p><Link href="/services">Услуги</Link></p>
              <p><Link href="/prices">Цены</Link></p>
              <p><Link href="/contacts">Контакты</Link></p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Контакты
            </h3>

            <div className="space-y-2 text-gray-400">
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