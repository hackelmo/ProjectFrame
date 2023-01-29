import { useEffect, useState } from "react";
import Header from "./components/Header";
import Join from "./ele/Join";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <Modal width="400px" showModal={showModal} setShowModal={setShowModal}>
        <Join setShowModal={setShowModal} />
      </Modal>

      <button onClick={() => setShowModal((prev) => !prev)}>버튼</button>
    </>
  );
}

export default App;
