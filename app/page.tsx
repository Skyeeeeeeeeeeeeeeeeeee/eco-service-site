export default function HomePage() {
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

            <p className="text-gray-500 text-sm md:text-base">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

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

              <div className="flex flex-col sm:flex-row gap-4">

                <a
                  href="/contacts"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-medium transition text-center"
                >
                  Оставить заявку
                </a>

                <a
                  href="/services"
                  className="border-2 border-slate-900 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition text-center"
                >
                  Смотреть услуги
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="bg-green-100 rounded-[40px] h-[300px] md:h-[600px] flex items-center justify-center">

              <p className="text-green-700 text-2xl md:text-4xl font-bold">
                Фото биотуалета
              </p>

            </div>

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