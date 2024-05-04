import React from "react";
import { Layout, Menu, Typography, theme } from "antd";
import { menu } from "./description/header.description";
import AllRoutes from "./routes";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGOUT } from "./utils/constant";
const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const location = useLocation();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage?.getItem("user"));
  const handleLogout = () => {
    localStorage?.clear();
    navigate("/login");
  };
  return (
    <Layout>
      {user && (
        <Header
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["/"]}
            selectedKeys={[location.pathname]}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          >
            {menu.map((item) => (
              <Menu.Item key={item.key}>
                <NavLink to={item.key}>{item.label}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
          <Title
            level={4}
            style={{
              color: "white",
              cursor: "pointer",
            }}
            onClick={handleLogout}
          >
            {LOGOUT}
          </Title>
        </Header>
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
