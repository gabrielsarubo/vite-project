import { Header, Content, Footer } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Header username="Gabriel" />
      <Content>
        <h1>Title</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere culpa
          quae expedita.
        </p>
      </Content>
      <Footer author="Sarubo" />
    </>
  );
};

export { App };
