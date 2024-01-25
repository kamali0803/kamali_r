import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Layout from "./Layout"
import Service from "./pages/Service"
export default function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="service" element={<Service/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  )
}


// import React from 'react'
// import Basic from './event/Basic'

// export default function App() {
//   return (
//     <div>
//       <Basic/>
//     </div>
//   )
// }

// import React from 'react'
// import Counter from './userstate/Counter'
// export default function App() {
//   return (
//     <div>
//       <Counter/>
//     </div>
//   )
// }
