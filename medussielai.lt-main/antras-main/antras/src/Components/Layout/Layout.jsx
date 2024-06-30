import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

function Layout({ children }) {

    const navLinks = [
        {
            name: 'Pagrindinis',
            to: '/'
        },
        {
            name: 'Apie mane',
            to: '/Apie'
        },
        {
            name: 'Asmeninė konsultacija',
            to: '/konsultacija'
        },
        {
            name: 'Santykių suderinimas',
            to: '/suderinimas'
        },
        {
            name: 'Renginiai',
            to: '/renginiai'
        },
        {
            name: 'Atsiliepimai',
            to: '/atsiliepimai'
        },
 
    ]

  return (
    <div>
        <Header NavItems={navLinks} />
        {children}
        <Footer footNavLinks={navLinks} />
    </div>
  )
}

export default Layout