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
            className="bg-gray-100 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
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

      {/* CONTENT */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Наши услуги
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mb-16 leading-relaxed">
            ООО «Экосервис Новосибирск» предоставляет полный спектр услуг
            по аренде, продаже и обслуживанию биотуалетов.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-3xl font-bold mb-6">
                Аренда биотуалетов
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Краткосрочная и долгосрочная аренда кабин
                для строительных площадок,
                мероприятий и частных объектов.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-3xl font-bold mb-6">
                Продажа кабин
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Продажа новых и обслуженных туалетных кабин
                для бизнеса и частного использования.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-3xl font-bold mb-6">
                Обслуживание
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Очистка, дезинфекция и регулярное
                обслуживание кабин.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}