import { useRef, useState } from "react"
import { useEffect } from "react"
import { nanoid } from "nanoid"
// import { Input } from "../styled/Input"

export const AddHouse = () => {

    const [form, setForm] = useState({
    title:"",
    ingredients:"",
    cooking_time:"",
    image:"",
    instruction:"",
    })
    const [data, setData] = useState([])
    const [info, setInfo] = useState([])

 const ref = useRef()
    const handleChange = (e) =>{
        // console.log("ref",ref.current.files)
    let {name, value } = e.target


    setForm({
        ...form,
        [name]: value
    })
    }

   useEffect(() => {
    getForm()
    },[])

    const getForm = () =>{
        fetch("http://localhost:3001/AddHouse.jsx").then(d => d.json()).then(res =>{
            setData(res)
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
    
        const payload = {
            title:form.title,
            ingredients:`Ingredients-${form.ingredients}`,
            cooking_time:`Cooking Time-${form.cooking_time}Hrs`,
            image:form.image,
            instruction:`Instruction-${form.instruction}`,
            id:nanoid(4)
        }
        fetch("http://localhost:3001/src/AddHouse.jsx",{
            method: "POST",
            body: JSON.stringify(payload),
            headers:{
                "content-type": "application/json" 
            }
        }).then(() =>{
            // console.log("setData")
            getForm()
        })
        // console.log('form:', form)
        
        
    }
    
    // console.log('data:', data)
   
    console.log(info)



  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input onChange={handleChange} type="text" className="name" value={""} required />
        <br />
        <label>ownerName</label>
        <input onChange={handleChange} value={""} type="text" className="ownerName" required />
        <br />
        <label>address</label>
        <input onChange={handleChange} value={""} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input onChange={handleChange} value={""} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange={handleChange} value={""} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input value={""} type="text" className="image" required />
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};
