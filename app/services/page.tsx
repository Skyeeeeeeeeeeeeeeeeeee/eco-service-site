export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      <section className="max-w-7xl mx-auto px-6 py-24">
        
        <h1 className="text-5xl font-bold mb-6">
          Наши услуги
        </h1>

        <p className="text-xl text-gray-600 mb-16 max-w-3xl">
          ООО «Экосервис Новосибирск» предоставляет полный спектр
          услуг по аренде, продаже и обслуживанию биотуалетов.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Аренда биотуалетов
            </h2>

            <p className="text-gray-600">
              Краткосрочная и долгосрочная аренда кабин для строительных
              площадок, мероприятий и частных объектов.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Продажа кабин
            </h2>

            <p className="text-gray-600">
              Продажа новых и обслуженных туалетных кабин для бизнеса
              и частного использования.
            </p>
          </div>

          <div className="border border-gray-200 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Обслуживание
            </h2>

            <p className="text-gray-600">
              Очистка, дезинфекция и регулярное обслуживание кабин.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}