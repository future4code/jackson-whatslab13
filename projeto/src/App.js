import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    listaMensagem : [
      
    ],
    inputUsuario: "",
    inputMensagem: "",
  }

  adicionarUsuario = () => {


    //novabranch

    const novoUsuario  = {
      novoUsuario: this.state.inputUsuario,
      novaMensagem: this.state.inputMensagem
    }

    const novaListaMensagens = [...this.state.listaMensagem,
       novoUsuario];
  
    this.setState({novaListaMensagem: novaListaMensagens, 
      inputUsuario: "", 
      inputMensagem: ""})

  }

  onChangTextoUsuario = (event) => {
    this.setState({inputUsuario : event.target.value})
  
  }

  onChangeTextoMensagem =(event)=> {
    this.setState({inputMensagem: event.target.value})
  
  }

  
  render() {
    
    const impressao = this.state.listaMensagem.map((post) => {
      return(
        <p>
          {post.novoUsuario} : {post.novaMensagem}
        </p>
        
      )
    })


    return(
      <div>
       <div>{impressao}</div>
       <div>
        <input 
        type ="text"  placeholder='usuario'
        onChange={this.onChangTextoUsuario}
        value = {this.state.inputUsuario}
        />
        <input 
        type ="text"  placeholder='mensagem'
        onChange={this.onChangeTextoMensagem}
        value = {this.state.inputMensagem}
        />
        <button
        onClick ={this.adicionarUsuario}>
          Enviar
        </button>

       </div>

        

      </div> 
    )
  }
}

export default App;
