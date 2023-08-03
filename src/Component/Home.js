import React, { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

function Home({ contact, setContact }) {
  const [upname, setUpName] = useState("");
  const [upphone, setUpPhone] = useState("");
  const [upemail, setUpEmail] = useState("");
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();
  const data = contact;
  const editdata = (id) => {
    setEdit(true);
    setUpName(data[id].name);
    setUpPhone(data[id].phone);
    setUpEmail(data[id].email);

    if (edit) {
      let x = [...data];
      data[id].name = upname;
      data[id].phone = upphone;
      data[id].email = upemail;
      x[id] = data[id];
      setContact(x);
      setEdit(false);
      setUpEmail("");
      setUpName("");
      setUpPhone("");
    }
    console.log(data);
  };

  const dele = (id) => {
    const datanew = data.filter((ele) => ele.id !== id);
    setContact(datanew);
  };

  return (
    <div>
      <h1> Home Page</h1>
      <button className="bigbtn" onClick={(e) => navigate("/Contact")}>
        Create Contact
      </button>
      <div>
        <p style={{ fontSize: "25px", color: "#ffffff" }}> Contact List </p>
        {data?.map((el, key) => {
          return (
            <div className="list" key={key}>
              <div>
                <p>
                  {" "}
                  <span>Name</span> -{" "}
                  {edit ? (
                    <input
                      type="text"
                      value={upname}
                      onChange={(e) => setUpName(e.target.value)}
                    />
                  ) : (
                    el.name
                  )}{" "}
                  <span>Mob no</span>-{" "}
                  {edit ? (
                    <input
                      type="number"
                      value={upphone}
                      onChange={(e) => setUpPhone(e.target.value)}
                    />
                  ) : (
                    el.phone
                  )}
                  <span>Email</span>-{" "}
                  {edit ? (
                    <input
                      type="email"
                      value={upemail}
                      onChange={(e) => setUpEmail(e.target.value)}
                    />
                  ) : (
                    el.email
                  )}
                </p>{" "}
              </div>
              <div>
                <button className="smallbtn" onClick={() => editdata(key)}>
                  {edit ? "Save" : "Edit"}
                </button>
                <button className="smallbtn" onClick={(e) => dele(el.id)}>
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
