import React from 'react'
import Hero from './Hero'

import '../styles/main.css'
import ContentMain from './ContentMain'
import Aside from './Aside'

export default function Main() {
    return (
        <main>
            <Hero/>
            <section className='container-main'>
                <ContentMain/>
                <Aside/>
            </section>
        </main>
    )
}
