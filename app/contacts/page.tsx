export default function ContactsPage() {
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

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-10">

            <a
              href="/"
              className="font-medium hover:text-green-600 transition"
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
              className="font-medium text-green-600"
            >
              Контакты
            </a>

          </nav>

          {/* BUTTON */}
          <a
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-medium transition"
          >
            На главную
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="mb-14">

            <p className="text-green-600 font-semibold mb-4">
              Контактная информация
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Свяжитесь
              с нами
            </h1>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* CONTACTS */}
            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm">

              <h2 className="text-3xl md:text-4xl font-bold mb-10">
                Контакты
              </h2>

              <div className="space-y-8">

                <div>

                  <p className="text-gray-500 mb-2">
                    Телефон
                  </p>

                  <a
                    href="tel:+73833194021"
                    className="text-2xl font-semibold hover:text-green-600 transition"
                  >
                    +7 (383) 319-40-21
                  </a>

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Адрес
                  </p>

                  <p className="text-xl leading-relaxed">
                    Новосибирск,
                    <br />
                    Советская ул., 64/1
                    <br />
                    офис 553, этаж 5
                  </p>

                </div>

                <div>

                  <p className="text-gray-500 mb-2">
                    Время работы
                  </p>

                  <p className="text-xl leading-relaxed">
                    Понедельник — Пятница
                    <br />
                    с 9:00 до 17:00
                  </p>

                </div>

              </div>

            </div>

            {/* MAP */}
            <div className="bg-white rounded-[40px] overflow-hidden shadow-sm">

              <div className="relative w-full h-[500px]">

                <iframe
                  src="https://yandex.ru/map-widget/v1/?ll=82.920601%2C55.041065&mode=whatshere&whatshere%5Bpoint%5D=82.920601%2C55.041065&whatshere%5Bzoom%5D=17&z=17"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="absolute inset-0"
                />

              </div>

              {/* ADDRESS CARD */}
              <div className="p-6 border-t border-gray-100">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

                  <div>

                    <p className="text-gray-500 text-sm mb-1">
                      Адрес офиса
                    </p>

                    <h3 className="text-2xl font-bold">
                      Советская ул., 64/1
                    </h3>

                    <p className="text-gray-600 mt-2">
                      офис 553, этаж 5
                    </p>

                  </div>

                  <a
                    href="https://yandex.ru/maps/?text=Новосибирск%20Советская%2064%2F1"
                    target="_blank"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-2xl font-semibold transition text-center"
                  >
                    Открыть карту
                  </a>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="bg-green-600 rounded-[40px] p-10 md:p-20 text-white text-center">

            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Остались вопросы?
            </h2>

            <p className="text-xl text-green-100 mb-10 max-w-3xl mx-auto">
              Свяжитесь с нами по телефону —
              поможем подобрать подходящее решение
              для вашего объекта.
            </p>

            <a
              href="tel:+73833194021"
              className="inline-block bg-white text-green-700 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 transition"
            >
              Позвонить
            </a>

          </div>

        </div>

      </section>

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