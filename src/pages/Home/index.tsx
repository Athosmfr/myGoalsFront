import Goal from '../../images/undraw_goal_-0-v5v.svg';
import Camera from '../../images/undraw_camera_re_cnp4.svg';
import Dream from '../../images/undraw_late_at_night_re_d3mx.svg';
import Progress from '../../images/undraw_progress_overview_re_tvcl.svg'
import { StepBar } from '../../components/step-bar';
import { LittleBanner } from '../../components/little-banner';
import { Button } from '../../components/button';
import { Navbar } from '../../components/navbar';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Waves from '../../images/layered-waves-haikei.svg';
import { Github, Linkedin } from 'lucide-react';

export function Home() {

  const navigate = useNavigate()

  const isLoggedIn = localStorage.getItem('token') !== null;

  const handleNav = () => {
    if (isLoggedIn) {
      navigate('/goals');
    } else {
      navigate('/login');
    }
  }

  return (
    <div className="bg-zinc-300">
      <header className="mb-24 px-32">
        <Navbar/>
      </header>
      <main className='px-32'>
        <section className="flex justify-between gap-4 mb-28">
          <div className="flex-1 max-w-xl">
            <h1 className="text-6xl font-medium">Create and customize your own goals!</h1>
            <p className="my-9">Our website is developed so you can create your own goals and accomplishments and stay focused on them, keeping them until you finish it</p>
            <Button variant='primary' onClick={handleNav}>Create your goals</Button>
          </div>
          <div className="flex-1 max-w-xl">
            <img className="w-full h-auto max-w-full" src={Progress} alt="" />
          </div>
        </section>
        <section className="mb-28">
          <StepBar stepNumber={'01'} text={'Create and enter your account!'} variant='first'/>
          <StepBar stepNumber={'02'} text={'Create your own goals and objectives.'} variant='second'/>
          <StepBar stepNumber={'03'} text={'Follow through and accomplish your objectives!'} variant='third'/>
        </section>
        <section className='flex flex-col mb-28'>
            <LittleBanner text='Strive for your goals!' ImgSrc={Goal} ImgText='Goalkeeper trying to defend its goal from a ball on top of him' textHighlight='bg-[#B9FF66]' />
            <div className="flex justify-end mb-9">
              <LittleBanner text='Picture your objectives!' ImgSrc={Camera} ImgText='LEMBRAR DE ESCREVER DPS' textHighlight='bg-white' imgBackground='bg-white' variant='second' />
            </div>
            <LittleBanner text='Achieve your dreams.' ImgSrc={Dream} ImgText='Image about a dream' textHighlight='bg-white' variant='third' /> 
        </section>
      </main>
      <footer  className="text-center py-12" style={{backgroundImage: `url(${Waves})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h1 className="text-xl font-semibold text-center align-text-bottom">Developed by Athosmfr</h1>
        <p className="mt-2 mb-4 text-center">Find and follow me on my social networks</p>
          {/* Social icons */}
          <div className="flex m-auto w-[5%] justify-around">
            <Link to="https://www.linkedin.com/in/athosmfr/"><Linkedin/></Link>
            <Link to="https://github.com/Athosmfr"><Github/></Link>
          </div>
      </footer>
    </div>
  )
}