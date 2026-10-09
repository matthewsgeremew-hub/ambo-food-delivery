export const metadata = {
  title: 'Ambo Campus Delivery',
  description: 'Campus food delivery app for Ambo University Main Campus',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
