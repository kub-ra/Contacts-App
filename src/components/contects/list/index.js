import {useState} from 'react'

function Listem({contacts}) {
    const [filters,setFilters]=useState("");
    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key)=>
        item[key].toString().toLowerCase().includes(
            filters.toLowerCase())
        );
});
    return (
        <div>
            <input placeholder="Ara" value={filters} onChange={(event)=>setFilters(event.target.value)}/>
            <ul>
            {filtered.map((contact,i)=>(
                <li key={i}>
                    <span>{contact.name}</span>
                    <span>{contact.phone_number}</span>
                    </li>

            ))}
            </ul>
            <p>Total Contacts ({filtered.length})</p>
        </div>
    )
}

export default Listem;
