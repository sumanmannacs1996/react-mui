import "./App.css";
import MuiButton from "./components/MuiButton";
import MuiSelect from "./components/MuiSelect";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
    </div>
  );
}

export default App;
