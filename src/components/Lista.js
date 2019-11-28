import React, { Component } from "react"

class Lista extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: "",
            list: []
            // persona: {
            //     nombre: ""
            // }
        }
    }
    agregarItem = event => {
        const newList = [...this.state.list] // copia
        newList.push(this.state.inputText)
        this.setState({ list: newList })
        console.log(this.state)
    }

    manejarCambio = event => {
        this.setState({ inputText: event.target.value })
    }

    render() {
        console.log("Se actualizo")
        return (
            <>
                <ul>
                    {this.state.list.map(function(item) {
                        return <li>{item}</li>
                    })}
                </ul>
                <input type="text" onChange={this.manejarCambio} />
                <button onClick={this.agregarItem}> Enviar </button>
            </>
        )
    }
}

export default Lista
