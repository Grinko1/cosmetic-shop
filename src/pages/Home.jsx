import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Category/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewLetter from '../components/NewLetter'
import Slider from '../components/Slider'
import Popular from '../components/Popular/PopularBlock'

function Home() {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slider/>
            <Categories/>
            <Popular/>
            <NewLetter/>
            <Footer/>
        </div>
    )
}

export default Home
