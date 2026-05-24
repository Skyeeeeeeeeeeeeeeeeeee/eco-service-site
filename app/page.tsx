'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  ShieldCheck,
  Truck,
 Sparkles,
  ArrowRight
} from "lucide-react"

export default function HomePage() {

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

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium">

            <Link
              href="/"
              className="text-slate-950 hover:opacity-60 transition"
            >
              Главная
            </Link>

            <Link
              href="/services"
              className="hover:opacity-60 transition"
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

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f7f7f7] to-[#f5f5f5]" />

        <div className="max-w-7xl mx-auto px-5 md:px-6 pt-12 md:pt-20 pb-24 md:pb-36 relative z-10">

          {/* LABEL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >

            <div className="inline-flex items-center gap-3 border border-gray-200 bg-white rounded-full px-5 py-3">

              <div className="w-2 h-2 rounded-full bg-green-600" />

              <p className="text-sm tracking-[0.18em] uppercase text-gray-600 font-medium">
                Экосервис • Новосибирск
              </p>

            </div>

          </motion.div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-[0.95fr_1.05fr] gap-12 items-end">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* TITLE */}
              <h1 className="text-[52px] sm:text-[74px] md:text-[110px] leading-[0.88] tracking-[-0.07em] font-bold text-slate-950 mb-10">

                Аренда
                <br />

                биотуалетов
                <br />

                нового
                <br />

                поколения

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed max-w-2xl mb-14">

                Доставка, обслуживание
                и аренда современных
                санитарных кабин
                для стройки,
                мероприятий и бизнеса.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">

                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-slate-950 hover:bg-black text-white px-8 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]"
                >
                  Оставить заявку
                </button>

                <Link
                  href="/services"
                  className="border border-gray-300 hover:border-black bg-white px-8 py-5 rounded-2xl text-lg font-medium transition-all duration-300 text-center"
                >
                  Смотреть услуги
                </Link>

              </div>

              {/* STATS */}
              <div className="flex flex-wrap gap-10">

                <div>

                  <h3 className="text-5xl font-bold tracking-tight mb-2">
                    5+
                  </h3>

                  <p className="text-gray-500 text-lg">
                    лет опыта
                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-bold tracking-tight mb-2">
                    1000+
                  </h3>

                  <p className="text-gray-500 text-lg">
                    объектов
                  </p>

                </div>

                <div>

                  <h3 className="text-5xl font-bold tracking-tight mb-2">
                    24/7
                  </h3>

                  <p className="text-gray-500 text-lg">
                    поддержка
                  </p>

                </div>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-[36px]">

                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1800&auto=format&fit=crop"
                  alt="Экосервис"
                  className="w-full h-[520px] sm:h-[720px] md:h-[920px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                {/* FLOATING CARD */}
                <motion.div
                  animate={{
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute left-6 right-6 bottom-6"
                >

                  <div className="bg-white rounded-[28px] px-6 py-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                    <div className="flex items-center justify-between gap-6">

                      <div>

                        <p className="text-sm text-gray-500 mb-1">
                          Полный сервис
                        </p>

                        <h3 className="text-2xl font-bold tracking-tight">
                          Доставка и обслуживание
                        </h3>

                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center">

                        <ArrowRight
                          size={24}
                          className="text-white"
                        />

                      </div>

                    </div>

                  </div>

                </motion.div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="pb-24 md:pb-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-8">

                <ShieldCheck
                  size={28}
                  className="text-green-700"
                />

              </div>

              <h3 className="text-3xl font-bold tracking-tight mb-5">
                Надёжность
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Современные кабины
                и регулярное обслуживание
                для любых объектов.
              </p>

            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-slate-950 text-white rounded-[32px] p-8 md:p-10 hover:shadow-2xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8">

                <Truck
                  size={28}
                  className="text-white"
                />

              </div>

              <h3 className="text-3xl font-bold tracking-tight mb-5">
                Быстрая доставка
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Доставка и установка
                по Новосибирску
                и области.
              </p>

            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-white rounded-[32px] p-8 md:p-10 border border-gray-200 hover:shadow-xl transition-all duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-8">

                <Sparkles
                  size={28}
                  className="text-green-700"
                />

              </div>

              <h3 className="text-3xl font-bold tracking-tight mb-5">
                Чистота
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Дезинфекция,
                контроль качества
                и постоянный сервис.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32 bg-white">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          {/* TOP */}
          <div className="max-w-4xl mb-20">

            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-5">
              Наши услуги
            </p>

            <h2 className="text-4xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] mb-8">

              Полный сервис
              <br />

              для вашего объекта

            </h2>

            <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-3xl">

              Предоставляем аренду,
              продажу и обслуживание
              биотуалетов для любых задач.

            </p>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="border border-gray-200 rounded-[32px] p-8 md:p-10 hover:shadow-xl transition-all duration-300"
            >

              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">
                01
              </p>

              <h3 className="text-3xl font-bold tracking-tight mb-6">

                Аренда
                <br />

                кабин

              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">

                Краткосрочная
                и долгосрочная аренда
                биотуалетов.

              </p>

            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-slate-950 text-white rounded-[32px] p-8 md:p-10 hover:shadow-2xl transition-all duration-300"
            >

              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-8">
                02
              </p>

              <h3 className="text-3xl font-bold tracking-tight mb-6">
                Обслуживание
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">

                Регулярная очистка,
                дезинфекция
                и технический сервис.

              </p>

            </motion.div>

            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="border border-gray-200 rounded-[32px] p-8 md:p-10 hover:shadow-xl transition-all duration-300"
            >

              <p className="text-sm uppercase tracking-[0.2em] text-gray-400 mb-8">
                03
              </p>

              <h3 className="text-3xl font-bold tracking-tight mb-6">

                Продажа
                <br />

                кабин

              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">

                Продажа новых
                и обслуженных
                биотуалетов.

              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="bg-slate-950 rounded-[42px] md:rounded-[56px] p-8 md:p-24 text-white text-center">

            <p className="uppercase tracking-[0.3em] text-green-300 text-sm mb-6">
              Экосервис
            </p>

            <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] mb-8">

              Нужны
              <br />

              биотуалеты?

            </h2>

            <p className="text-gray-300 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">

              Подберём оптимальное решение
              под ваш объект,
              мероприятие или бизнес.

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