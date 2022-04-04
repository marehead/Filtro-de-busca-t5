import React from "react";

export default class App extends React.Component {
  state = {
    listaDefrutas: [
      "Banana",
      "Abacaxi",
      "Amora",
      "Ameixa",
      "Manga",
      "Melão",
      "Limão",
      "Laranja"
    ],
    frutas: []
  };

  filtro = (event) => {
    let { listaDefrutas } = this.state;

    const frutaFiltrada = listaDefrutas.filter((item) => {
      if (item.includes(event.target.value)) {
        return true;
      }
    });

    this.setState({
      frutas: frutaFiltrada
    });
  };

  render() {
    return (
      <div>
        <h1>Lista de frutas</h1>
        <input
          type="text"
          placeholder="Digite uma fruta..."
          onChange={this.filtro}
        />
        <ul>
          {this.state.frutas.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}
