import React, { useState, useEffect, useRef } from 'react'
import { ContactUs } from './email'



function Contact() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <main className=' bg-black py-32 max-h'>
            <h1 className='text-8xl angel text-orange-300 text-center p-8 max-sm:text-6xl'>Susisiekti</h1>
            <section className='container mx-auto flex justify-center'>
                <ContactUs />
                
            </section>
        </main>
    )
}

export default Contact