import React, { useRef, useEffect, useState} from 'react'
import emailjs from '@emailjs/browser';

function EventReg() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

const form = useRef();

const [response, setResponse] = useState('')



    const sendEmail = (e) => {
        e.preventDefault();
      
        
      
        emailjs.sendForm('service_me2u88e', 'template_b86eegf', form.current, 'OQF4MUAEJnnn30HE4')
          .then((result) => {
              ;
          }, (error) => {
              console.log(error.text);
          });
          setResponse('Registracija sėkminga')
          e.target.reset()
      };

    return (
        <main className=' bg-black py-32 max-h'>
            <h1 className=' text-8xl angel text-orange-300 text-center p-8 pb-24 max-sm:text-7xl'>Renginiai</h1>

            <p className='text-orange-300 text-center'>Užsiregistravus į renginį su jumis susisieksime</p>

            <section className='container mx-auto flex justify-center'>
                
            
    <form className='flex justify-center flex-wrap w-2/5 m-7 max-lg:w-3/5 max-sm:w-full max-sm:my-20' ref={form} onSubmit={sendEmail}>
    <div className='flex flex-col m-3 mx-7'>
        <label className='w-32 text-2xl my-2 text-orange-300' htmlFor='fname' >Vardas</label>
        <input required className='w-64 rounded-md p-2 bg-slate-600 outline-orange-300' type="text" id="fname" name="firstname" placeholder="Jūsų vardas . ." />
    </div>

    <div className='flex flex-col m-3 mx-8'>
        <label className='w-32 text-2xl my-2 text-orange-300'>Paštas</label>
        <input required className='w-64 rounded-md p-2 bg-slate-600' type="email" id="email" name="email" placeholder="Pavadinimas@paštas.lt . ." />
    </div>

    <div className='flex flex-col m-3 mx-9'>
        <label className='w-34 text-2xl my-2 text-orange-300'>Telefonas <span className='text-sm text-orange-300'>(neprivalomas)</span></label>
        <input  className='w-64 rounded-md p-2 bg-slate-600' type="text" id="tel" name="tel" placeholder="Telefono numeris +370 ..." />
    </div>

    <div className='flex flex-col m-3 mx-16'>
        <label className='w-32 text-2xl my-2 text-orange-300 '>Renginiai</label>
        <select className="w-64 rounded-md p-3 bg-slate-600" name="renginiai" id="renginiai">
            <option value="Lugnasadas">Lugnasadas</option>
            <option value="Jolė">Jolė</option>
            <option value="Imbolkas">Imbolkas</option>
            <option value="Ostara">Ostara</option>
            <option value="Belteinas">Belteinas</option>
            <option value="Lita">Lita</option>
            <option value="Mabonas">Mabonas</option>
            <option value="Samainas">Samainas</option>
</select>
        {/* <textarea required className='w-full rounded-md p-2 bg-slate-600' id="subject" name="subject" rows={'4'} placeholder="Jūsu žinutė . ." ></textarea> */}
    </div>


    <div className='m-3 mt-8 mx-9 text-center'>
        <button type="submit" className='
          rounded-xl py-3 px-10 bg-orange-300 font-bold text-black
         hover:bg-orange-400' >Registruotis</button>
    </div>
    <div
        className='text-green-500 p-5 text-xl'
    >{response ? response : ''}</div>
</form>

            </section>
        </main>
    )
}


export default EventReg