import React from 'react';
import { Layout, Menu, theme } from 'antd';
import { menu } from './description/header.description';
import AllRoutes from './routes';
import { NavLink } from 'react-router-dom';
const { Header, Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/']}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {menu.map(item => (
            <Menu.Item key={item.key}>
              <NavLink to={item.key} exact activeClassName="active">{item.label}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Layout
          style={{
            padding: '24px 0',
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Content
            style={{
              padding: '0 24px',
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