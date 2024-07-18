import { Inter } from "next/font/google";
import "../styles/globals.css";
import Sidebar from "@/Components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code Transform",
  description: "Code Transform Tools, Covert Syntax of code",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
