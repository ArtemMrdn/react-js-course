import React from "react";

class Form extends React.Component {
  constructor() {
    super();

    this.cardRef = React.createRef(); //Обьект, у которого есть свойство current с которого мы можем получить ссылку на ноду. Но изначально это значение у нас null
    this.emailRef = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.cardRef.current.value.length < 16) {
      alert("invalid card number");
      return;
    }

    //send
    this.cardRef.current.value = "";
    this.emailRef.current.value = "";
  };
  // Когда работаем с неконтролируемыми полями, просто на каждое поле вешаем ref, не обратываем доп value, не вещаем onChange, просто либо на кнопку либо на само форму
  // делаем один оброботчик внутри которого уже по соотвествующим рефам проходим, делаем соотвествующую валидацию, которая нужна в рамках приложения,
  // если все хорошо отправляем форму, и если это требуется сбрасываем значение которые хранятся в рефах
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            name="card"
            placeholder="card"
            ref={this.cardRef}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            ref={this.emailRef}
          />
          <button>Send</button>
        </div>
      </form>
    );
  }
}

export default Form;
