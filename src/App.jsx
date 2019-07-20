import React, { Component } from "react";
import Card from "./components/Card/Card";
import './App.css';
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";



class App extends React.Component {
 state = {
   message: 'Click on any Athlete image to begin',
   score: 0,
   cardsArray: cards,
   clickedArray: [],
   highScore: 0,
 }

 shuffle = () => this.state.cardsArray.sort(() => Math.random() - 0.5);

 resetValues = () => {
   this.setState({
    score: 0,
    cardsArray: cards,
    clickedArray: [],
   });
 }

 handleClick = (cardId) => {
    console.log(cardId, "inside handleClick");

    if (!this.state.clickedArray.includes(cardId)) {
      this.setState({

        score: this.state.score + 1,
        cardsArray: this.shuffle(),
        clickedArray: [...this.state.clickedArray, cardId]
       }, () => {
         if (this.state.score === this.state.cardsArray.length) {
           alert('you won');
           this.resetValues();
         } else {
           if (this.state.score > this.state.highScore) {
             this.setState({
               highScore: this.state.score,
             });
           }
         }
       })
    } else {
      alert('you lost');
      this.resetValues();
    }


  }


  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highScore}>Athlete Clicky Game</Header>
        {this.state.cardsArray.map(card => (
          <Card
            clickCount={this.handleClick}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    )
    };
  // render() {

  //   return(
  //     <Wrapper>
  //     <h1>{this.state.message}</h1>
  //     <p>
  //     <span>Score: {this.state.score}</span>{" "}<span>High score: {this.state.highScore}</span>
  //     </p>
  //     {this.state.cardsArray.map(eachObject => {
  //       return <div
  //          key={eachObject.id}
  //          onClick={() => this.handleClick(eachObject.id)}
  //         >
  //           <h1>{eachObject.id}</h1>
  //           <p>{eachObject.name}</p>
  //           <img src= {eachObject.image} width="250" height="250" alt=""/>
  //       </div>
  //     })}
  //      </Wrapper>
  //   )
  // }
}

//  render() {
//   return (
//     <Wrapper>
//       <Header score={this.state.score} highscore={this.state.highscore}>Athlete Clicky Game</Header>
//       {this.state.cards.map(card => (
//         <Card
//           clickCount={this.clickCount}
//           id={card.id}
//           key={card.id}
//           image={card.image}
//         />
//       ))}
//     </Wrapper>
//   )
//   };




export default App;
