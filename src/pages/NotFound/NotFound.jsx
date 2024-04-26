import style from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={style.NotFound}>
      <h1>404</h1>
      <h2>Page not found :(</h2>
    </div>
  );
};

export { NotFound };
