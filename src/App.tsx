import { Route, BrowserRouter, Routes } from "react-router-dom";
import { About, Home } from "./components";

const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
