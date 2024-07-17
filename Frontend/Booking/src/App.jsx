import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page1 from './components/page1'
import Page2 from './components/page2'
import Page3 from './components/page3'
import Page4 from './components/page4'
import Page5 from './components/page5'
import Page6 from './components/page6'
import 'flowbite/dist/flowbite.min.js';
import './App.css'





function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
          <Route path='/page5' element={<Page5 />} />
          <Route path='/page6' element={<Page6 />} />
        </Routes>
      </Router>
    </>
  )
}
export default App
