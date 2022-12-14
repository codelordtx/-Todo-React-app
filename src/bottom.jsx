function Bottom(props) {
  function showm() {
    props.onClickk();
  }
  return (
    <div className="mainu" onClick={showm}>
      <h3>Additional Notes beside </h3>
    </div>
  );
}

export default Bottom;
