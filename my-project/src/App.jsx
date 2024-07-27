

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  Contact,
  Skills,
  Overview,
  Project,
  NoPage
} from './Pages/index';

import Layout from "./Containers/Layout";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="Skills" element={<Skills />} />
            <Route path="Projects" element={<Project />} />
            <Route path="Overview" element={<Overview />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
