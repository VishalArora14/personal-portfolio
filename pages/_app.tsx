import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { skills } from "@/Data/Data";
import CodingProfiles from "@/components/CodingProfiles";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      {/* <Component {...pageProps} /> */}
      <About/>
      <Skills skills={skills} />
      {/* exprerience */}
      <Projects/>
      <CodingProfiles/>
      {/* education */}
      <Contact/>
    </main>
  );
}
