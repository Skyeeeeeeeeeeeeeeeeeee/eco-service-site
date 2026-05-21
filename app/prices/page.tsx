"use client"

import { motion } from "framer-motion"

export default function PricesPage() {
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
              className="text-green-600 font-semibold hover:scale-105 transition"
            >
              Цены
            </a>

            <a
              href="/contacts"
              className="font-medium hover:text-green-600 hover:scale-105 transition"
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

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >

            <p className="text-green-600 font-semibold mb-5 text-lg">
              Стоимость услуг
            </p>

            <h1 className="text-4xl md:text-7xl font-bold leading-[1.05] mb-8">
              Цены
              и тарифы
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed">
              Прозрачные цены без скрытых платежей.
              Подберём подходящий вариант
              под ваш объект и бюджет.
            </p>

          </motion.div>

        </div>

      </section>

      {/* PRICE CARDS */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* CARD 1 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 shadow-sm hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              <p className="text-green-600 font-semibold mb-4">
                Базовый
              </p>

              <h2 className="text-5xl font-bold mb-8">
                от 1500₽
              </h2>

              <div className="space-y-5 text-lg text-gray-600 mb-10">

                <p>✓ Аренда кабины</p>
                <p>✓ Доставка</p>
                <p>✓ Базовое обслуживание</p>
                <p>✓ Подходит для частных объектов</p>

              </div>

              <a
                href="/contacts"
                className="block text-center bg-slate-900 hover:bg-black text-white py-5 rounded-2xl text-lg font-semibold transition"
              >
                Оставить заявку
              </a>

            </motion.div>

            {/* CARD 2 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-green-600 rounded-[40px] p-10 shadow-2xl hover:-translate-y-3 transition duration-300 text-white relative overflow-hidden"
            >

              {/* POPULAR */}
              <div className="absolute top-5 right-5 bg-white text-green-700 px-4 py-2 rounded-full text-sm font-bold">
                Популярный
              </div>

              <p className="text-green-100 font-semibold mb-4">
                Стандарт
              </p>

              <h2 className="text-5xl font-bold mb-8">
                от 3500₽
              </h2>

              <div className="space-y-5 text-lg text-green-50 mb-10">

                <p>✓ Аренда нескольких кабин</p>
                <p>✓ Регулярное обслуживание</p>
                <p>✓ Доставка и установка</p>
                <p>✓ Для стройплощадок и бизнеса</p>

              </div>

              <a
                href="/contacts"
                className="block text-center bg-white text-green-700 hover:bg-gray-100 py-5 rounded-2xl text-lg font-bold transition"
              >
                Оставить заявку
              </a>

            </motion.div>

            {/* CARD 3 */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-[40px] p-10 shadow-sm hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >

              <p className="text-green-600 font-semibold mb-4">
                Премиум
              </p>

              <h2 className="text-5xl font-bold mb-8">
                индивидуально
              </h2>

              <div className="space-y-5 text-lg text-gray-600 mb-10">

                <p>✓ Обслуживание мероприятий</p>
                <p>✓ VIP кабины</p>
                <p>✓ Персональные условия</p>
                <p>✓ Круглосуточная поддержка</p>

              </div>

              <a
                href="/contacts"
                className="block text-center bg-slate-900 hover:bg-black text-white py-5 rounded-2xl text-lg font-semibold transition"
              >
                Связаться
              </a>

            </motion.div>

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
            className="bg-slate-950 rounded-[50px] p-12 md:p-20 text-white"
          >

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              <div>

                <h3 className="text-5xl font-bold mb-4 text-green-400">
                  Без скрытых
                  платежей
                </h3>

                <p className="text-xl text-gray-300">
                  Прозрачная стоимость услуг
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold mb-4 text-green-400">
                  Быстрая
                  доставка
                </h3>

                <p className="text-xl text-gray-300">
                  Работаем по Новосибирску и области
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold mb-4 text-green-400">
                  Гибкие
                  условия
                </h3>

                <p className="text-xl text-gray-300">
                  Подбираем решение под клиента
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
            className="bg-green-600 rounded-[50px] p-12 md:p-24 text-white text-center shadow-2xl"
          >

            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Рассчитать стоимость?
            </h2>

            <p className="text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Свяжитесь с нами —
              подготовим индивидуальное предложение
              под ваш объект.
            </p>

            <a
              href="/contacts"
              className="inline-block bg-white text-green-700 hover:bg-gray-100 hover:scale-105 active:scale-95 px-10 py-5 rounded-2xl text-2xl font-bold transition duration-300"
            >
              Связаться с нами
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