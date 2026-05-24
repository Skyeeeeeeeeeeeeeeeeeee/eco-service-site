'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  ShieldCheck,
  Thermometer,
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react"

export default function ServicesPage() {

  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900 overflow-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="block">

            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Экосервис
            </h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>

          </Link>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">

            <Link
              href="/"
              className="hover:opacity-60 transition"
            >
              Главная
            </Link>

            <Link
              href="/services"
              className="text-slate-950 hover:opacity-60 transition"
            >
              Услуги
            </Link>

            <Link
              href="/prices"
              className="hover:opacity-60 transition"
            >
              Цены
            </Link>

            <Link
              href="/contacts"
              className="hover:opacity-60 transition"
            >
              Контакты
            </Link>

          </nav>

          {/* BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="hidden md:flex bg-slate-950 hover:bg-black text-white px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02]"
          >
            Оставить заявку
          </button>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex flex-col gap-1.5"
          >

            <span className="w-6 h-0.5 bg-black rounded-full"></span>
            <span className="w-6 h-0.5 bg-black rounded-full"></span>
            <span className="w-6 h-0.5 bg-black rounded-full"></span>

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
            transition={{ duration: 0.35 }}
            className="fixed inset-0 bg-[#f5f5f5] z-50 flex flex-col"
          >

            {/* TOP */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-200">

              <div>

                <h2 className="text-2xl font-bold">
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
            <div className="flex flex-col px-6 py-10 gap-8 text-3xl font-bold tracking-tight">

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
                className="w-full bg-slate-950 text-white py-4 rounded-2xl text-lg font-semibold"
              >
                Оставить заявку
              </button>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f7f7] to-[#f5f5f5]" />

        <div className="max-w-7xl mx-auto px-5 md:px-6 pt-16 md:pt-24 pb-20 md:pb-28 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl"
          >

            <div className="inline-flex items-center gap-3 border border-gray-200 bg-white rounded-full px-5 py-3 mb-8">

              <div className="w-2 h-2 rounded-full bg-green-600" />

              <p className="text-sm tracking-[0.18em] uppercase text-gray-600 font-medium">
                Наши услуги
              </p>

            </div>

            <h1 className="text-[52px] sm:text-[74px] md:text-[110px] leading-[0.88] tracking-[-0.07em] font-bold text-slate-950 mb-10">

              Туалетные
              <br />

              кабины
              <br />

              под любые
              <br />

              задачи

            </h1>

            <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-3xl">

              Аренда и обслуживание
              санитарных кабин
              для стройки,
              мероприятий,
              бизнеса и частных объектов.

            </p>

          </motion.div>

        </div>

      </section>

      {/* CABINS */}
      <section className="pb-24 md:pb-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* STANDARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-[36px] border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop"
                  alt="Стандарт"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-4xl font-bold tracking-tight">
                    Стандарт
                  </h2>

                  <div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">

                    <ShieldCheck
                      size={24}
                      className="text-green-700"
                    />

                  </div>

                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">

                  Классическая туалетная кабина
                  для стройки,
                  мероприятий
                  и временных объектов.

                </p>

                <div className="space-y-4 mb-10">

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-green-600"
                    />

                    <p className="text-gray-700">
                      Регулярное обслуживание
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-green-600"
                    />

                    <p className="text-gray-700">
                      Доставка и установка
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-green-600"
                    />

                    <p className="text-gray-700">
                      Современная комплектация
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full bg-slate-950 hover:bg-black text-white py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Оставить заявку
                </button>

              </div>

            </motion.div>

            {/* LUX */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-slate-950 text-white rounded-[36px] overflow-hidden hover:shadow-2xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"
                  alt="Люкс"
                  className="w-full h-full object-cover opacity-90"
                />

                <div className="absolute inset-0 bg-black/25" />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-4xl font-bold tracking-tight">
                    Люкс
                  </h2>

                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">

                    <Sparkles
                      size={24}
                      className="text-white"
                    />

                  </div>

                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">

                  Премиальные кабины
                  для мероприятий,
                  фестивалей
                  и VIP-зон.

                </p>

                <div className="space-y-4 mb-10">

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-green-400"
                    />

                    <p className="text-gray-300">
                      Улучшенный интерьер
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-green-400"
                    />

                    <p className="text-gray-300">
                      Современный дизайн
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-green-400"
                    />

                    <p className="text-gray-300">
                      Максимальный комфорт
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full bg-white text-slate-950 hover:bg-gray-100 py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Оставить заявку
                </button>

              </div>

            </motion.div>

            {/* WARM */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-[36px] border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >

              {/* IMAGE */}
              <div className="relative h-[320px] overflow-hidden">

                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400&auto=format&fit=crop"
                  alt="Тёплый"
                  className="w-full h-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-8">

                <div className="flex items-center justify-between mb-6">

                  <h2 className="text-4xl font-bold tracking-tight">
                    Тёплый
                  </h2>

                  <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center">

                    <Thermometer
                      size={24}
                      className="text-orange-600"
                    />

                  </div>

                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">

                  Кабины с утеплением
                  для эксплуатации
                  в зимний период
                  и холодную погоду.

                </p>

                <div className="space-y-4 mb-10">

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-orange-500"
                    />

                    <p className="text-gray-700">
                      Подходит для зимы
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-orange-500"
                    />

                    <p className="text-gray-700">
                      Дополнительное утепление
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <Check
                      size={18}
                      className="text-orange-500"
                    />

                    <p className="text-gray-700">
                      Комфортное использование
                    </p>

                  </div>

                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full bg-slate-950 hover:bg-black text-white py-4 rounded-2xl font-semibold transition-all duration-300"
                >
                  Оставить заявку
                </button>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24 md:pb-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="bg-slate-950 rounded-[42px] md:rounded-[56px] p-8 md:p-24 text-white text-center">

            <p className="uppercase tracking-[0.3em] text-green-300 text-sm mb-6">
              Экосервис
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] mb-8">

              Подберём
              <br />

              кабину
              <br />

              под ваш объект

            </h2>

            <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">

              Поможем выбрать
              оптимальное решение
              под ваши задачи,
              сроки и бюджет.

            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="bg-white text-slate-950 hover:bg-gray-100 px-8 md:px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
            >
              Оставить заявку
            </button>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            {/* LEFT */}
            <div>

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">
                Экосервис
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed max-w-md">

                Аренда,
                продажа и обслуживание
                биотуалетов
                в Новосибирске и области.

              </p>

            </div>

            {/* NAV */}
            <div>

              <h3 className="text-xl font-bold mb-6">
                Навигация
              </h3>

              <div className="flex flex-col gap-4 text-gray-600 text-lg">

                <Link href="/" className="hover:text-black transition">
                  Главная
                </Link>

                <Link href="/services" className="hover:text-black transition">
                  Услуги
                </Link>

                <Link href="/prices" className="hover:text-black transition">
                  Цены
                </Link>

                <Link href="/contacts" className="hover:text-black transition">
                  Контакты
                </Link>

              </div>

            </div>

            {/* CONTACTS */}
            <div>

              <h3 className="text-xl font-bold mb-6">
                Контакты
              </h3>

              <div className="flex flex-col gap-4 text-gray-600 text-lg">

                <p>+7 (383) 319-40-21</p>

                <p>Новосибирск</p>

                <p>Советская ул., 64/1</p>

              </div>

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
                scale: 0.85,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 0.85,
                opacity: 0
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="relative bg-white rounded-[36px] p-6 md:p-8 w-full max-w-md shadow-2xl"
            >

              {/* CLOSE */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-3xl text-gray-400 hover:text-black transition"
              >
                ×
              </button>

              <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
                Экосервис
              </p>

              <h2 className="text-3xl font-bold tracking-tight mb-8">
                Оставить заявку
              </h2>

              <div className="space-y-4">

                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-[#f5f5f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-slate-950 transition"
                />

                <input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="w-full bg-[#f5f5f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-slate-950 transition"
                />

                <textarea
                  placeholder="Комментарий"
                  className="w-full bg-[#f5f5f5] border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-slate-950 transition min-h-[140px]"
                />

                <button
                  className="w-full bg-slate-950 hover:bg-black text-white py-4 rounded-2xl font-semibold transition-all duration-300"
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