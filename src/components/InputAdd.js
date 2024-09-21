import React from "react";
import '../style/style.css'

class InputAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            nama : '',
            tag : ''
        };

        this.onNamaHandler = this.onNamaHandler.bind(this)
        this.onTagHandler = this.onTagHandler.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onNamaHandler(event){
        this.setState(()=> {
            return{
                nama : event.target.value
            }
        })
    }

    onTagHandler(event){
        this.setState(()=> {
            return{
                tag : event.target.value
            }
        })
    }

    onSubmit(event){
        event.preventDefault()
        this.props.addContact(this.state)
    }

    render() {
        return (
            <form className="contact-input" onSubmit={this.onSubmit}>
                <input placeholder="Masukkan nama" value={this.state.nama} onChange={this.onNamaHandler}/>
                <input placeholder="Masukkan tag" value={this.state.tag} onChange={this.onTagHandler}/>
                <button type="submit">Tambah</button>
            </form>
        );
    }
}

export default InputAdd;