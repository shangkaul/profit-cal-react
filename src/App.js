import "./styles.css";
import Form from "./Form";
import React, { useState } from "react";

export default function App() {
  var pal = false;

  var [formData, SetFormData] = useState({
    cp: 0,
    sp: 0,
    n: 0
  });
  var [res, setRes] = useState("");

  function handleForm(cp, sp, n) {
    SetFormData({
      cp: cp,
      sp: sp,
      n: n
    });
    var prof = (sp - cp) * n;
    var perc = prof / (cp * n);
    perc = (perc * 100).toPrecision(3);

    if (prof >= 0) {
      setRes(
        "Your profit is " + prof + " which comes out to be " + perc + "%."
      );
    } else {
      prof = prof * -1;
      perc = perc * -1;
      setRes("Your loss is " + prof + " which comes out to be " + perc + "%.");
    }
  }

  return (
    <div className="App">
      <Form handleForm={handleForm.bind(this)} />
      <br />
      <div className="result">{res}</div>
    </div>
  );
}
