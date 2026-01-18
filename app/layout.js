export const metadata = {
  title: "CDS FOOTWEAR",
  description: "Buy quality footwear online"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <nav className="border-b p-4 flex justify-between">
          <h1 className="text-xl font-bold">CDS FOOTWEAR</h1>
          <div className="space-x-4 text-sm">
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/login">Login</a>
          </div>
        </nav>

        <main className="p-4">{children}</main>

        <footer className="border-t p-4 text-center text-sm">
          © 2026 CDS FOOTWEAR
        </footer>
      </body>
    </html>
  );
    }
