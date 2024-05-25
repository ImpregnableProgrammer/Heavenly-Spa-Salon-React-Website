import "../main.css";
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerTabs: Array<string> = ["Services", "About", "Pricing", "Gallery"];
  const headerMapping = {
    Services: "/services",
    About: "/about",
    Pricing: "/pricing",
    Gallery: "/gallery",
  };
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header className="sticky flex h-20 w-full items-center justify-center bg-blue-300 font-bold">
          <a
            href="/"
            className="absolute left-9 rounded-lg p-4 hover:bg-red-200"
          >
            Home
          </a>
          {headerTabs.map((text: string) => {
            let key: number = 0;
            return (
              <a
                href={headerMapping[text]}
                key={key++}
                className="flex h-full items-center p-2 hover:bg-blue-400"
              >
                {text}
              </a>
            );
          })}
          <a
            href="#/"
            className="absolute right-8 rounded-md bg-red-500 p-4 text-slate-50 hover:bg-red-700"
          >
            Book an appointment!
          </a>
        </header>
        {/* Main content */}
        <main>{children}</main>
        {/* Footer */}
        <footer className="h-20 w-full bg-slate-300">
          &#169;2024 HGK Enterprises, LLC
        </footer>
      </body>
    </html>
  );
}
