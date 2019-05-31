import React, { Component } from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import BlogHeader from "@/components/layout/header";
const { Footer, Sider, Content } = Layout;
export default class layout extends Component {
  static propTypes = {
    content: PropTypes.node
  };
  render() {
    return (
      <Layout>
        <BlogHeader />
        <Layout>
          <Sider>left sidebar</Sider>
          <Content>
            <div className="content">{this.props.content}</div>
            <Footer>footer</Footer>
          </Content>
          <Sider>right sidebar</Sider>
        </Layout>
      </Layout>
    );
  }
}
