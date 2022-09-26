import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <span>Meu formulario</span>
        <form className="form">
          <input data-testid="name-input" type="text" />
          <input data-testid="description-input" type="textarea" />
          <input data-testid="attr1-input" type="number" />
          <input data-testid="attr2-input" type="number" />
          <input data-testid="attr3-input" type="number" />
          <input data-testid="image-input" type="text" />
          <select data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
          <input data-testid="trunfo-input" type="checkbox" />
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
