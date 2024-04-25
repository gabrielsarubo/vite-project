import style from "./TextInput.module.css";

const TextInput = (props) => {
  return <input type="text" className={style.TextInput} {...props} />;
};

export { TextInput };
