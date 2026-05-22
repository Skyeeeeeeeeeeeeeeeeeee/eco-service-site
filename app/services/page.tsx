'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

export default function ServicesPage() {

  const [isOpen, setIsOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="block">

            <h2 className="text-2xl md:text-3xl font-bold text-green-600 hover:scale-105 transition">
              Экосервис
            </h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>

          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10">

            <Link
              href="/"
              className="font-medium hover:text-green-600 hover:scale-105 transition"
            >
              Главная
            </Link>

            <Link
              href="/services"
              className="text-green-600 font-semibold hover:scale-105 transition"
            >
              Услуги
            </Link>

            <Link
              href="/prices"
              className="font-medium hover:text-green-600 hover:scale-105 transition"
            >
              Цены
            </Link>

            <Link
              href="/contacts"
              className="font-medium hover:text-green-600 hover:scale-105 transition"
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
      <section className="py-16 md:py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <p className="text-green-600 font-semibold mb-5 text-lg">
              Полный спектр услуг
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] mb-8">
              Наши
              услуги
            </h1>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              Предоставляем аренду, продажу и обслуживание
              биотуалетов для строительных объектов,
              мероприятий и бизнеса.
            </p>

          </motion.div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {[
              {
                title: "Аренда биотуалетов",
                desc: "Краткосрочная и долгосрочная аренда кабин для строительных площадок, мероприятий и частных объектов."
              },
              {
                title: "Продажа кабин",
                desc: "Продажа новых и обслуженных туалетных кабин для бизнеса и частного использования."
              },
              {
                title: "Сервисное обслуживание",
                desc: "Регулярная очистка, дезинфекция и техническое обслуживание кабин."
              },
              {
                title: "Доставка",
                desc: "Быстрая доставка и установка кабин по Новосибирску и области."
              },
              {
                title: "Откачка отходов",
                desc: "Профессиональная откачка и утилизация отходов специализированной техникой."
              },
              {
                title: "Обслуживание мероприятий",
                desc: "Комплексное обеспечение санитарных зон для концертов, фестивалей и массовых мероприятий."
              }
            ].map((service, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02
                }}
                className="bg-white rounded-[40px] p-8 md:p-10 shadow-sm hover:shadow-2xl transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-8">
                  
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {service.title}
                </h2>

                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {service.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ADVANTAGES */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-[40px] md:rounded-[50px] p-10 md:p-20 text-white"
          >

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              <div>

                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                  1000+
                </h3>

                <p className="text-lg md:text-xl text-gray-300">
                  Выполненных заказов
                </p>

              </div>

              <div>

                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                  24/7
                </h3>

                <p className="text-lg md:text-xl text-gray-300">
                  Поддержка клиентов
                </p>

              </div>

              <div>

                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-green-400">
                  25+
                </h3>

                <p className="text-lg md:text-xl text-gray-300">
                  Лет опыта работы
                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-green-600 rounded-[40px] md:rounded-[50px] p-10 md:p-24 text-white text-center shadow-2xl"
          >

            <h2 className="text-4xl md:text-7xl font-bold mb-8">
              Нужна консультация?
            </h2>

            <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Поможем подобрать подходящее решение
              под ваш объект и бюджет.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-white text-green-700 hover:bg-gray-100 hover:scale-105 active:scale-95 px-8 md:px-10 py-4 md:py-5 rounded-2xl text-xl md:text-2xl font-bold transition duration-300"
            >
              Связаться с нами
            </button>

          </motion.div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Экосервис
              </h2>

              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Аренда и продажа биотуалетов
                в Новосибирске и области.
              </p>

            </div>

            <div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Навигация
              </h3>

              <div className="flex flex-col gap-4 text-gray-300 text-lg">

                <Link href="/">Главная</Link>
                <Link href="/services">Услуги</Link>
                <Link href="/prices">Цены</Link>
                <Link href="/contacts">Контакты</Link>

              </div>

            </div>

            <div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Контакты
              </h3>

              <div className="flex flex-col gap-4 text-gray-300 text-lg">

                <p> +7 (383) 319-40-21</p>
                <p> Советская ул., 64/1</p>
                <p> Пн–Пт: 9:00–17:00</p>

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

              {/* CLOSE */}
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