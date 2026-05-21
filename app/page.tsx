export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <div>
            <h2 className="text-xl md:text-3xl font-bold text-green-600">
              Экосервис
            </h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-10">

            <a
              href="/"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Главная
            </a>

            <a
              href="/services"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Услуги
            </a>

            <a
              href="/prices"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Цены
            </a>

            <a
              href="/contacts"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Контакты
            </a>

          </nav>

          <a
            href="/contacts"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-medium transition text-sm"
          >
            Заказать
          </a>

        </div>

        {/* MOBILE MENU */}
        <div className="flex md:hidden gap-3 px-4 pb-4 overflow-x-auto">

          <a
            href="/"
            className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
          >
            Главная
          </a>

          <a
            href="/services"
            className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
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
      <section className="py-10 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-green-600 font-semibold mb-4 text-sm md:text-base">
                Аренда и продажа биотуалетов
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
                Биотуалеты для стройки,
                мероприятий и бизнеса
              </h1>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                ООО «Экосервис Новосибирск» предоставляет аренду,
                обслуживание и продажу туалетных кабин
                по Новосибирску и области.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="/contacts"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-medium transition text-center"
                >
                  Оставить заявку
                </a>

                <a
                  href="/services"
                  className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition text-center"
                >
                  Смотреть услуги
                </a>

              </div>

            </div>

            <div className="bg-green-100 rounded-3xl h-[250px] md:h-[500px] flex items-center justify-center">

              <p className="text-green-700 text-xl md:text-2xl font-bold">
                Фото биотуалета
              </p>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}