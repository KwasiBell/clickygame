import React from 'react';
import Card from "./components/Card/Card";
import './App.css';
import cards from "./cards.json";



class App extends React.Component {
 state = {
   message: 'Click any image to begin',
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

    return(
      <>
      <h1>{this.state.message}</h1>
      <p>
      <span>Score: {this.state.score}</span>{" "}<span>High score: {this.state.highScore}</span>
      </p>
      {this.state.cardsArray.map(eachObject => {
        return <div
           key={eachObject.id}
           onClick={() => this.handleClick(eachObject.id)}
          >
            <h1>{eachObject.id}</h1>
            <p>{eachObject.name}</p>
            <img src= {eachObject.image} width="250" height="250" alt=""/>
        </div>
      })}
       </>
    )
  }
}

export default App;

/*

// var images = [
//   {
//     "id": 1,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 2,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 3,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 4,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 5,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 6,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 7,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 8,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 9,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 10,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 11,
//     url: logo,
//     "count": 0

//   },
//   {
//     "id": 12,
//     url: logo,
//     "count": 0

//   },
// ]



*/
