import React from 'react';
import logo from './logo.svg';
import './App.css';

export class App extends React.Component{
  state = {
    listaMensagem : [
      {
        usuario: "",
        mensagem: "", 
      }
    ],
    
  }

  onChangTextoUsuario = (event) => {
    this.setState({usuario : event.target.value})
  
  }

  onChangeTextoMensagem =(event)=> {
    this.setState({mensagem: event.target.value})
  
  }
  adicionarUsuario = () => {

    const novoUsuario  = {
      usuario: this.state.usuario,
      mensagem: this.state.mensagem
    }

    const novaListaMensagem = [adicionarUsuario, ...this.state.listaMensagem]
  
    this.setState({listaMensagem: novaListaMensagem, novaListaMensagem: ''})

  }

  
  render() {
    return(
      <div className = "App">
        <input 
        type ="text"  placeholder='usuario'
        onChange={this.onChangTextoUsuario}
        value = {this.state.usuario}
        />
        <input 
        type ="text"  placeholder='mensagem'
        onChange={this.onChangeTextoMensagem}
        value = {this.state.mensagem}
        />
        <button
        onClick ={this.adicionarUsuario}>
          Enviar
        </button>

      </div>

      {this.state,listaMensagem.map((mensagem)=>{
        return (
          <mensagem
          usuario = {this.adicionarUsuario}
          
          />
        )
      })
    )



  }


  return (
    <div
    
  );
}


