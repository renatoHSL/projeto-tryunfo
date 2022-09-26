import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <span>Meu formulario</span>
        <form className="form">
          <label>
            email
            <input name="dsadadas" type="email" />
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
