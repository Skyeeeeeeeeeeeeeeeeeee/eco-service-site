import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Экосервис Новосибирск",
  description: "Аренда и продажа биотуалетов",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>

        {/* HEADER */}
        <header className="border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

            <Link href="/">
              <div>
                <h2 className="text-2xl font-bold text-green-700">
                  Экосервис
                </h2>

                <p className="text-sm text-gray-500">
                  Новосибирск
                </p>
              </div>
            </Link>

            <nav className="hidden md:flex gap-8 text-lg">

              <Link
                href="/"
                className="hover:text-green-700 transition"
              >
                Главная
              </Link>

              <Link
                href="/services"
                className="hover:text-green-700 transition"
              >
                Услуги
              </Link>

              <Link
                href="/prices"
                className="hover:text-green-700 transition"
              >
                Цены
              </Link>

              <Link
                href="/contacts"
                className="hover:text-green-700 transition"
              >
                Контакты
              </Link>

            </nav>

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl transition">
              Заказать
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="bg-gray-900 text-white py-12 mt-24">

          <div className="max-w-7xl mx-auto px-6">

            <h2 className="text-2xl font-bold mb-4">
              ООО «Экосервис Новосибирск»
            </h2>

            <p className="text-gray-400">
              Аренда и продажа биотуалетов в Новосибирске и области
            </p>

          </div>
        </footer>

      </body>
    </html>
  );
}