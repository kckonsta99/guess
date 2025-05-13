import { Fugaz_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: "GuessGame",
  description: "Guess the player.",
};

export default function RootLayout({ children }) {

  const header = (
    <header className="p-4 sm:p-8 flex items-center justify-betwwen gap-4">
      <Link href="/" >
        <h1 className={'text-lg sm:text-xl md:text-2xl ' + fugaz.className}><span className="text-green-400 border">Guess</span> <span className="text-amber-600 border">Game</span></h1>
      </Link>
    </header>
  )

  const footer = (
    <footer className="p-4 sm:p-8 grid place-items-center">
      <Link href="https://github.com/kckonsta99" target="_blank" >
        <p>Created by <span className={fugaz.className} >kckonsta99</span></p>
      </Link>
    </footer>
  )

  return (
    <html lang="en">
      <body className={` ${geistSans.variable} ${geistMono.variable} antialiased ` + ' w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-50 '}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
