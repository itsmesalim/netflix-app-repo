import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;