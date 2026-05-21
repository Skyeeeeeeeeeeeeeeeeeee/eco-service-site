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
            href="/contacts"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-2xl font-medium transition"
          >
            Заказать
          </a>

        </div>

      </header>

      {/* CONTENT */}
      <section className="py-16 md:py-24">

        <div className="max-w-5xl mx-auto px-4 md:px-6">

          <h1 className="text-5xl md:text-7xl font-bold mb-10">
            Контакты
          </h1>

          <div className="bg-white rounded-3xl p-10 shadow-sm space-y-6">

            <p className="text-2xl">
              📞 +7 (999) 123-45-67
            </p>

            <p className="text-2xl">
              ✉ eco-service@mail.ru
            </p>

            <p className="text-2xl">
              📍 Новосибирск
            </p>

          </div>

        </div>

      </section>

    </main>
  )
}