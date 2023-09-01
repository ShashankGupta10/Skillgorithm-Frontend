import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useMemo } from "react";
import { useSelector } from "react-redux";
function App() {
  const mode = useSelector((state) => state.mode);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
