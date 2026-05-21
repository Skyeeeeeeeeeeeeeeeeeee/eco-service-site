import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-bold text-green-600">
              Экосервис
            </h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="hover:text-green-600 transition">
              Главная
            </a>

            <a href="/services" className="hover:text-green-600 transition">
              Услуги
            </a>

            <a href="/prices" className="hover:text-green-600 transition">
              Цены
            </a>

            <a href="/contacts" className="hover:text-green-600 transition">
              Контакты
            </a>
          </nav>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-medium transition">
            Заказать
          </button>

        </div>
      </header>

      {/* HERO */}
      <section className="py-14 md:py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>

              <p className="text-green-600 font-semibold mb-4">
                Аренда и продажа биотуалетов
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
                Биотуалеты для стройки,
                мероприятий и бизнеса
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                ООО «Экосервис Новосибирск» предоставляет аренду,
                обслуживание и продажу туалетных кабин
                по Новосибирску и области.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">

                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-medium transition">
                  Оставить заявку
                </button>

                <button className="border border-gray-300 px-8 py-4 rounded-2xl font-medium hover:bg-gray-100 transition">
                  Смотреть услуги
                </button>

              </div>

            </div>

            <div className="bg-green-100 rounded-3xl h-[300px] md:h-[500px] flex items-center justify-center">

              <p className="text-green-700 text-2xl font-bold">
                Фото биотуалета
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12">
            Наши услуги
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Аренда биотуалетов
              </h3>

              <p className="text-gray-600 text-lg">
                Краткосрочная и долгосрочная аренда кабин
                для любых объектов.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Продажа кабин
              </h3>

              <p className="text-gray-600 text-lg">
                Новые и обслуженные биотуалеты
                для бизнеса и частного использования.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                Обслуживание
              </h3>

              <p className="text-gray-600 text-lg">
                Очистка, дезинфекция и техническое
                обслуживание туалетных кабин.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white py-10 md:py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ООО «Экосервис Новосибирск»
          </h2>

          <p className="text-gray-400 text-xl">
            Аренда и продажа биотуалетов
            в Новосибирске и области
          </p>

        </div>

      </footer>

    </main>
  )
}