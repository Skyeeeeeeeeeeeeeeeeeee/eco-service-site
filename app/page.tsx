export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-4">

          <div className="flex items-center justify-between">

            <div>
              <h2 className="text-xl md:text-3xl font-bold text-green-600">
                Экосервис
              </h2>

              <p className="text-gray-500 text-sm">
                Новосибирск
              </p>
            </div>

            <a
              href="#request"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-medium transition text-sm"
            >
              Заказать
            </a>

          </div>

          {/* MOBILE MENU */}
          <div className="flex md:hidden gap-3 mt-4 overflow-x-auto pb-1">

            <a
              href="/"
              className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
            >
              Главная
            </a>

            <a
              href="#services"
              className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
            >
              Услуги
            </a>

            <a
              href="#prices"
              className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
            >
              Цены
            </a>

            <a
              href="#contacts"
              className="bg-gray-100 text-slate-800 px-4 py-2 rounded-xl text-sm whitespace-nowrap"
            >
              Контакты
            </a>

          </div>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center justify-center gap-8 mt-4">

            <a
              href="/"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Главная
            </a>

            <a
              href="#services"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Услуги
            </a>

            <a
              href="#prices"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Цены
            </a>

            <a
              href="#contacts"
              className="text-slate-800 hover:text-green-600 transition font-medium"
            >
              Контакты
            </a>

          </nav>

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
                  href="#request"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-medium transition text-center"
                >
                  Оставить заявку
                </a>

                <a
                  href="#services"
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

      {/* SERVICES */}
      <section id="services" className="pb-14 md:pb-20">

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

      {/* REQUEST FORM */}
      <section
        id="request"
        className="pb-14 md:pb-20"
      >

        <div className="max-w-3xl mx-auto px-4">

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">

            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Оставить заявку
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Оставьте номер телефона и мы свяжемся с вами.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:border-green-600"
              />

              <input
                type="tel"
                placeholder="Ваш телефон"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 text-lg outline-none focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl text-lg font-medium transition"
              >
                Отправить заявку
              </button>

            </form>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer
        id="contacts"
        className="bg-slate-950 text-white py-12 md:py-20"
      >

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            ООО «Экосервис Новосибирск»
          </h2>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
            Аренда и продажа биотуалетов
            в Новосибирске и области
          </p>

          <div className="space-y-3 text-gray-300 text-lg">

            <p>📞 +7 (999) 123-45-67</p>

            <p>📍 Новосибирск</p>

            <p>✉ eco-service@mail.ru</p>

          </div>

        </div>

      </footer>

    </main>
  )
}