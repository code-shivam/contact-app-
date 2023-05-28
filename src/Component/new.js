import {useState} from "react"
import {useNavigate} from "react-router-dom"

export default function Home({arr,editText,setEditText,setArr}){
  const [index,setInd]=useState(-1)
  const [state,setState]=useState({
    name:"",
    email:"",
    number:""
  })
  const navigate=useNavigate()
  const [isEdit,setEdit]=useState(false)

  const handleEdit=(id)=>{
    if(isEdit){
      let x=[...arr]
    x[id]=state
    setArr(x)
      setEdit(false)
    }

  }
  const onhandleChange=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  
  return(
    <>
      <center>
    <h1>Home Page</h1><br/>
        <button onClick={()=>navigate("/contact")}>Go Contact</button>
        <div>
        {arr  && arr.map((item,ind)=>
      <div>
      <h4>Name:{isEdit && ind==index?<input defaultValue={item.name}
       onChange={(e)=>onhandleChange(e)} name="name"/>:item.name}</h4>
      <h4>Email:{isEdit  && ind==index?<input defaultValue={item.email} name="email" onChange={(e)=>onhandleChange(e)}/>:item.email}</h4>
      <h4>Number:{isEdit  && ind==index?<input defaultValue={item.number} name="number" onChange={(e)=>onhandleChange(e)}/>:item.number}</h4>
        <button onClick={()=>{setEdit(true);handleEdit(ind);setState({name:item.name,email:item.email,number:item.number});setInd(ind)}}>{isEdit?"Save":"Edit"}</button>
        <button>delete</button>
      </div>
                )}
        </div>
      </center>
    </>
  )
}