import './globals.css';

export const metadata = {
  title: 'CECONP Reclutamiento',
  description: 'Portal de reclutamiento CECONP'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
