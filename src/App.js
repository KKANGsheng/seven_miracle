import "./style.css"
import Navbar from "./Components/Navbar"
import data from "./data"
import Place from "./Components/Place"

export default function App() {

const info=data.map(infos=>{
  return(
  <Place
  key={infos.id}
  items={infos}
  />
  )
})

  return (
    <div className="App">
      <Navbar/>
      {info}
    </div>
  );
}


