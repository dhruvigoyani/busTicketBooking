import { Layout, Menu, Typography } from "antd";
import { NavLink } from "react-router-dom";
import { LOGOUT } from "../utils/constant";
import { menu } from "../description/header.description";

const { Header } = Layout;
const { Title } = Typography;

const BTBHeader = ({ handleLogout, location }) => {
  return (
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
  );
};

export default BTBHeader;
