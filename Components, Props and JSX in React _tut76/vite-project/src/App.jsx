import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Card from "./components/card"
import "./App.css"
function App() {
  return (
    <>
      <Navbar/>
      <div className="main">
        <Card title ="Helllo this a box 1" des = "hello thsi is programmer 1"/>
        <Card title ="Helllo this a box 2" des = "hello thsi is programmer 2"/>
        <Card title ="Helllo this a box 3" des = "hello thsi is programmer 3"/>
        <Card title ="Helllo this a box 4" des = "hello thsi is programmer 4"/>
      </div>
      <Footer/>
    </>
  )
}

export default App
