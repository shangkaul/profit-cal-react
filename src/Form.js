import "./styles.css";

export default function Form(props) {
  function formHandler(e) {
    e.preventDefault();
    props.handleForm(e.target.cp.value, e.target.sp.value, e.target.n.value);
  }
  return (
    <div className="Form">
      <form onSubmit={formHandler.bind(this)}>
        <div className="forminp">
          <label>Initial Price</label>
          <input type="number" name="cp" />
        </div>
        <br />
        <div className="forminp">
          <label>Quantity of Stocks</label>
          <input type="number" name="n" />
        </div>
        <br />
        <div className="forminp">
          <label>Final Price</label>
          <input type="number" name="sp" />
        </div>
        <br />
        <input className="sub-btn" type="submit" value="Submit" />
      </form>
    </div>
  );
}
