import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

class TextArea extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      texto: "",
      maxCaracteres : 5,
      restantes : 5
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const textoCompleto = event.target.value;
    const textoCortado = textoCompleto.trim();

    if(textoCompleto.length <= this.state.maxCaracteres){
      this.setState({
        texto: textoCortado,
        restantes : this.state.maxCaracteres - textoCortado.length
      });
    }

  }

  render () {
    return(
      <div>
        <h1>Write your message</h1>
        <input value={this.state.texto} type='text' onChange={this.handleChange}/>
        <h3>Cant. de Letras: {this.state.restantes}</h3>
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

