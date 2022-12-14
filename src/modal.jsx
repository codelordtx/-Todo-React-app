function Modal(props) {
  function confirmHandler() {
    props.onConfirm();
  }

  // function cancelHandler() {
  //   props.onConfirm();
  // }

  return (
    <div className="modal">
      <h3 className="delt"> Delete Todo </h3>
      <button className="btn cancel" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn confirm" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export function DoneModal(props) {
  function confirmHandler() {
    props.onConfirmD();
  }

  // function cancelHandler() {
  //   props.onConfirm();
  // }

  return (
    <div className="modal" id="TC">
      <h3 onClick={confirmHandler} className="TCh">
        {" "}
        Todo Completed{" "}
      </h3>
    </div>
  );
}
export default Modal;
