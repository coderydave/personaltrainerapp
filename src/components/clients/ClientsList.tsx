import React, { Fragment } from "react";
import "./style.css";
import { Layout, Avatar, Menu, Breadcrumb, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Client } from "./Clients";

interface UserListProps {
  items: Client[];
}

const ClientsList: React.FC<UserListProps> = (items) => {
  return (
    <div className="userlist">
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {items.items.map((user) => (
          /*  <h1 key={user.id}>{user.name}</h1> */
          <Menu.Item key={`1${user.id}`}>
            <Avatar
              size={32}
              style={{ marginRight: "4px" }}
              icon={<UserOutlined />}
            />
            {user.name}
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
};

export default ClientsList;
