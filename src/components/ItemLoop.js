import React from "react";
import Items from "./Items";

function ItemLoop({contacts}){
    return(
        <div className="contact-list">
            {
                contacts.map((contact)=> (
                    <Items key={contact.id}
                    {...contact}/>
                ))
            }
        </div>
    )
}

export default ItemLoop