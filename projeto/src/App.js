import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components" 

const Tamanho = styled.input` 
   width:${props => { 
     if(props.tamanho === "grande") {
      return "60vw" 
      } else if(props.tamanho === "pequeno"){
      return "20vw" } }} ;
      height: 10vh;
      font-size: 30px;
  
  `




  
const CorDeFundo = styled.p`
      background-color: gray;
      position: absolute;
      bottom: 0;
      

`


class App extends React.Component {



  state = {
    
    pessoas: [
      
    ],
    
    valorInputPessoa: "",
    valorInputEmail: ""
  };

  adicionaPessoa = () => {
    
    const novaPessoa = {
      
      nome: this.state.valorInputPessoa,
      
      email: this.state.valorInputEmail
    };

    
    const novoPessoas = [...this.state.pessoas, novaPessoa];

    
    this.setState({ pessoas: novoPessoas });
  };

  onChangeInputPessoa = (event) => {
    
    this.setState({ valorInputPessoa: event.target.value });
  };

  onChangeInputEmail = (event) => {
    
    this.setState({ valorInputEmail: event.target.value });
  };

  render() {
   
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <p>
          <strong>{pessoa.nome}</strong> : {pessoa.email}
        </p>
      );
    });

    return (
       
       <CorDeFundo backgroud-color = {"blue"}>
        <div>
          <div>{listaDeComponentes}</div>
          
          <Tamanho tamanho = {"pequeno"} 
           
            value={this.state.valorInputPessoa}
            
            onChange={this.onChangeInputPessoa}
            placeholder={"usuario"}
          />
         
          
          <Tamanho  tamanho = {"grande"} 
           
            value={this.state.valorInputEmail}
           
            onChange={this.onChangeInputEmail}
            placeholder={"mensagem"}
          />
          
          <button onClick={this.adicionaPessoa}>Adicionar</button>
       </div>
      </CorDeFundo>
    );
  }
}
  /*
  state = {
    listaMensagem : [{
      
      usuario: "",
      mensagem: ""

    }

    ],
    inputUsuario: "",
    inputMensagem: "",
  }

  adicionarUsuario = () => {

    const novoUsuario  = {
      usuario: this.state.inputUsuario,
      mensagem: this.state.inputMensagem
    }

    const novaLista = [...this.state.listaMensagem, novoUsuario];
  
    this.setState({ListaMensagem: novaLista, 
      inputUsuario: "", 
      inputMensagem: ""})

  }

  onChangeTextoUsuario = (event) => {
    this.setState({inputUsuario : event.target.value})
  
  }

  onChangeTextoMensagem =(event)=> {
    this.setState({inputMensagem: event.target.value})
  
  }

  
  render() {
    
    const impressao = this.state.listaMensagem.map((post) => {
      return(
        <div>
          {post.usuario}  {post.mensagem}
        </div>
        
      )
    })


    return(
      <div>
       <div>{impressao}</div>
       <div>
        <input 
        placeholder='usuario'
        onChange={this.onChangeTextoUsuario}
        value = {this.state.inputUsuario}
        />
        <input 
         placeholder='mensagem'
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
}*/

export default App;
