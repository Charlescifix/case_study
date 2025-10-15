import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CaseStudiesHome from '../CaseStudiesHome.jsx'
import IUFPCaseStudy from '../IUFPCaseStudy.jsx'
import TEEPCaseStudy from '../TEEPCaseStudy.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CaseStudiesHome />} />
        <Route path="/iufp" element={<IUFPCaseStudy />} />
        <Route path="/teep" element={<TEEPCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
