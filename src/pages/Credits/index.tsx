import { Link } from "react-router-dom";
import { Navbar } from "../../components/navbar";
import { Github, Linkedin } from "lucide-react";
import Waves from '../../images/layered-waves-haikei.svg';

export function Credits() {
    return (
    <div className="bg-zinc-300">
      <header className="mb-32 px-32">
        <Navbar/>
      </header>
      <main className="px-32 mb-32">
        <section className="mt-10 text-center w-3/5 mx-auto">
            <h2 className="text-2xl font-bold mb-6">Credits & Inspirations</h2>
            <p className="text-left mb-6">This project was developed with inspiration from various sources and enriched by the knowledge gained through different platforms.</p>
            <div className="text-left">
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-2">Design Inspiration</h3>
                    <p>The design concept for this project was inspired by the <a href="https://www.figma.com/community/file/1230604708032389430/positivus-landing-page-design" className="text-[#191A23] font-bold underline">Positivus Landing Page Design (Community)</a> on Figma, which served as a great reference for layout, color schemes, and overall aesthetics.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-2">Learning Resources</h3>
                    <p>This project was developed thanks to the valuable courses and materials provided by <a href="https://www.alura.com.br" className="text-[#191A23] font-bold underline">Alura</a> and <a href="https://rocketseat.com.br/" className="text-[#191A23] font-bold underline">Rocketseat</a>, which provided me with the knowledge needed to implement key features such as authentication, API integration, and more.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-2">Fonts</h3>
                    <p>The fonts used in this project were sourced from <a href="https://fonts.google.com/" className="text-[#191A23] font-bold underline">Google Fonts</a>.</p>
                </div>
                <div className="mb-8">
                    <h3 className="text-lg font-bold mb-2">Icons</h3>
                    <p>The icons used throughout the project were sourced from <a href="https://lucide.dev/" className="text-[#191A23] font-bold underline">Lucide React</a>.</p>
                </div>
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