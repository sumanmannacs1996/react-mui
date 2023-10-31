import "./App.css";
import MuiAutoCompleateAsync from "./components/MuiAutoCompleateAsync";
import MuiAutoComplete from "./components/MuiAutoComplete";
import MuiButton from "./components/MuiButton";
import MuiCheckbox from "./components/MuiCheckbox";
import MuiRadioButton from "./components/MuiRadioButton";
import MuiRatting from "./components/MuiRatting";
import MuiSelect from "./components/MuiSelect";
import MuiSwitch from "./components/MuiSwitch";
import MuiTextField from "./components/MuiTextField";
import MuiTypography from "./components/MuiTypography";

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MuiSelect />
      <MuiRadioButton />
      <MuiCheckbox />
      <MuiSwitch />
      <MuiRatting />
      <MuiAutoComplete />
      <MuiAutoCompleateAsync />
    </div>
  );
}

export default App;
