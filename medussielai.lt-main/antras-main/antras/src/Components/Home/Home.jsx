import React, { useEffect } from 'react'
import './Home.css'
import { RevealOnScroll } from '../Layout/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import neringaFt3 from './neringa3.jpg'
import newSecond from './newSecond.jpg'

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const navigate = useNavigate();

  return (
    <main>
      <div className='main h-screen pb-34'>
        <section className='container  pl-32 pt-20 animate-fade-right animate-once animate-ease-in lg:pl-24 max-sm:pl-8'>
          <h1 className='vard 2xl:text-9xl angel text-orange-300 pt-10 pb-8 xl:text-8xl lg:text-7xl md:text-6xl sm:text-5xl max-sm:text-5xl'>Neringa Sala</h1>
          <p className='par text-4xl angel text-orange-300 sm:text-3xl'>Kaip atrasti savo kelią?</p>
          <div className='py-10'><button className=" bg-orange-300 font-bold hover:bg-orange-500 text-gray-800
          py-4 px-12   rounded-xl shadow-md hover:trasition hover:-translate-y-1 duration-300 delay-100"
            onClick={() => { navigate('/susisiekti') }}>
            Susisiekti
          </button>
          </div>
        </section>
      </div>

      <section className='border-t-2 border-orange-300 bg-black '>
        <RevealOnScroll effect={'animate-fade-right animate-once animate-ease-in'}>
          <div className='container flex flex-wrap px-8 xl:w-3/5 xl:ml-64 pt-14 pb-20 '>
            <h1 className='text-5xl angel text-orange-300 py-9'>Apie mane</h1>
            <p className='pb-5 text-xl text-justify'>Gyvenimo knyga neturi juodraščio. Tik atvertę naują puslapį galime pamatyti, kaip pamažu, o kartais ir pasiutusiai greitai jis užsipildo. Tai baugina, trikdo, o kartais net priverčia per ilgai užsibūti ten, kur mums ne vieta. Visgi pasaulis nesustabdomai keičiasi ir toje pokyčių karuselėje kiekvienas galiausiai būna priverstas susitikti su pačiu savimi.
            </p>

            <div className='flex justify-center w-full py-20'>
              <img src={neringaFt3} alt="Neringa" width={400}/>
            </div>

            <p className='pb-5 text-xl text-justify'>Esu tam, kad padėčiau visiems norintiems susipažinti su tikruoju savimi. Sielos paveikslas ne visada atitinka susikurtus lūkesčius. Juk ir neturi atitikti! Visgi turime galią šiek tiek pataisyti spalvas bei atspalvius. Ir taip patobulėję, išdrįsti žengti nauju, gerokai šviesesniu taku. Kviečiu statyti naujus tiltus ir kreipti savosios gyvenimo upės vagas su sąmoningumu bei dėkingumu. Tai padaryti kiekvienas turi pats. Aš galiu tik palydėti it jau šioje kelionėje ne kartą pabuvosi gidė ar it palaikanti mokytoja išmokyti naudotis pačiais efektyviausiais įrankiais, kuriais mus apdovanojo gamta – dėmesingumu, kvėpavimu ir nuo prietarų laisva mąstysena.
            </p>

            <div className='flex justify-center w-full py-20'>
              <img src={newSecond} alt="Neringa" width={800}/>
            </div>

            <p className='pb-5 text-xl text-justify'>
              Pažinimo ir tobulėjimo keliu pati einu jau daugiau nei dvi dešimtis metų. Per savo karjerą mėginau žiūrėti į žvaigždes, stengiausi net kyštelti nosį anapus ar perskaityti subtiliųjų energijų padiktuotas žinutes psichologijos kortose. Šie įdomūs, bet sunkiai įveikiami laipteliai galiausiai mane atvedė prie suvokimo, kad tikroji jėga slypi pačio žmogaus sielos, kūno ir proto harmonijoje. Būtent čia glūdi įstabi savęs ir pasaulio pažinimo dovana, kurią tikslingai veikdami kiekvienas galime išpakuoti. Tad, jeigu jaučiatės pasirengę pasikeisti, kviečiu prisijungti. Kartu galėsime pažvelgti į praeitį, dabartį ir ateitį bei nuspręsti, kokius žingsnius reikia žengti, kad taptumėte laimingesni ir sėkmingesni.
            </p>
            <div>
              <button type='button' onClick={() => { navigate('/susisiekti') }} className='py-5 px-8  rounded-xl bg-orange-300 my-5
              text-gray-800 font-bold hover:bg-orange-500 shadow-md hover:trasition hover:-translate-y-1 duration-300 delay-100'>Paklausk manęs</button>
            </div>
          </div>
        </RevealOnScroll>
      </section>

    </main>
  )
}

export default Home;