import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { GrUserWorker } from "react-icons/gr";
import { Layout, Menu, Switch, Row, Col, } from "antd";
import ListJob from "../pages/jobs/list";
import RegisterJob from "../pages/jobs/register";
export default function Routes() {
  const { Header, Content, Footer, Sider } = Layout;
  const SubMenu = Menu.SubMenu;

  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [colorTheme, setColorTheme] = useState("#001529");
  const [invertTheme, setInvertTheme] = useState("#fff");

  const changeTheme = (value) => {
    setTheme(value == true ? "dark" : "light");
    setColorTheme(value == true ? "#001529" : "#fff");
    setInvertTheme(value == true ? "#fff" : "#001529");
  };
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width={250}
          theme={theme}
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          <Menu
            style={{ marginTop: 15 }}
            theme={theme}
            defaultOpenKeys={["empregados"]}
            mode="inline"
            inlineCollapsed={collapsed}
          >
            <SubMenu
              key="empregados"
              icon={<GrUserWorker />}
              title="Empregados"
            >
              <Menu.Item
                key="1"
                onClick={() => (window.location.href = "/job/list")}
              >
                Lista de Empregados
              </Menu.Item>
              <Menu.Item
                key="2"
                onClick={() => (window.location.href = "/job/register")}
              >
                Cadastrar um Empregado
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{ background: colorTheme, padding: 0, paddingLeft: 16 }}
          >
            <Row>
              <Col md={24}>
                <Switch
                  checked={theme === "dark"}
                  onChange={changeTheme}
                  checkedChildren="Dark"
                  unCheckedChildren="Light"
                />
              </Col>
            </Row>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              marginTop: 50,
              background: "#fff",
              minHeight: 280,
            }}
          >
            <Route exact path={`/`} component={ListJob} />
            <Route exact path={`/job/list`} component={ListJob} />
            <Route exact path={`/job/register`} component={RegisterJob} />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Maxxidata ©2021 Todos os direitos reservados.
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}
