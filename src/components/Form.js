import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      alreadyHadTrunfo,
      onSaveButtonClick } = this.props;

    return (
      <div>
        <span>Meu formulario</span>
        <form className="form">
          <label htmlFor="cardName">
            cardName
            <input
              name="cardName"
              data-testid="name-input"
              type="text"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardDescription">
            cardDescription
            <input
              name="cardDescription"
              data-testid="description-input"
              type="textarea"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr1">
            cardAttr1
            <input
              name="cardAttr1"
              data-testid="cardAttr1-input"
              type="number"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr2">
            cardAttr2
            <input
              name="cardAttr2"
              data-testid="cardAttr2-input"
              type="number"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardAttr3">
            cardAttr3
            <input
              name="cardAttr3"
              data-testid="cardAttr3-input"
              type="number"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardImage">
            cardImage
            <input
              name="cardImage"
              data-testid="image-input"
              type="text"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="cardRare">
            cardRare
            <select
              name="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          {/* <label htmlFor="cardTrunfo">
            cardTrunfo
            <input
              name="cardTrunfo"
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label> */}

          <label htmlFor="cardTrunfo">
            {
              alreadyHadTrunfo()
                ? 'Você já tem um Super Trunfo em seu baralho'
                : (
                  <input
                    type="checkbox"
                    id="cardTrunfo"
                    name="cardTrunfo"
                    data-testid="trunfo-input"
                    checked={ cardTrunfo }
                    onChange={ onInputChange }
                  />
                )
            }
          </label>

          <button
            data-testid="save-button"
            type="button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar

          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  alreadyHadTrunfo: PropTypes.func.isRequired,
};

export default Form;

// Uncaught TypeError: alreadyHadTrunfo is not a function
//     at Form.render (bundle.js:sourcemap:576:21)
//     at finishClassComponent (bundle.js:sourcemap:28605:35)
//     at updateClassComponent (bundle.js:sourcemap:28555:28)
//     at beginWork (bundle.js:sourcemap:30404:20)
//     at HTMLUnknownElement.callCallback (bundle.js:sourcemap:13043:18)
//     at Object.invokeGuardedCallbackDev (bundle.js:sourcemap:13092:20)
//     at invokeGuardedCallback (bundle.js:sourcemap:13154:35)
//     at beginWork$1 (bundle.js:sourcemap:36167:11)
//     at performUnitOfWork (bundle.js:sourcemap:35300:16)
//     at workLoopSync (bundle.js:sourcemap:35213:9)
//  The above error occurred in the <Form> component:

//     at Form (http://localhost:3000/static/js/bundle.js:408:1)
//     at div
//     at App (http://localhost:3000/static/js/bundle.js:31:5)

// Consider adding an error boundary to your tree to customize error handling behavior.
// Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.
// logCapturedError @ VM14 bundle.js:27586
// VM14 bundle.js:35649 Uncaught TypeError: alreadyHadTrunfo is not a function
//     at Form.render (bundle.js:sourcemap:576:21)
//     at finishClassComponent (bundle.js:sourcemap:28605:35)
//     at updateClassComponent (bundle.js:sourcemap:28555:28)
//     at beginWork (bundle.js:sourcemap:30404:20)
//     at beginWork$1 (bundle.js:sourcemap:36142:18)
//     at performUnitOfWork (bundle.js:sourcemap:35300:16)
//     at workLoopSync (bundle.js:sourcemap:35213:9)
//     at renderRootSync (bundle.js:sourcemap:35182:11)
//     at recoverFromConcurrentError (bundle.js:sourcemap:34590:24)
//     at performConcurrentWorkOnRoot (bundle.js:sourcemap:34491:26)
