'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {/* Хедер */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-green-600 font-bold text-xl">ЭкоСервис</div>

          {/* Десктопное меню */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-green-600">Главная</Link>
            <Link href="/services" className="hover:text-green-600">Услуги</Link>
            <Link href="/prices" className="hover:text-green-600">Цены</Link>
            <Link href="/contacts" className="hover:text-green-600">Контакты</Link>
          </nav>

          {/* Кнопка оставить заявку */}
          <button
            onClick={() => setShowForm(true)}
            className="hidden md:inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Заказать
          </button>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
            >
              <span className="sr-only">Открыть меню</span>
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-slate-900"></span>
                <span className="block w-6 h-0.5 bg-slate-900"></span>
                <span className="block w-6 h-0.5 bg-slate-900"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Мобильное выпадающее меню */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md flex flex-col items-center py-4 space-y-4 z-50">
            <Link href="/" className="text-lg font-medium text-green-600" onClick={() => setMobileMenuOpen(false)}>Главная</Link>
            <Link href="/services" className="text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>Услуги</Link>
            <Link href="/prices" className="text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>Цены</Link>
            <Link href="/contacts" className="text-lg font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
            <button
              onClick={() => { setShowForm(true); setMobileMenuOpen(false) }}
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              Заказать
            </button>
          </div>
        )}
      </header>

      {/* Главная секция */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-start md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-6">
            Биотуалеты для стройки, мероприятий и бизнеса
          </h1>
          <p className="mb-6 text-gray-700">
            ООО «ЭкоСервис Новосибирск» предоставляет аренду, обслуживание и продажу туалетных кабин по Новосибирску и области.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            Оставить заявку
          </button>
        </div>
        <div className="md:w-1/2 bg-green-100 p-8 rounded-lg mt-6 md:mt-0">
          <p className="text-green-600 font-bold text-xl text-center">Фото биотуалета</p>
        </div>
      </main>

      {/* Пример секции услуг */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
        <p className="mb-8 text-gray-700">
          ООО «ЭкоСервис Новосибирск» предоставляет полный спектр услуг по аренде, продаже и обслуживанию биотуалетов.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Аренда биотуалетов</h3>
            <p>Краткосрочная и долгосрочная аренда кабин для строительных площадок, мероприятий и частных объектов.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Продажа кабин</h3>
            <p>Продажа новых и обслуженных туалетных кабин для бизнеса и частного использования.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-bold mb-2">Обслуживание</h3>
            <p>Очистка, дезинфекция и регулярное обслуживание кабин.</p>
          </div>
        </div>
      </section>

      {/* Модальное окно формы */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Оставить заявку</h2>
            <form className="flex flex-col space-y-4">
              <input type="text" placeholder="Имя" className="border p-2 rounded"/>
              <input type="tel" placeholder="Телефон" className="border p-2 rounded"/>
              <textarea placeholder="Комментарий" className="border p-2 rounded"/>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                Отправить
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}