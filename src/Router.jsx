import { Routes, Route } from "react-router-dom";

import { StandardLayout } from "./layouts";

import { Home, About, NotFound } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<StandardLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export { Router };
