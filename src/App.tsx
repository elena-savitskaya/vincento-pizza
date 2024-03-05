import "./scss/app.scss";
import Loadable from "react-loadable";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { MainLayout } from "./layouts/main-layout";

const Cart = Loadable({
  loader: () => import("./pages/cart"),
  loading: () => <div>Завантаження кошику...</div>,
});

const FullPizza = React.lazy(() => import("./pages/full-pizza"));
const NotFound = React.lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div>Кошик завантажується...</div>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="pizza/:id"
          element={
            <Suspense fallback={<div>Завантаження триває...</div>}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Завантаження триває...</div>}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
