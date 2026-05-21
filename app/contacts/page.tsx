export default function PricesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-slate-900">

      {/* HEADER */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          <a href="/" className="block">
            <h2 className="text-2xl md:text-3xl font-bold text-green-600">
              Экосервис
            </h2>

            <p className="text-gray-500 text-sm">
              Новосибирск
            </p>
          </a>

          <nav className="hidden md:flex items-center gap-10">

            <a href="/" className="font-medium hover:text-green-600 transition">
              Главная
            </a>

            <a href="/services" className="font-medium hover:text-green-600 transition">
              Услуги
            </a>

            <a href="/prices" className="font-medium text-green-600">
              Цены
            </a>

            <a href="/contacts" className="font-medium hover:text-green-600 transition">
              Контакты
            </a>

          </nav>

          <a
            href="/contacts"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-medium transition"
          >
            Заказать
          </a>

        </div>

      </header>

      {/* CONTENT */}
      <section className="py-16 md:py-24">

        <div className="max-w-7xl mx-auto px-4 md:px-6">

          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Цены
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-3xl font-bold mb-4">
                Стандарт
              </h2>

              <p className="text-5xl font-bold text-green-600 mb-6">
                3000₽
              </p>

              <p className="text-gray-600 text-lg">
                Аренда биотуалета на месяц.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm border-4 border-green-600">

              <h2 className="text-3xl font-bold mb-4">
                Бизнес
              </h2>

              <p className="text-5xl font-bold text-green-600 mb-6">
                5000₽
              </p>

              <p className="text-gray-600 text-lg">
                Кабина + обслуживание.
              </p>

            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm">

              <h2 className="text-3xl font-bold mb-4">
                Premium
              </h2>

              <p className="text-5xl font-bold text-green-600 mb-6">
                9000₽
              </p>

              <p className="text-gray-600 text-lg">
                VIP решение для мероприятий.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}