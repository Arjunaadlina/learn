import React from "react";
import '../style/style.css';
import { Link } from "react-router-dom";
import {BsPlusSquareFill} from "react-icons/bs"

function Navigasi({keyword, keywordChange}){
    return(
        <div style={{display : "flex", justifyContent:"space-between", alignItems:'center'}}>
            <Link to="/" style={{textDecoration :'none', color :'#000'}}><h2>Aplikasi Kontak</h2></Link>
                <input
                    placeholder="Cari berdasarkan nama"
                    className="search-bar"
                    value={keyword}
                    onChange={(event)=> keywordChange(event.target.value)}
                />
            <Link to="/add" style={{color :'#000'}}><BsPlusSquareFill style={{fontSize: 30}}/></Link>
        </div>
    )
}
export default Navigasi;