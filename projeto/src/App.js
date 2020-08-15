import React from 'react';
import styled from "styled-components";
import Foto from "./img/imagem.png";
const Paragraph = styled.span `
 position: fixed;
  bottom: 0;
  margin-bottom: 100px;
`

const TamanhoInput = styled.input` 

    height: 10vh;
    width: 20vw;
    box-sizing:border-box;  
    color: gray;
    border-radius: 15px;
    font-size: 30px;
    border: 3px solid gray;
  `
const TamanhoArea = styled.textarea` 
    height: 10vh;
    width: 40vw;
    box-sizing:border-box;  
    color: gray;
    border-radius: 15px;
    font-size: 30px;
    border: 3px solid gray;
  `

const CorDeFundo = styled.body`   
display:flex;
justify-content:space-evenly;
margin-bottom:10px;
     width: 100vw;
     min-height:max-content;
     box-sizing:border-box;      
      position: fixed;
      bottom: 0;
      font-size: 30px;
    
`
const PlanoDeFundo = styled.div`
        background-color: green;
        height: 100vh;
        width: 100vw;
`
const Botao = styled.button`
    height: 10vh;
    width: 15vw;
     box-sizing:border-box;  
    color: gray;
    border-radius: 15px;
    font-size: 30px;
    border: 3px solid gray;
     border-radius: 15px;
    
`
const Button = styled.button `
height:5vh;
width:10vw;
border-radius:5px;
margin-left:10px;
color:red;
cursor: pointer;
`
const TagDiv = styled.div`
  display: flex;
align-items:center;

 paddind-left:10px;
`
const TagP = styled.p`
  display:flex;
  flex-direction:column;
  border-radius:1vw;
  padding: 0;
  margin-left:100px;
  width: 20vw ;
  color: blue;
  background-color: #ffff;
`
const Imagem = styled.img `
width:60px;
cursor:pointer;
`
const Strong = styled.strong `
color:blue;
margin-left:10px;
font-size:20px;
`
const Comentario = styled.i`
color:black;
margin-left:10px;
`


class App extends React.Component {
  state = {
    pessoas: [
    ],
    valorInputPessoa: "",
    valorInputEmail: ""
  };
  apagarPost = (mensagem) => {
    // Apaga um post da lista
    const novaListaDeMensagens = this.state.pessoas.filter((mensagem) => {
      return this.state.valorInputPessoa.valorInputEmail
    }
    );

    this.setState({ pessoas: novaListaDeMensagens,
      valorImputPessoa: ""
     });
  };

  adicionaPessoa = () => {
    const novaPessoa = {
      nome: this.state.valorInputPessoa,
      email: this.state.valorInputEmail
    };
    const novoPessoas = [...this.state.pessoas, novaPessoa];
    this.setState({ pessoas: novoPessoas,
      valorInputPessoa: "" ,
      valorInputEmail: ""});
  };

  onChangeInputPessoa = (event) => {
    this.setState({ valorInputPessoa: event.target.value });
  };
  onChangeInputEmail = (event) => {
    this.setState({ valorInputEmail: event.target.value });
  };
  render () {
    const listaDeComponentes = this.state.pessoas.map((pessoa) => {
      return (
        <TagDiv>
          <TagP>
            <Strong>{pessoa.nome} :</Strong ><Comentario>{pessoa.email}</Comentario>
          </TagP>
          <Button onClick={this.apagarPost}> Deletar</Button>
        </TagDiv>
      );
    });
    return (
     
      <PlanoDeFundo>  
        <Paragraph>{listaDeComponentes}</Paragraph>
        <CorDeFundo >
          <TamanhoInput 
            value={this.state.valorInputPessoa}
            onChange={this.onChangeInputPessoa}
            placeholder={"usuario"}
          />
          <TamanhoArea
            value={this.state.valorInputEmail}
            onChange={this.onChangeInputEmail}
            placeholder={"mensagem"}
          />
          <Botao >
            <Imagem src={Foto} onClick={this.adicionaPessoa}/>
            </Botao>
        </CorDeFundo>
        {/* <Post
          key={post.id}
          post={post}
          apagarPost={this.apagarPost}
        /> */}
      </PlanoDeFundo>
    );
  }
}

export default App;
