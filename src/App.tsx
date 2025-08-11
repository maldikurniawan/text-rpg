import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFound } from "@/components";
import GamePage from "./pages/GamePage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GamePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  )
}

export default App