import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Accueil from './pages/Accueil'
import APropos from './pages/A-Propos'
import Logement from './pages/Logement'
import Erreur from './pages/Erreur'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Accueil />}></Route>
                <Route path="/a-propos" element={<APropos />}></Route>
                <Route path="/logement/:id" element={<Logement />}></Route>
                <Route path="*" element={<Erreur />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
)
