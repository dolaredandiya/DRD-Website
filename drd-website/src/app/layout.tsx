import type { Metadata } from "next";
import { Forum, Neuton } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";

const neuton = Neuton({
  variable: "--font-neuton",
  subsets: ["latin"],
  weight: "400"
})

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: "400"
});



export const metadata: Metadata = {
  title: "Dola Re Dandiya",
  description: "See everything about DRD",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${forum.variable} ${neuton.variable}`}> 
      <body
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
