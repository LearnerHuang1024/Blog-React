import React, { Component } from "react";
import propTypes from "prop-types";
import { Layout, Row, Col, Input, Icon } from "antd";
import "./index.less";
import Blog from "@/assets/img/Blog.svg";
const Header = Layout.Header;
export default class BlogHeader extends Component {
  static propTypes = {};
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }
  onChangeSearch = e => {
    this.setState({
      searchValue: e.target.value
    }); 
  };
  emitEmpty = e => {
    console.log(1);
  };
  render() {
    const responsiveLeft = { xxl: 4, xl: 5, lg: 5, sm: 4, xs: 24 };
    const responsiveRight = { xxl: 20, xl: 19, lg: 19, sm: 20, xs: 0 };
    // const { searchValue } = this.state;
    // const suffix = searchValue ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <Header className="BlogHeader">
        <Row>
          <Col {...responsiveLeft}>
            <a href="/">
              <h1 className="logo">
                <img src={Blog} alt="" />
                <span>切图仔也有梦想</span>
              </h1>
            </a>
          </Col>
          <Col {...responsiveRight}>
            <div className="search-box">
              <Input
                placeholder="搜索文章"
                prefix={<Icon type="search" style={{ color: '#ced4d9' }}/>}
                // suffix={suffix}
                value={this.state.searchValue}
                onChange={this.onChangeSearch}
                ref={node => (this.userNameInput = node)}
                size="default"
                className="search-article"
              />
            </div>
          </Col>
        </Row>
      </Header>
    );
  }
}
