import { Outlet } from "react-router-dom";

import { useAppContext } from "../../hooks";

import { Content, Footer, Header } from "../../components";

const StandardLayout = () => {
  const { author } = useAppContext();

  return (
    <>
      <Header username="Gabriel" />
      <Content>
        <Outlet />
      </Content>
      <Footer author={author} />
    </>
  );
};

export { StandardLayout };
