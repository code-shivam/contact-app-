import React, { useState } from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";

function Home({ contact, setContact }) {
  const [edit, setEdit] = useState(false);

  const navigate = useNavigate();
  const [index,setInd]=useState(-1)

  const [state,setState]=useState({
    name:"",
    email:"",
    number:""
  })
  const editdata = (id) => {
    setEdit(true);
    if(edit){
      let x=[...contact]
    x[id]=state
    setContact(x)
      setEdit(false)
    }
  };
  const onhandleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const data = contact;
  const dele = (id) => {
    const datanew = data.filter((ele) => ele.id != id);
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
                  <span>Name</span> - {edit?<input defaultValue={el.name} onChange={(e)=>onhandleChange(e)}/>:el.name} <span>Mob no</span>- {el.phone}{" "}
                  <span>Email</span>- {el.email}
                </p>{" "}
              </div>
              <div>
                <button className="smallbtn" onClick={() => editdata(key)}>
                {edit?"Save":"Edit"}
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
