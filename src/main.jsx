import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CaseStudiesHome from '../CaseStudiesHome.jsx'
import IUFPCaseStudy from '../IUFPCaseStudy.jsx'
import TEEPCaseStudy from '../TEEPCaseStudy.jsx'
import UIDCaseStudy from '../UIDCaseStudy.jsx'
import BoldMunchCaseStudy from '../BoldMunchCaseStudy.jsx'
import AILaunchpadCaseStudy from '../AILaunchpadCaseStudy.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/case_study">
      <Routes>
        <Route path="/" element={<CaseStudiesHome />} />
        <Route path="/iufp" element={<IUFPCaseStudy />} />
        <Route path="/teep" element={<TEEPCaseStudy />} />
        <Route path="/uid" element={<UIDCaseStudy />} />
        <Route path="/bold-munch" element={<BoldMunchCaseStudy />} />
        <Route path="/ai-launchpad" element={<AILaunchpadCaseStudy />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
