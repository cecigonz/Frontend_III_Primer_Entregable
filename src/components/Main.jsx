import React, { Component } from "react";
import data from "./data.json";
import Historia from "./Historia";
import Opciones from "./Opciones";
import Recordatorio from "./Recordatorio";

const historialLetras = [];

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            letra: "",
        }
    }

    optionClick = (event) => {
        if (this.state.index >= 7) {
            alert("Fin!");
        }
        else {
            this.setState({
                index: this.state.index +
                    (this.state.letra !== "A" ? 1 : 2) +
                    (event.target.id === "B" ? 1 : 0),
                letra: event.target.id,
            }, 
            this.agregarLetraHistorial);
        }
    }

    agregarLetraHistorial() {
        historialLetras.push(this.state.letra);
    }

    render() {
        return (
            <div className="layout">
                <Historia
                    historia={data[this.state.index].historia}
                />
                <Opciones
                    optionClick={this.optionClick}
                    opcionA={data[this.state.index].opciones.a}
                    opcionB={data[this.state.index].opciones.b}
                />
                <Recordatorio
                    letra={this.state.letra}
                    historial={historialLetras.map((e, index) => (<li key={index}>{e}</li>), data[this.state.index].id)}
                />
            </div>
        );
    }
}
export default Main;