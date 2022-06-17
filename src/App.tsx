import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import SwitchRoute from "routes/SwitchRouter";

function App() {
  return (
    <BrowserRouter>
      <SwitchRoute />
    </BrowserRouter>
  );
}

export default App;
