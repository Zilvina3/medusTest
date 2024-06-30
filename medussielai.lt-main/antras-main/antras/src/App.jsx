import AboutMe from './Components/AboutMe/AboutMe';
import Comments from './Components/Comments/Comments';
import Conections from './Components/Conections/Conections';
import Consultation from './Components/Consultation/Consultation';
import Contact from './Components/Contact/Contact';
import EventReg from './Components/Contact/EventReg';
import Events from './Components/Events/Events';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import WrongPath from './Components/WrongPath/WrongPath';
import './index.css'
import { Routes, Route } from "react-router-dom"

function App() {


  return (
    <Routes>
      <Route path={'/'} element={<Layout><Home /></Layout>} />
      <Route path={'/susisiekti'} element={<Layout><Contact /></Layout>} />
      <Route path={'/Apie'} element={<Layout><AboutMe /></Layout>} />
      <Route path={'/konsultacija'} element={<Layout><Consultation /></Layout>} />
      <Route path={'/suderinimas'} element={<Layout><Conections/></Layout>} />
      <Route path={'/registruotis'} element={<Layout><EventReg /></Layout>} />
      <Route path={'/renginiai'} element={<Layout><Events /></Layout>} />
      <Route path={'/atsiliepimai'} element={<Layout><Comments /></Layout>} />
      <Route path={'*'} element={<Layout><WrongPath /></Layout>} />
    </Routes>
  )
}

export default App;
