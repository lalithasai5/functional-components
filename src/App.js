
import "./App.css";
import HerosList from "./components/HerosList";

function App() {
  return (
    <div className="App">
      <h2>Tollywood Actors</h2>
      
       <HerosList name="Prabhas" age="43" profession="Actor" pic="./images/prabhas.jpg"></HerosList>
       <HerosList name="Alluarjun" age="42" profession="Actor" pic="./images/alluarjun.jpg"></HerosList>
       <HerosList name="NTR"      age="41" profession="Actor" pic="./images/ntr.jpg"></HerosList>
       <HerosList name="PavanKalyan" age="53" profession="Actor" pic="./images/pk.jpg"></HerosList>
       <HerosList name="Nani"    age="40" profession="Actor" pic="./images/nani.jpg"></HerosList>
       <HerosList name="MaheshBabu" age="49" profession="Actor" pic="./images/maheshbabu.jpg"></HerosList>
    </div>
  );
}

export default App;
