"use client"

import { useState } from "react"

export default function HomePage() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="block">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600">
              Экосервис
            </h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>
          </a>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="/"
              className="font-medium text-green-600"
            >
              Главная
            </a>

            <a
              href="/services"
              className="font-medium hover:text-green-600 transition"
            >
              Услуги
            </a>

            <a
              href="/prices"
              className="font-medium hover:text-green-600 transition"
            >
              Цены
            </a>

            <a
              href="/contacts"
              className="font-medium hover:text-green-600 transition"
            >
              Контакты
            </a>

          </nav>

          {/* BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-medium transition text-sm md:text-base"
          >
            Заказать
          </button>

        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex gap-3 px-4 pb-4 overflow-x-auto">

          <a
            href="/"
            className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Главная
          </a>

          <a
            href="/services"
            className="bg-gray-100 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Услуги
          </a>

          <a
            href="/prices"
            className="bg-gray-100 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Цены
          </a>

          <a
            href="/contacts"
            className="bg-gray-100 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Контакты
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="py-14 md:py-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div>

              <p className="text-green-600 font-semibold mb-4 text-sm md:text-base">
                Аренда и продажа биотуалетов
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Биотуалеты
                для стройки,
                мероприятий
                и бизнеса
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                ООО «Экосервис Новосибирск» предоставляет аренду,
                обслуживание и продажу туалетных кабин
                по Новосибирску и области.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">

                <button
                  onClick={() => setIsOpen(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-medium transition text-center"
                >
                  Оставить заявку
                </button>

                <a
                  href="/services"
                  className="border-2 border-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition text-center"
                >
                  Смотреть услуги
                </a>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-4 mt-10">

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-bold text-green-600">
                    5+
                  </p>

                  <p className="text-gray-600 mt-2">
                    Лет на рынке
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-bold text-green-600">
                    1000+
                  </p>

                  <p className="text-gray-600 mt-2">
                    Выполненных заказов
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-bold text-green-600">
                    24/7
                  </p>

                  <p className="text-gray-600 mt-2">
                    Поддержка клиентов
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 shadow-sm">
                  <p className="text-3xl font-bold text-green-600">
                    500+
                  </p>

                  <p className="text-gray-600 mt-2">
                    Постоянных клиентов
                  </p>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-green-100 rounded-[40px] h-[320px] md:h-[620px] flex items-center justify-center">

              <p className="text-green-700 text-2xl md:text-4xl font-bold">
                Фото биотуалета
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ADVANTAGES */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Почему выбирают нас
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                Быстрая доставка
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Доставляем биотуалеты
                по Новосибирску и области
                в кратчайшие сроки.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                Чистые кабины
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Регулярная санитарная обработка
                и техническое обслуживание.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                Любые объекты
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Работаем со стройками,
                мероприятиями и частными объектами.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl font-bold mb-4">
                Работаем 24/7
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Всегда готовы помочь
                и ответить на вопросы клиентов.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="bg-green-600 rounded-[40px] p-10 md:p-20 text-white text-center">

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Нужен биотуалет
              для объекта?
            </h2>

            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
              Оставьте заявку —
              мы быстро подберём подходящее решение
              для вашего объекта.
            </p>

            <button
              onClick={() => setIsOpen(true)}
              className="inline-block bg-white text-green-700 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition"
            >
              Оставить заявку
            </button>

          </div>

        </div>

      </section>

      {/* MODAL */}
      {
        isOpen && (
          <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">

            <div className="bg-white rounded-[40px] w-full max-w-2xl p-8 md:p-12 relative">

              {/* CLOSE */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-3xl text-gray-400 hover:text-black transition"
              >
                ×
              </button>

              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                Оставить заявку
              </h2>

              <p className="text-gray-600 text-lg mb-8">
                Заполните форму и мы свяжемся с вами.
              </p>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-green-600"
                />

                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-green-600"
                />

                <textarea
                  placeholder="Комментарий"
                  rows={4}
                  className="w-full border border-gray-300 rounded-2xl px-6 py-5 text-lg outline-none focus:border-green-600"
                />

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-5 rounded-2xl text-lg font-bold transition"
                >
                  Отправить заявку
                </button>

              </form>

            </div>

          </div>
        )
      }

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-16">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>

              <h2 className="text-4xl font-bold mb-4">
                Экосервис
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed">
                Аренда и продажа биотуалетов
                в Новосибирске и области.
              </p>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-5">
                Навигация
              </h3>

              <div className="flex flex-col gap-3 text-gray-300">

                <a href="/">Главная</a>
                <a href="/services">Услуги</a>
                <a href="/prices">Цены</a>
                <a href="/contacts">Контакты</a>

              </div>

            </div>

            <div>

              <h3 className="text-2xl font-bold mb-5">
                Контакты
              </h3>

              <div className="flex flex-col gap-3 text-gray-300">

                <p>📞 +7 (999) 123-45-67</p>
                <p>📍 Новосибирск</p>
                <p>✉ eco-service@mail.ru</p>

              </div>

            </div>

          </div>

        </div>

      </footer>

    </main>
  )
}