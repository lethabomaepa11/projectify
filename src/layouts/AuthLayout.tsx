import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <h2 style={{ color: "white" }}>Projectify</h2>
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Outlet />
      </Content>
      <Footer
        style={{
          textAlign: "center",
          position: "fixed",
          bottom: "0",
          width: "100%",
        }}
      >
        Projectify ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default App;
