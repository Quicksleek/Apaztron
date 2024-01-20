import Image from "next/image";
import Hero from "./Components/Pages/Hero";
import Script from 'next/script';
import Head from "next/head";
import About from "./Components/Pages/About";


export default function Home() {
  return (
    <>
    <Head>
        <title>Apaztron</title>
      </Head>

   <Hero />
   


   <script type="module" src="/Hero-script.js"></script>
    </>
   
  );
}
