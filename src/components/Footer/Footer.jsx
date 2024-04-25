import style from "./Footer.module.css";

const Footer = (props) => {
  const { author } = props;

  const currentYear = new Date().getFullYear();

  return (
    <div className={style.Footer}>
      <div>
        React Básico - {currentYear} - {author}
      </div>
    </div>
  );
};

export { Footer };
