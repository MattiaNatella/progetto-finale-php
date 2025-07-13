
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DefaultLayout from './layouts/DefaultLayout.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={HomePage} />
            {/* inserire routes per HomePage e AthletePage */}

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
