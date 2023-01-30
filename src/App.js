import { useEffect, useState } from "react";
import Header from "./Components/Header";
import Join from "./Elements/Join";
import Modal from "./Components/Modal";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <Header />
      <Modal width="400px" showModal={showModal} setShowModal={setShowModal}>
        <Join setShowModal={setShowModal} />
      </Modal>
      <Routes>
        <Route path="/" element={<Home setShowModal={setShowModal} />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
