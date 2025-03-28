import { Geist, Geist_Mono, Inter} from "next/font/google";
import { getServerSession } from 'next-auth';
import SessionProvider from './components/SessionProvider';
import "./globals.css";
 
const inter = Inter({ subsets: ["latin"] });
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
 
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
 
export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
       <SessionProvider session={session}>{children}</SessionProvider>
        </body>
    </html>
  );
}