import { useState } from "react";
import Backdrop from "./backdrop";
import Modal from "./modal";
import { DoneModal } from "./modal";
// import Bottom from "./bottom";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalDIsOpen, setModaDlIsOpen] = useState(false);

  function showModal() {
    setModalIsOpen(true);
    document.body.style.overflowY = "hidden";
  }
  function closeModal() {
    setModalIsOpen(false);
    document.body.style.overflowY = "auto";
  }
  function showDoneModal() {
    setModaDlIsOpen(true);
    document.body.style.overflowY = "hidden";
  }
  function closeDoneModal() {
    setModaDlIsOpen(false);
    document.body.style.overflowY = "auto";
  }
  return (
    <div>
      <div className="main">
        <h3 className="propstext">{props.text}</h3>
        <div className="Todo-div">
          <button className="btnm cre" onClick={showDoneModal}>
            Done
          </button>
          <button className="btnm del" onClick={showModal}>
            Delete
          </button>
        </div>
      </div>
      {modalIsOpen ? (
        <Modal onCancel={closeModal} onConfirm={closeModal} />
      ) : null}
      {modalIsOpen && <Backdrop onClick={closeModal} />}

      {modalDIsOpen && <Backdrop onClick={closeDoneModal} />}
      {modalDIsOpen && <DoneModal onConfirmD={closeDoneModal} />}
      {/* <Bottom onClickk={showModal} /> */}
    </div>
  );
}
export default Todo;
