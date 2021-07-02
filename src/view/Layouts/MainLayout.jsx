import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SettingOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import ClientFormRegister from "../../components/clientForm/ClientFormRegister";
import "./style.css";
/* import MultiPlayer from "../../components/audioPlayer/MultiPlayer"; */

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed((collapsed) => !collapsed);
  };
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Menu Item 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            New Client
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Clients">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Személyi Edzés</Menu.Item>
            <Menu.Item key="8">Étrend</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
          <Menu.Item key="10" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
        {/*      <MultiPlayer urls={[
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        ]} /> */}
        <div className="btnwrapper">
          <div
            className={collapsed ? "socialbtngroup-vertical" : "socialbtngroup"}
          >
            <Button className="btn fb" type="primary">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/"
              >
                <FacebookOutlined />
              </a>
            </Button>
            <Button className="btn insta" type="primary">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/"
              >
                <InstagramOutlined />
              </a>
            </Button>
            <Button className="btn youtube" type="primary">
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/"
              >
                <YoutubeOutlined />
              </a>
            </Button>
          </div>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <ClientFormRegister />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2021 Created by David Balogh
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
