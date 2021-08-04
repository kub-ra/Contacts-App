import {useState} from 'react'
import Formum from './Form'
import Listem from './list'
import {} from './style.css'




function Contects() {
    const [contact,setContact]=useState([
       
        {name:"Kübra",phone_number:1234},
        {name:"Ali",phone_number:5678},
        {name:"Emre",phone_number:5462},
        {name:"Hüseyin",phone_number:9876}
    ]);
   

    return (
        <div id="container">
            <h1>Contacts App</h1>
            <Listem contacts={contact}/>
            <Formum  add={setContact} contact={contact}/>
        </div>
    )
}

export default Contects;
