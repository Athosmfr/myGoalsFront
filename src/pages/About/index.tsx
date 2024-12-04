import { FaDatabase, FaJava, FaReact } from "react-icons/fa";
import { Navbar } from "../../components/navbar";
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";
import Waves from '../../images/layered-waves-haikei.svg';

export function About() {
    return (
    <div className="bg-zinc-300">
      <header className="mb-16 px-32">
        <Navbar/>
      </header>
      <main className="px-32">
        <section className="w-full h-[420px] bg-[url('/images/undraw_zoom_in_-1-txs.svg')] bg-cover flex items-end mb-16">
        </section>
        <section>
        <h1 className="text-xl font-bold leading-relaxed text-justify w-3/5 mx-auto">This project is a front-end application designed to interact with a Java Spring Boot API that I developed. The API provides robust functionality, including user authentication and authorization, as well as CRUD operations for managing user-specific goals. The purpose of this project is to offer users a seamless experience for managing their goals while utilizing data from the API. Additionally, this serves as a practical application to strengthen my skills in React and deepen my understanding of API integration within web applications.</h1>
        </section>
        <section className="mt-16 text-center bg-[#191A23] py-8">
            <h2 className="text-2xl w-3/5 mx-auto font-semibold text-white mb-8">Technologies Used</h2>
            <ul className="flex items-center justify-around w-1/5 text-white text-left mx-auto mb-8">
                <FaReact className="text-blue-500 text-4xl" />
                <FaJava className="text-blue-500 text-4xl" />
                <FaDatabase className="text-blue-500 text-4xl"/>
            </ul>
            <ul className="text-white text-center w-1/2 mx-auto space-y-2">
                <li className="bg-zinc-700 py-2 px-4 rounded-md">React</li>
                <li className="bg-zinc-700 py-2 px-4 rounded-md">Java Spring Boot</li>
                <li className="bg-zinc-700 py-2 px-4 rounded-md">Spring Security</li>
                <li className="bg-zinc-700 py-2 px-4 rounded-md">MySQL Database</li>
                <li className="bg-zinc-700 py-2 px-4 rounded-md">TailwindCSS</li>
            </ul>
        </section>
        <section className="mt-16 text-center w-3/5 mx-auto mb-24">
        <h2 className="text-2xl font-semibold mb-4">Figma Design Preview</h2>
        <div className="flex justify-center gap-4">
            <img src="/images/Screenshot_1.png" alt="Screenshot 1" className="w-1/2 rounded-lg shadow-md" />
            <img src="/images/Screenshot_2.png" alt="Screenshot 2" className="w-1/2 rounded-lg shadow-md" />
        </div>
        </section>
      </main>
      <footer  className="text-center py-12" style={{backgroundImage: `url(${Waves})`, backgroundSize: 'cover', backgroundPosition: 'center'}}> 
        <h1 className="text-xl font-semibold text-center align-text-bottom">Developed by Athosmfr</h1>
        <p className="mt-2 mb-4 text-center">Find and follow me on my social networks</p>
          {/* LEMBRAR DE FAZER UM COMPONENTE PARA O FOOTER POIS É UTILIZADO EM 3 PAGINAS DA MESMA FORMA!*/}
          <div className="flex m-auto w-[5%] justify-around">
            <Link to="https://www.linkedin.com/in/athosmfr/"><Linkedin/></Link>
            <Link to="https://github.com/Athosmfr"><Github/></Link>
          </div>
      </footer>
      </div>
    )
}