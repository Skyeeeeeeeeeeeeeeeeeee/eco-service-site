export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>

            <h1 className="text-5xl font-bold mb-6">
              Контакты
            </h1>

            <p className="text-xl text-gray-600 mb-12">
              Свяжитесь с нами для аренды, покупки
              и обслуживания биотуалетов.
            </p>

            <div className="space-y-8">

              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Телефон
                </h2>

                <p className="text-gray-600 text-lg">
                  +7 (999) 123-45-67
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Email
                </h2>

                <p className="text-gray-600 text-lg">
                  info@eco-service.ru
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Адрес
                </h2>

                <p className="text-gray-600 text-lg">
                  Новосибирск, ул. Примерная, 15
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-2">
                  Режим работы
                </h2>

                <p className="text-gray-600 text-lg">
                  Пн–Вс: 08:00 – 22:00
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="bg-gray-50 rounded-3xl p-10">

            <h2 className="text-3xl font-bold mb-8">
              Оставить заявку
            </h2>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
              />

              <input
                type="text"
                placeholder="Телефон"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
              />

              <textarea
                placeholder="Комментарий"
                rows={5}
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl transition"
              >
                Отправить заявку
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>
  );
}