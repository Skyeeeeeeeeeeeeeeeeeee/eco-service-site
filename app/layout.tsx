import "./globals.css";

export const metadata = {
  title: "Экосервис Новосибирск",
  description: "Аренда и продажа биотуалетов",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  );
}