'use client'

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  ShieldCheck,
  Truck,
  Sparkles
} from "lucide-react"

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900 overflow-hidden relative">

      {/* GRAIN */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 border-b border-white/40">

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
            className="hidden md:flex bg-slate-950 hover:bg-black text-white px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-xl"
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

        {/* BLURS */}
        <div className="absolute top-[-250px] right-[-200px] w-[600px] h-[600px] bg-green-200 rounded-full blur-3xl opacity-30" />

        <div className="absolute bottom-[-250px] left-[-200px] w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-30" />

        <div className="max-w-7xl mx-auto px-5 md:px-6 pt-16 md:pt-28 pb-20 md:pb-32 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* LABEL */}
              <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-xl border border-white rounded-full px-5 py-3 shadow-lg mb-8">

                <div className="w-2 h-2 rounded-full bg-green-600" />

                <p className="text-sm tracking-[0.2em] font-medium text-gray-600 uppercase">
                  Экосервис Новосибирск
                </p>

              </div>

              {/* TITLE */}
              <h1 className="text-[46px] sm:text-[62px] md:text-[88px] leading-[0.92] tracking-[-0.05em] font-bold text-slate-950 mb-8">

                Аренда
                <br />

                современных
                <br />

                биотуалетов

              </h1>

              {/* DESCRIPTION */}
              <p className="text-gray-600 text-lg md:text-2xl leading-relaxed max-w-2xl mb-12">

                Решения для стройки,
                мероприятий и бизнеса.
                Доставка, обслуживание
                и поддержка по Новосибирску
                и области.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4 mb-16">

                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-slate-950 hover:bg-black text-white px-8 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-2xl"
                >
                  Оставить заявку
                </button>

                <Link
                  href="/services"
                  className="bg-white/80 backdrop-blur-xl border border-white hover:border-slate-300 px-8 py-5 rounded-2xl text-lg font-medium transition-all duration-300 text-center shadow-lg"
                >
                  Смотреть услуги
                </Link>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[28px] p-6 shadow-xl">

                  <h3 className="text-4xl font-bold mb-2">
                    5+
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    лет опыта
                  </p>

                </div>

                <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[28px] p-6 shadow-xl">

                  <h3 className="text-4xl font-bold mb-2">
                    1000+
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    объектов обслужено
                  </p>

                </div>

                <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[28px] p-6 shadow-xl">

                  <h3 className="text-4xl font-bold mb-2">
                    24/7
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    поддержка клиентов
                  </p>

                </div>

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div className="relative rounded-[42px] overflow-hidden shadow-2xl">

                <img
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
                  alt="Биотуалеты"
                  className="w-full h-[420px] sm:h-[520px] md:h-[760px] object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* FLOATING CARD */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-2xl border border-white rounded-[28px] p-5 shadow-2xl">

                  <div className="flex items-center justify-between gap-5">

                    <div>

                      <p className="text-sm text-gray-500 mb-1">
                        Работаем по Новосибирску
                      </p>

                      <h3 className="text-xl font-bold">
                        Доставка и обслуживание
                      </h3>

                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center shadow-xl">
                      <Truck size={22} />
                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="pb-20 md:pb-28">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-2xl border border-white rounded-[36px] p-8 md:p-10 shadow-xl"
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
                Регулярное обслуживание
                и качественные кабины
                для любых задач.
              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-slate-950 text-white rounded-[36px] p-8 md:p-10 shadow-2xl"
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

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white/70 backdrop-blur-2xl border border-white rounded-[36px] p-8 md:p-10 shadow-xl"
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
                Современное обслуживание,
                дезинфекция
                и контроль качества.
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <div className="max-w-4xl mb-16">

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white/70 backdrop-blur-2xl border border-white rounded-[36px] p-8 md:p-10 shadow-xl transition-all duration-500"
            >

              <div className="w-14 h-14 rounded-2xl bg-green-100 mb-10" />

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

            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-slate-950 text-white rounded-[36px] p-8 md:p-10 shadow-2xl transition-all duration-500"
            >

              <div className="w-14 h-14 rounded-2xl bg-white/10 mb-10" />

              <h3 className="text-3xl font-bold tracking-tight mb-6">
                Обслуживание
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">

                Регулярная очистка,
                дезинфекция
                и технический сервис.

              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white/70 backdrop-blur-2xl border border-white rounded-[36px] p-8 md:p-10 shadow-xl transition-all duration-500"
            >

              <div className="w-14 h-14 rounded-2xl bg-green-100 mb-10" />

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
      <section className="pb-24 md:pb-32">

        <div className="max-w-7xl mx-auto px-5 md:px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-slate-950 rounded-[42px] md:rounded-[56px] p-8 md:p-24 text-white shadow-2xl"
          >

            <div className="absolute top-[-120px] right-[-120px] w-[320px] h-[320px] bg-green-500 rounded-full blur-3xl opacity-20" />

            <div className="absolute bottom-[-120px] left-[-120px] w-[320px] h-[320px] bg-emerald-400 rounded-full blur-3xl opacity-20" />

            <div className="relative z-10 text-center">

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
                className="bg-white text-slate-950 hover:bg-gray-100 px-8 md:px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-2xl"
              >
                Оставить заявку
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white/70 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto px-5 md:px-6 py-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

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

            <div>

              <h3 className="text-xl font-bold mb-6">
                Контакты
              </h3>

              <div className="flex flex-col gap-4 text-gray-600 text-lg">

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
                  className="w-full bg-slate-950 hover:bg-black text-white py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.01]"
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