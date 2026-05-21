'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
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

      {/* === ВСТАВКА ИСХОДНОГО КОДА 417 СТРОК === */}
      "+ require('fs').readFileSync('/mnt/data/Вставленный текст(2).txt','utf-8') +"

    </main>
  )
}
