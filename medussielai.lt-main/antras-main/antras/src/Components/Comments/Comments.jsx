import React from 'react'
import { useState, useEffect } from "react";
import './Comments.css';

export default function Comments() {


    const [atsiliepimai, setAtsiliepimai] = useState(''); 
    const [vardas, setVardas] = useState('');
    const [komentaras, setKomentaras] = useState('');
    const [message, setMessage] = useState(false)
    const [atsiliepimuNera, setAtsiliepimuNera] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    

    useEffect(() => {
        // async function logMovies() {
        //     const response = await fetch("http://91.108.122.115:8080/atsiliepimai",{
        //         method: "GET",
        //         headers:{
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json'
        //         }
        //     }
        //     );
        //     const comments = await response.json();
        //     setAtsiliepimai(comments)
        //     if(comments.length == 0){
        //         setAtsiliepimuNera('Atsiliepimų nėra . . .')
        //     }
        //   }
        //     logMovies();          

            fetch('https://atsiliepimai.medussielai.lt/atsiliepimai', {
                
                method: "GET",
                headers:{
                    Accept: 'application/json',
                }
            })
   .then( response => response.json() )
   .then( data => setAtsiliepimai(data) )
   .catch( err => console.log(err))

    }, [])

  return (
    <main className=" bg-black font-serif secondBg text-white">
     
        <section className='py-10'>
            <h1 className='text-orange-300 text-2xl text-center mb-8'>Sukurti atsiliepimą</h1>
            <form className='flex justify-center box-border'
             onSubmit={(e) => {
                e.preventDefault();

                fetch('https://atsiliepimai.medussielai.lt/prideti', {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        vardas: vardas,
                        atsiliepimas: komentaras
                    })
                }).then(res => res.json())
                .then(res => setMessage('Išsiųsta'))
            
                e.target.vardas.value = '';
                e.target.komentaras.value = '';
                setVardas('')
                setKomentaras('')
                
                setTimeout(function() {
                    
                    location.reload()
                  }, 2000);

            }}>

                <div className='text-center border-2 border-orange-300 max-sm:w-full max-md:p-5 max-sm:border-0  p-12 '>

                   <div >
                    <label className='text-2xl my-2 text-orange-300' htmlFor="vardas">Vardas</label>
                    <div className="w-full flex justify-center">
                       <input className='mt-8 mb-8 rounded-md p-2 bg-slate-600 outline-orange-300'
                        minLength={3} maxLength={20} value={vardas} required type="text" id='vardas' name='vardas' 
                        onChange={(e) => {
                            let newValue = e.target.value
                            setVardas(newValue.charAt(0).toUpperCase() + newValue.slice(1));
                        }}/> 
                    </div>                  
                </div>

                <div>
                    <label className='text-2xl my-2 text-orange-300' htmlFor="komentaras">Komentaras</label>
                    <div className="w-full flex justify-center">
                       <textarea className='m-8 rounded-md p-2 bg-slate-600 outline-orange-300 max-sm:w-full  w-96' placeholder="500 simbolių . . ." maxLength={550}  required name="komentaras" id="komentaras" rows="10" 
                       minLength={10}
                       value={komentaras}
                       onChange={(e) => {
                        let newValue = e.target.value
                        setKomentaras(newValue.charAt(0).toUpperCase() + newValue.slice(1));
                    }}
                       ></textarea> 
                    </div>                   
                </div> 
                <div>
                    <button 
                    type="submit"
                    className='
                    rounded-xl py-4 px-14 bg-orange-300 font-bold text-black
                   hover:bg-orange-400 '>
                    Siųsti
                   </button>
                </div>
                </div>
            </form>
        </section>

        {message && <div className='text-center text-xl text-green-400'>{message}</div>}

        <h1 className='text-center text-4xl px-10 pt-10 text-orange-300'>Atsiliepimai</h1>

        <section className='atsiliepimai_main flex justify-center'>
                    <div className='box-border atsiliepimaiWrap p-7 w-4/5 max-sm:w-full'>
                            {atsiliepimai ? atsiliepimai.map((atsil, num) =>{
                                return(
                                    <div className='commentBox p-5 border-gray-600 border-4 rounded-md my-8 text-justify ' key={num}>
                                        <h3 className='text-xl text-orange-300'>{atsil.vardas}</h3>
                                        <div className='comment py-2 text'>{atsil.komentaras}</div>
                                    </div>
                                )
                            }) : <div className='text-center  text-3xl my-12 p-5 border-2 border-gray-600 rounded-md'>
                                Atsiliepimu nera
                            </div>  }
                    </div>
                </section>

        </main>
  )
}

