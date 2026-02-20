import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  BarChartOutlined,
  LogoutOutlined,
  ProjectOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Flex, Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import getUserObject from "../utils/getUserObject";

const { Header, Sider, Content } = Layout;

const TutorLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  // Check if user is authenticated and is a tutor
  const user = getUserObject();
  if (!user || user.role !== "tutor") {
    navigate("/login");
    return null;
  }

  return (
    <Layout style={{ height: "100vh", margin: -8 }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Flex
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={getUserObject()?.image || "avatar.png"}
          />
        </Flex>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <ProjectOutlined />,
              label: "All Projects",
              onClick: () => {
                navigate("/tutor");
              },
            },
            {
              key: "2",
              icon: <BarChartOutlined />,
              label: "Leaderboard",
              onClick: () => {
                navigate("/tutor/leaderboard");
              },
            },
            {
              key: "3",
              icon: <LogoutOutlined />,
              label: "Logout",
              onClick: () => {
                localStorage.clear();
                navigate("/login");
              },
              style: {
                position: "absolute",
                bottom: 0,
                width: "100%",
                color: "red",
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default TutorLayout;
