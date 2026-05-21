import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-green-700 font-semibold mb-4">
              Аренда и продажа биотуалетов
            </p>

            <h1 className="text-6xl font-bold leading-tight mb-6">
              Биотуалеты для стройки, мероприятий и бизнеса
            </h1>

            <p className="text-xl text-gray-600 mb-10">
              ООО «Экосервис Новосибирск» предоставляет аренду,
              обслуживание и продажу туалетных кабин по Новосибирску
              и области.
            </p>

            <div className="flex flex-wrap gap-4">

              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl text-lg transition">
                Оставить заявку
              </button>

              <Link
                href="/services"
                className="border border-gray-300 px-8 py-4 rounded-2xl text-lg hover:border-green-600 transition"
              >
                Смотреть услуги
              </Link>

            </div>
          </div>

          <div className="bg-green-100 rounded-3xl h-[500px] flex items-center justify-center">
            <p className="text-2xl text-green-800 font-semibold">
              Фото биотуалета
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-14">
            Наши услуги
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Аренда биотуалетов
              </h3>

              <p className="text-gray-600">
                Краткосрочная и долгосрочная аренда кабин для любых объектов.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Продажа кабин
              </h3>

              <p className="text-gray-600">
                Новые и обслуженные биотуалеты для бизнеса и частного использования.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Обслуживание
              </h3>

              <p className="text-gray-600">
                Очистка, дезинфекция и техническое обслуживание туалетных кабин.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}