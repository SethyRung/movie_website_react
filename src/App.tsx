import { Route, Routes } from "react-router-dom";
import "./App.css";
import Default from "./layouts/default";
import { routes } from "./routes";

function App() {
  return (
    <Default>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </Default>
  );
}

export default App;
