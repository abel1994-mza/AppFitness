import { BrowserRouter,Router,Route, Routes } from "react-router-dom" 
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/layout/ScrollToTop"
import Home from "./Pages/Home"
import Plans from "./Pages/Plans"
import Contact from "./Pages/Contact"
import Info from "./Pages/Info"
import Training from "./Pages/Training"
import PageLayout from "./components/layout/PageLayout"
function App() {


  return (
    <>
    <BrowserRouter >
    <ScrollToTop/>
     <Layout >
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route element={<PageLayout />} >
        <Route path="/plans" element={<Plans/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/training" element={<Training/>}/>
        <Route path="/about" element={<Info/>}/>      
         
        </Route>
       


      </Routes>
     </Layout>
    </BrowserRouter>
    
    </>
  )
}

export default App
