"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <a href="/" className="block">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 hover:scale-105 transition">
              Экосервис
            </h2>
            <p className="text-gray-500 text-sm">Новосибирск</p>
          </a>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <nav className="hidden md:flex items-center gap-10">
              <Link href="/" className="text-green-600 font-semibold hover:scale-105 transition">Главная</Link>
              <Link href="/services" className="font-medium hover:text-green-600 hover:scale-105 transition">Услуги</Link>
              <Link href="/prices" className="font-medium hover:text-green-600 hover:scale-105 transition">Цены</Link>
              <Link href="/contacts" className="font-medium hover:text-green-600 hover:scale-105 transition">Контакты</Link>
            </nav>
          )}

          {/* DESKTOP BUTTON */}
          {!isMobile && (
            <button
              onClick={() => setIsOpen(true)}
              className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-6 py-3 rounded-2xl font-medium transition duration-300"
            >
              Заказать
            </button>
          )}

          {/* MOBILE BURGER */}
          {isMobile && (
            <div>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <span className="sr-only">Открыть меню</span>
                <div className="space-y-1">
                  <span className="block w-6 h-0.5 bg-slate-900"></span>
                  <span className="block w-6 h-0.5 bg-slate-900"></span>
                  <span className="block w-6 h-0.5 bg-slate-900"></span>
                </div>
              </button>
            </div>
          )}
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileMenuOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4 z-50"
            >
              <Link href="/" className="text-lg font-medium text-green-600" onClick={() => setMobileMenuOpen(false)}>Главная</Link>
              <Link href="/services" className="text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>Услуги</Link>
              <Link href="/prices" className="text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>Цены</Link>
              <Link href="/contacts" className="text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
              <button
                onClick={() => { setIsOpen(true); setMobileMenuOpen(false) }}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Заказать
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO */}
      <section className="py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-green-600 font-semibold mb-5 text-lg">Аренда и продажа биотуалетов</p>
              <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl">
                Биотуалеты для стройки, мероприятий и бизнеса
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl">
                ООО «Экосервис Новосибирск» предоставляет аренду, обслуживание и продажу туалетных кабин по Новосибирску и области.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-14">
                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-8 py-5 rounded-2xl text-lg font-semibold transition duration-300"
                >
                  Оставить заявку
                </button>
                <Link href="/services">
                  <button className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white hover:scale-105 active:scale-95 px-8 py-5 rounded-2xl text-lg font-semibold transition text-center">
                    Смотреть услуги
                  </button>
                </Link>
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="bg-green-100 rounded-[50px] min-h-[500px] md:min-h-[600px] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-50 opacity-60" />
              <p className="text-green-700 text-3xl md:text-5xl font-bold relative z-10 text-center px-6">
                Фото биотуалета
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
        <p className="mb-8 text-gray-700">
          ООО «Экосервис Новосибирск» предоставляет полный спектр услуг по аренде, продаже и обслуживанию биотуалетов.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Аренда биотуалетов</h3>
            <p>Краткосрочная и долгосрочная аренда кабин для строительных площадок, мероприятий и частных объектов.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Продажа кабин</h3>
            <p>Продажа новых и обслуженных туалетных кабин для бизнеса и частного использования.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Обслуживание</h3>
            <p>Очистка, дезинфекция и регулярное обслуживание кабин.</p>
          </div>
        </div>
      </section>

      {/* Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[40px] w-full max-w-2xl p-8 md:p-12 relative shadow-2xl"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 text-3xl text-gray-400 hover:text-black transition"
              >
                ×
              </button>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Оставить заявку</h2>
              <form className="flex flex-col space-y-4">
                <input type="text" placeholder="Имя" className="border p-2 rounded"/>
                <input type="tel" placeholder="Телефон" className="border p-2 rounded"/>
                <textarea placeholder="Комментарий" className="border p-2 rounded"/>
                <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Отправить
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-5xl font-bold mb-6">Экосервис</h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                Аренда и продажа биотуалетов в Новосибирске и области.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Навигация</h3>
              <div className="flex flex-col gap-4 text-gray-300 text-lg">
                <Link href="/">Главная</Link>
                <Link href="/services">Услуги</Link>
                <Link href="/prices">Цены</Link>
                <Link href="/contacts">Контакты</Link>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Контакты</h3>
              <div className="flex flex-col gap-4 text-gray-300 text-lg">
                <p>📞 +7 (383) 319-40-21</p>
                <p>📍 Советская ул., 64/1</p>
                <p>🕒 Пн–Пт: 9:00–17:00</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}