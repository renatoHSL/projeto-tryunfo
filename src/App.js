import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      hasTrunfo: false,
      cardTrunfo: false,
      cardSaved: [],
      isSaveButtonDisabled: true,
    };
  }

  validation = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      // cardTrunfo,
      // isSaveButtonDisabled,
    } = this.state;
    const emptyFields = (
      cardName.length === 0
      || cardDescription.length === 0
      || cardImage.length === 0
      || cardRare.length === 0);

    const singleAttr = 90;
    const zero = 0;
    const sumLimit = 210;
    const upperLimitAttr = (
      cardAttr1 > singleAttr
      || cardAttr2 > singleAttr
      || cardAttr3 > singleAttr);
    const lowerLimitAttr = (
      cardAttr1 < zero
      || cardAttr2 < zero
      || cardAttr3 < zero);

    const sumAttr = (
      (parseInt(cardAttr1, 10)
      + parseInt(cardAttr2, 10)
      + parseInt(cardAttr3, 10)) > sumLimit);
    return emptyFields || upperLimitAttr || sumAttr || lowerLimitAttr;
  };

  onInputChange = (event) => {
    const value = event.target.type === 'checkbox'
      ? event.target.checked : event.target.value;
    console.log(value);
    this.setState({
      [event.target.name]: value,
    });
  };

  // onSaveButtonClick = () => {
  //   this.setState({
  //     cardName: '',
  //     cardDescription: '',
  //     cardAttr1: '0',
  //     cardAttr2: '0',
  //     cardAttr3: '0',
  //     cardImage: '',
  //     cardRare: 'normal',
  //   });
  // };

  // alreadyTrunfo = () => {
  //   const { cardTrunfo, hasTrunfo } = this.state;
  //   this.setState({ hasTrunfo: cardTrunfo || hasTrunfo }, () => {
  //     // console.log(this.state.hasTrunfo);
  //   });
  // };

  onSaveButtonClick = () => {
    // console.log(this.state.hasTrunfo);

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      // cardSaved,
    } = this.state;
    this.setState({ hasTrunfo: cardTrunfo || hasTrunfo }, () => {
    });
    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    this.setState((prev) => ({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      cardSaved: [...prev.cardSaved, newCard],
    }));
  };

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      cardSaved,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          // quandoMudar={ this.handleChange }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ this.validation() }
          onSaveButtonClick={ this.onSaveButtonClick }
          // alreadyTrunfo={ this.alreadyTrunfo }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          // quandoMudar={ this.handleChange }
          onInputChange={ this.onInputChange }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        {cardSaved
          .map((card) => (<Card
            key={ card.cardName }
            cardName={ card.cardName }
            cardDescription={ card.cardDescription }
            cardAttr1={ card.cardAttr1 }
            cardAttr2={ card.cardAttr2 }
            cardAttr3={ card.cardAttr3 }
            cardImage={ card.cardImage }
            cardRare={ card.cardRare }
            cardTrunfo={ card.cardTrunfo }
          />
          ))}
      </div>
    );
  }
}

export default App;
