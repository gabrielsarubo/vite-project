import { Outlet } from "react-router-dom";

import { Content, Footer, Header } from "../../components";

const StandardLayout = () => {
  return (
    <>
      <Header username="Gabriel" />
      <Content>
        <Outlet />
      </Content>
      <Footer author="Sarubo" />
    </>
  );
};

export { StandardLayout };
