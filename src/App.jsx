import "./App.scss";
import SwitchRouter from "./routes/switchRouter";
import store from "./redux/reducer";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <SwitchRouter />
    </Provider>
  );
}

export default App;
