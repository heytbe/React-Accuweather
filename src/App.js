import "./assets/css/base.css"
import "./assets/css/style.css"
import Navi from "./components/navi/Navi";
import Weather from "./components/weather/Weather"
import Next from "./components/next/Next"
function App() {
  return (
    <div className="fullscreen">
      <Navi></Navi>
      <div className="flex-row-between-start bodyarea">
        <div className="row2">
          <Weather></Weather>
        </div>
        <div className="row8">
          <Next></Next>
        </div>
      </div>
    </div>
  );
}

export default App;
