import axios from "axios";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div>
      <Mycomponent />
    </div>
  );
}

function Mycomponent() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const addUser = async () => {
    if (msg == "") {
      alert("validation failed");
      return;
    }
  };

  return (
    <div>
      <div className="row bg-dark text-light p-3">
        <div className="col col-sm-2 align-content-end">
          <h1> MyChatApp</h1>
        </div>
        <div className="col col-sm-10 justify-content-center p-3">
          <h6> [by Sonali Zanjurne 210940520099]</h6>
        </div>
      </div>

      <div className="row">
        <div className="col-10">
          <input
            className="form-control form-control-lg m-2"
            type="text"
            name=""
            id=""
            value={msg}
            onChange={handleMsgChange}
            placeholder="lets chat here...."
          />
        </div>
        <div className="col-2">
          <input
            className="btn btn-primary w-75 p-2 m-2"
            type="button"
            name=""
            value="SEND"
            onClick={addUser}
          />
        </div>

        {list.map((item, index) => (
          <div key={index} className="alert alert-secondary fs-3">
            {list.msg}
          </div>
        ))}
      </div>

      <div className="row">
        <div className="col-12">
          <input
            className="form-control form-control-lg m-2"
            type="text"
            name=""
            id=""
            value={msg}
            onChange={handleMsgChange}
            placeholder="Hi...."
          />
        </div>
      </div>
    </div>
  );
}
