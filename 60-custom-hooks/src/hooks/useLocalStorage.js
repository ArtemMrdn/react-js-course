import { useEffect, useState } from "react";

//по полученому ключу будет считываться свойство в localStorage, если оно найдено то мы это число вернем наружу, если нет то некое значение по умолчанию мы вернем и сохраним его
function useLocalStorage(initialState, key) {
  const get = () => {
    //функция которая определяет значение из localStorage, вызывается из useStat,
    const storage = localStorage.getItem(key);
    return storage ? +storage : initialState;
  };

  const [value, setValue] = useState(get);

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [value]);
  return [value, setValue];
}

export default useLocalStorage;
