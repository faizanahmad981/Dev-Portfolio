import About from "@/component/about";
import Banner from "@/component/banner";
import BlogSection from "@/component/blog";
import ContactForm from "@/component/contact";
import Education from "@/component/education";
import Footer from "@/component/footer";
import Header from "@/component/header";
import Portfolio from "@/component/projects";
import Services from "@/component/services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  gap-16 
     font-[family-name:var(--font-geist-sans)]">
    
    <Header/>
    <Banner/>
    <About/>
    <Education/>
    <Services/>
    <Portfolio/>
    <BlogSection/>
    <ContactForm/>
   
    <Footer/>
    </div>
  );
}
