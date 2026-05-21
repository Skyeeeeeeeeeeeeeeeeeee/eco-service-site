'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false) // popup
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
            <h2 className="text-2xl md:text-3xl font-bold text-green-600 hover:scale-105 transition">Экосервис</h2>
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

      {/* ==================== ОСНОВНОЙ КОНТЕНТ САЙТА ==================== */}

      {/* Hero Section */}
      <section className="hero py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Биотуалеты для стройки, мероприятий и бизнеса</h1>
        <p className="text-lg md:text-xl mb-6">Мы предоставляем качественные санитарные решения по всей Новосибирской области.</p>
        <button onClick={() => setIsOpen(true)} className="bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition">Оставить заявку</button>
      </section>

      {/* Services Section */}
      <section className="services py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Наши услуги</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Аренда биотуалетов</h3>
            <p>Для строительства, фестивалей и мероприятий.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Продажа биотуалетов</h3>
            <p>Вы можете приобрести устройства для собственного бизнеса.</p>
          </div>
          <div className="p-6 border rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Обслуживание</h3>
            <p>Регулярная чистка и сервисное обслуживание.</p>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section className="prices py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Цены</h2>
        <p className="mb-4">Аренда от 1500 ₽ / месяц</p>
        <p>Продажа от 8000 ₽</p>
      </section>

      {/* Contacts Section */}
      <section className="contacts py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-4">Контакты</h2>
        <p>Адрес: Новосибирск, Советская ул., 64/1 (офис 553, этаж 5)</p>
        <p>Телефон: +7 (383) 319-40-21</p>
        <p>Время работы: Пн-Пт, 9:00–17:00</p>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} exit={{ opacity:0 }} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl max-w-md w-full">
              <h3 className="text-xl font-bold mb-4">Оставить заявку</h3>
              <input type="text" placeholder="Имя" className="w-full mb-2 p-2 border rounded" />
              <input type="text" placeholder="Телефон" className="w-full mb-2 p-2 border rounded" />
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" onClick={() => setIsOpen(false)}>Отправить</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 bg-gray-200 text-center">
        <p>© 2026 Экосервис Новосибирск. Все права защищены.</p>
      </footer>

    </main>
  )
}