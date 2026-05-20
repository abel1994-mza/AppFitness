import { BrowserRouter,Router,Route, Routes } from "react-router-dom" 
import Layout from "./components/layout/Layout"
import ScrollToTop from "./components/layout/ScrollToTop"
import Home from "./Pages/Home"
import Plans from "./Pages/Plans"
import Contact from "./Pages/Contact"
import Info from "./Pages/Info"
import Training from "./Pages/Training"
import PageLayout from "./components/layout/PageLayout"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Profile from "./Pages/Profile"


function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
     <Routes>
  {/* Sin layout */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Con layout */}
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile/>} />
    <Route element={<PageLayout />}>
      <Route path="/plans" element={<Plans />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/training" element={<Training />} />
      <Route path="/about" element={<Info />} />
    
    </Route>
  </Route>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App
