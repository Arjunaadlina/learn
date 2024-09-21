import React from "react";
import { addContact } from "../utils/data";
import InputAdd from "../components/InputAdd";
import { useNavigate } from "react-router-dom";

function AddPage(){
    const navigate = useNavigate()

    function add(contact){
        addContact(contact)
        navigate("/")
    }
    return(
        <section>
            <InputAdd addContact={add}/>
        </section>
    )
}

export default AddPage;