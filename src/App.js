import React from "react";
import { Layout,  theme } from "antd";
import AllRoutes from "./routes";
import BTBHeader from "./shared/BTBHeader";
import useApp from "./hook/useApp.hook";
const {  Content } = Layout;


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { location, user,handleLogout }= useApp()
  return (
    <Layout>
      {user && (
        <BTBHeader {...{handleLogout,location}}/>
      )}

      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <AllRoutes />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
};
export default App;
