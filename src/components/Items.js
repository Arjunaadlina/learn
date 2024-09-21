import React from "react";
import '../style/style.css'

function Items({nama, tag}){
    return(
        <div className="contact-item">
            <div className="contact-item__body">
                <p className="contact-item__title">{nama}</p>
                <p className="contact-item__username">{tag}</p>
            </div>
        </div>
    )
}

export default Items;