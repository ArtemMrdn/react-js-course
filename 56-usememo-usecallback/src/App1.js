import { useState, useMemo } from "react";

function createUser(name, surname) {
  const user = { surname, name };
  console.log(user);
  return user;
}

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [counter, setCounter] = useState(0);

  const user = useMemo(() => createUser(name, surname), [name, surname]);
  //useMemo - возвращает один и тот же обьект до тех пор пока не изменитьсяЮ одна из зависимостей, которая вызывает генерирующую функцию,
  // т.е возвращает значение которое мы где-либо используем
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>
        {" "}
        на меня нажали {counter} раз
      </button>

      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type='text'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
      />
    </div>
  );
}

export default App;
