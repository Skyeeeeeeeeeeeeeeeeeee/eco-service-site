"use client"

import { motion } from "framer-motion"

export default function ContactsPage() {
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

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>

          </a>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="/"
              className="font-medium hover:text-green-600 hover:scale-105 transition"
            >
              Главная
            </a>

            <a
              href="/services"
              className="font-medium hover:text-green-600 hover:scale-105 transition"
            >
              Услуги
            </a>

            <a
              href="/prices"
              className="font-medium hover:text-green-600 hover:scale-105 transition"
            >
              Цены
            </a>

            <a
              href="/contacts"
              className="text-green-600 font-semibold hover:scale-105 transition"
            >
              Контакты
            </a>

          </nav>

          {/* BUTTON */}
          <a
            href="/"
            className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-6 py-3 rounded-2xl font-medium transition duration-300"
          >
            На главную
          </a>

        </div>

      </header>

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
              Контактная информация
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] mb-8">
              Свяжитесь
              с нами
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed">
              Мы всегда готовы ответить на ваши вопросы,
              подобрать подходящее решение
              и проконсультировать по услугам.
            </p>

          </motion.div>

        </div>

      </section>

      {/* CONTACTS */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              {/* PHONE */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-8">
                  📞
                </div>

                <p className="text-gray-500 mb-3 text-lg">
                  Телефон
                </p>

                <a
                  href="tel:+73833194021"
                  className="text-3xl font-bold hover:text-green-600 transition"
                >
                  +7 (383) 319-40-21
                </a>

              </div>

              {/* ADDRESS */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-8">
                  📍
                </div>

                <p className="text-gray-500 mb-3 text-lg">
                  Адрес
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  Советская ул., 64/1
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed">
                  Новосибирск
                  <br />
                  офис 553, этаж 5
                </p>

              </div>

              {/* TIME */}
              <div className="bg-white rounded-[40px] p-10 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition duration-300">

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center text-3xl mb-8">
                  🕒
                </div>

                <p className="text-gray-500 mb-3 text-lg">
                  Время работы
                </p>

                <h2 className="text-3xl font-bold mb-4">
                  Пн — Пт
                </h2>

                <p className="text-xl text-gray-600">
                  с 9:00 до 17:00
                </p>

              </div>

            </motion.div>

            {/* MAP */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-300"
            >

              <div className="relative w-full h-[700px]">

                <iframe
                  src="https://yandex.ru/map-widget/v1/?text=Новосибирск%20Советская%2064%2F1&z=18"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0"
                />

              </div>

            </motion.div>

          </div>

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
            className="bg-green-600 rounded-[50px] p-12 md:p-24 text-white text-center shadow-2xl"
          >

            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Остались вопросы?
            </h2>

            <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Свяжитесь с нами —
              поможем подобрать оптимальное решение
              для вашего объекта.
            </p>

            <a
              href="tel:+73833194021"
              className="inline-block bg-white text-green-700 hover:bg-gray-100 hover:scale-105 active:scale-95 px-10 py-5 rounded-2xl text-2xl font-bold transition duration-300"
            >
              Позвонить
            </a>

          </motion.div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

            <div>

              <h2 className="text-5xl font-bold mb-6">
                Экосервис
              </h2>

              <p className="text-gray-400 text-xl leading-relaxed">
                Аренда и продажа биотуалетов
                в Новосибирске и области.
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Навигация
              </h3>

              <div className="flex flex-col gap-4 text-gray-300 text-lg">

                <a href="/">Главная</a>
                <a href="/services">Услуги</a>
                <a href="/prices">Цены</a>
                <a href="/contacts">Контакты</a>

              </div>

            </div>

            <div>

              <h3 className="text-3xl font-bold mb-6">
                Контакты
              </h3>

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