"use client"

import { motion } from "framer-motion"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 backdrop-blur">

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
              className="text-green-600 font-semibold transition hover:scale-105"
            >
              Главная
            </a>

            <a
              href="/services"
              className="font-medium hover:text-green-600 transition hover:scale-105"
            >
              Услуги
            </a>

            <a
              href="/prices"
              className="font-medium hover:text-green-600 transition hover:scale-105"
            >
              Цены
            </a>

            <a
              href="/contacts"
              className="font-medium hover:text-green-600 transition hover:scale-105"
            >
              Контакты
            </a>

          </nav>

          {/* BUTTON */}
          <a
            href="/contacts"
            className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-6 py-3 rounded-2xl font-medium transition duration-300"
          >
            Заказать
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="py-16 md:py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <p className="text-green-600 font-semibold mb-5 text-lg">
                Аренда и продажа биотуалетов
              </p>

              <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8">
                Биотуалеты
                для стройки,
                мероприятий
                и бизнеса
              </h1>

              <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-2xl">
                ООО «Экосервис Новосибирск»
                предоставляет аренду,
                обслуживание и продажу туалетных кабин
                по Новосибирску и области.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 mb-14">

                <a
                  href="/contacts"
                  className="bg-green-600 hover:bg-green-700 hover:scale-105 active:scale-95 text-white px-8 py-5 rounded-2xl text-lg font-semibold transition duration-300 text-center"
                >
                  Оставить заявку
                </a>

                <a
                  href="/services"
                  className="border-2 border-slate-900 hover:bg-slate-900 hover:text-white hover:scale-105 active:scale-95 px-8 py-5 rounded-2xl text-lg font-semibold transition duration-300 text-center"
                >
                  Смотреть услуги
                </a>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                {[
                  ["5+", "лет опыта"],
                  ["1000+", "обслуженных объектов"],
                  ["24/7", "поддержка клиентов"],
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white rounded-3xl p-6 shadow-sm hover:-translate-y-2 hover:shadow-xl transition duration-300"
                  >
                    <h3 className="text-4xl font-bold text-green-600 mb-2">
                      {item[0]}
                    </h3>

                    <p className="text-gray-600">
                      {item[1]}
                    </p>

                  </motion.div>
                ))}

              </div>

            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-green-100 rounded-[50px] min-h-[600px] flex items-center justify-center relative overflow-hidden"
            >

              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-green-50 opacity-60" />

              <p className="text-green-700 text-5xl font-bold relative z-10">
                Фото биотуалета
              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16"
          >

            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Наши услуги
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
              Предоставляем полный спектр услуг
              по аренде, продаже и обслуживанию
              биотуалетов.
            </p>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              [
                "Аренда биотуалетов",
                "Краткосрочная и долгосрочная аренда кабин для стройплощадок, мероприятий и частных объектов."
              ],
              [
                "Продажа кабин",
                "Продажа новых и обслуженных туалетных кабин для бизнеса и частного использования."
              ],
              [
                "Обслуживание",
                "Очистка, дезинфекция и регулярное техническое обслуживание кабин."
              ]
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-[40px] p-10 shadow-sm hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >

                <h3 className="text-4xl font-bold mb-6">
                  {service[0]}
                </h3>

                <p className="text-gray-600 text-xl leading-relaxed">
                  {service[1]}
                </p>

              </motion.div>
            ))}

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
              Нужен биотуалет
              для объекта?
            </h2>

            <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Оставьте заявку —
              мы быстро подберём подходящее решение
              для вашего объекта.
            </p>

            <a
              href="/contacts"
              className="inline-block bg-white text-green-700 hover:bg-gray-100 hover:scale-105 active:scale-95 px-10 py-5 rounded-2xl text-2xl font-bold transition duration-300"
            >
              Оставить заявку
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