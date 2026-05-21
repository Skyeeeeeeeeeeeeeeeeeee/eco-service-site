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
            <div className="bg-white rounded-[40px] overflow-hidden shadow-sm min-h-[500px]">

              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=82.920430%2C55.041191&mode=search&oid=1081228821&ol=biz&z=17"
                width="100%"
                height="100%"
                allowFullScreen={true}
                className="border-0 min-h-[500px]"
              />

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

    </main>
  )
}