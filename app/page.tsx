export default function ServicesPage() {
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
              className="font-medium hover:text-green-600 transition"
            >
              Главная
            </a>

            <a
              href="/services"
              className="font-medium text-green-600"
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
          <a
            href="/contacts"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-medium transition text-sm md:text-base"
          >
            Заказать
          </a>

        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex gap-3 px-4 pb-4 overflow-x-auto">

          <a
            href="/"
            className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Главная
          </a>

          <a
            href="/services"
            className="bg-green-600 text-white px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Услуги
          </a>

          <a
            href="/prices"
            className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Цены
          </a>

          <a
            href="/contacts"
            className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Контакты
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Наши услуги
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mb-14 leading-relaxed">
            ООО «Экосервис Новосибирск» предоставляет полный спектр услуг
            по аренде, продаже и обслуживанию биотуалетов.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* CARD */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-lg transition">

              <h2 className="text-3xl font-bold mb-6">
                Аренда биотуалетов
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Краткосрочная и долгосрочная аренда кабин
                для строительных площадок,
                мероприятий и частных объектов.
              </p>

              <a
                href="/contacts"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl transition font-medium"
              >
                Заказать
              </a>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-lg transition">

              <h2 className="text-3xl font-bold mb-6">
                Продажа кабин
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Продажа новых и обслуженных туалетных кабин
                для бизнеса и частного использования.
              </p>

              <a
                href="/contacts"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl transition font-medium"
              >
                Заказать
              </a>

            </div>

            {/* CARD */}
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200 hover:shadow-lg transition">

              <h2 className="text-3xl font-bold mb-6">
                Обслуживание
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Очистка, дезинфекция и регулярное
                обслуживание кабин.
              </p>

              <a
                href="/contacts"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl transition font-medium"
              >
                Заказать
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-16 mt-10">

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