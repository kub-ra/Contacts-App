import {useState} from 'react'


function Formum({add,contact}) {
    const [form,setForm]= useState({name:"",phone_number:""})
    const changeİnput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    };
    const onsubmit=()=>{
        if(form.name ==="" || form.phone_number===""){
            return false;
        }
        add([...contact,form]);
        setForm({name:"",phone_number:""})
       
    }
    return (
        <div>
            <div>
                <input 
                 name="name" 
                 placeholder="fullname" 
                 onChange={changeİnput}
                 value={form.name}/>
            </div>
            <div>
                <input name="phone_number" placeholder=" phone number" onChange={changeİnput}
                value={form.phone_number}/>
            </div>
            <div>
                <button onClick={onsubmit}>add</button>
            </div>
        </div>
    )
}

export default Formum
