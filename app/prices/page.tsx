export default function PricesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      <section className="max-w-7xl mx-auto px-6 py-24">

        <h1 className="text-5xl font-bold mb-6">
          Цены
        </h1>

        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          Стоимость аренды и обслуживания биотуалетов
          в Новосибирске и области.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="border border-gray-200 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Суточная аренда
            </h2>

            <p className="text-5xl font-bold text-green-600 mb-6">
              2 500 ₽
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Доставка</li>
              <li>✔ Установка</li>
              <li>✔ Обслуживание</li>
            </ul>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl transition">
              Заказать
            </button>
          </div>

          {/* CARD 2 */}
          <div className="border-2 border-green-600 rounded-3xl p-8 relative">

            <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
              Популярно
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Месячная аренда
            </h2>

            <p className="text-5xl font-bold text-green-600 mb-6">
              18 000 ₽
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Регулярное обслуживание</li>
              <li>✔ Замена расходников</li>
              <li>✔ Техническая поддержка</li>
            </ul>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl transition">
              Заказать
            </button>
          </div>

          {/* CARD 3 */}
          <div className="border border-gray-200 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-4">
              Продажа кабин
            </h2>

            <p className="text-5xl font-bold text-green-600 mb-6">
              от 45 000 ₽
            </p>

            <ul className="space-y-3 text-gray-600 mb-8">
              <li>✔ Новые кабины</li>
              <li>✔ Гарантия</li>
              <li>✔ Доставка по области</li>
            </ul>

            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-2xl transition">
              Купить
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}