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

          <nav className="hidden md:flex items-center gap-8">

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

          <button className="bg-green-600 hover:bg-green-700 text-white px-4 md:px-6 py-2 md:py-3 rounded-2xl font-medium transition text-sm">
            Заказать
          </button>

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

                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-medium transition">
                  Оставить заявку
                </button>

                <button className="border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition">
                  Смотреть услуги
                </button>

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

      {/* SERVICES */}
      <section className="pb-14 md:pb-20">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
            Наши услуги
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Аренда биотуалетов
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Краткосрочная и долгосрочная аренда кабин
                для любых объектов.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Продажа кабин
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Новые и обслуженные биотуалеты
                для бизнеса и частного использования.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                Обслуживание
              </h3>

              <p className="text-gray-600 text-lg leading-relaxed">
                Очистка, дезинфекция и техническое
                обслуживание туалетных кабин.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-12 md:py-20">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            ООО «Экосервис Новосибирск»
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
            Аренда и продажа биотуалетов
            в Новосибирске и области
          </p>

        </div>

      </footer>

    </main>
  )
}