"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  let router=useRouter()
  return (
<>
    <main className="home " >
  
      <section className="hero ">
 
        <p className="intro">Hey, I’m</p>
        <h2 className="name">Muhammad Mubashir</h2>
        <h3 className="role">Full Stack Web Developer</h3>

        <p className="description">
          I build clean, scalable and performance-focused web applications using
          modern JavaScript frameworks.
        </p>

        <div className="buttons">
          <button className="primary-btn" onClick={()=>router.push("/Projects")}>View Projects</button>
          <button className="secondary-btn" onClick={()=>router.push("/About")}>Contact Me</button>
        </div>
      </section>
      <section>
        <Image  loading="eager" className="avatar" src={"/dp.jpg"} width={200} height={200} alt="image of me made by AI in light blue pants&coat with white shirt"></Image>
      </section>
    </main>
</>
  );


}
