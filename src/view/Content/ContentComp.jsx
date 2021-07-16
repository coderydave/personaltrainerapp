import React from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const ContentComp = ({ comp }) => {
  const { Content } = Layout;
  return (
    <React.Suspense fallback={<Loader />}>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>1</Breadcrumb.Item>
          <Breadcrumb.Item>2</Breadcrumb.Item>
          <Breadcrumb.Item>3</Breadcrumb.Item>
          <Breadcrumb.Item>4</Breadcrumb.Item>
          <Breadcrumb.Item>...</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: "80vh" }}
        >
          <h1>Content</h1>
          <div>{comp}</div>
        </div>
      </Content>
    </React.Suspense>
  );
};

export default ContentComp;
