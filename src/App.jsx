import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Mission from './components/Mission'
import CtaSection from './components/CtaSection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Mission />
        <CtaSection />
      </main>
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto text-center text-sm text-gray-500">
          <p>© 2025 GymBro. All rights reserved.</p>
      </div>
      </footer>
      </div>
  )
}

export default App
