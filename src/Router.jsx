import { Routes, Route } from "react-router-dom";

import { StandardLayout } from "./layouts";

import { Home, About } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<StandardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export { Router };
