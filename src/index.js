import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

class TextArea extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      contador : 0
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const textoCompleto = event.target.value;
    const textoCortado = textoCompleto.trim();

    const cantLetras = textoCortado.length;

    this.setState({contador : cantLetras});
  }

  render () {
    return(
      <div>
        <h1>Write your message</h1>
        <input type='text' onChange={this.handleChange}/>
        <h3>Cant. de Letras: {this.state.contador}</h3>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TextArea />
  </React.StrictMode>
);

