import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      card: "",
      email: "",
    };
    this.firstNameRef = React.createRef(); //Обьект, у которого есть свойство current с которого мы можем получить ссылку на ноду. Но изначально это значение у нас null
    this.emailRef = React.createRef();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      if (this.state.card.length === 16) {
        // После того как я введу 16 значений в поле, меня автоматически перекинет в следующее поле
        this.emailRef.current.focus();
      }
    });
  };

  componentDidMount() {
    console.log(this.firstNameRef);
    this.firstNameRef.current.focus(); //Фокус на элементе при загрузке страницы
  }

  render() {
    const { email, card } = this.state;
    return (
      <div>
        <input
          type="text"
          name="card"
          placeholder="card"
          value={card}
          onChange={this.handleChange}
          ref={this.firstNameRef} //Используем этот рендер, вешая как атрибут ref, таким образом после монтирования в переменную firstNameRef мы получим ссылку на конкретную ноду
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          ref={this.emailRef}
        />
        <button>Send</button>
      </div>
    );
  }
}

export default Form;
