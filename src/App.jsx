import { Header, Content, Footer } from "./components";
import { Home } from "./pages";

import "./App.css";

const App = () => {
  return (
    <>
      <Header username="Gabriel" />
      <Content>
        <Home />
      </Content>
      <Footer author="Sarubo" />
    </>
  );
};

export { App };
