import react, { useState } from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { Link } from "react-router-dom";

const { SubMenu, Item } = Menu; // Menu.submenu , Menu.Item // This is called destructuring

const Header = () => {
  const [current, setCurrent] = useState("home"); // current state is home
  const handleClick = (e) => {
    // console.log(e.key);
    setCurrent(e.key);
    //
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      {/* current state is activated by keys */}
      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>
      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>
      <Item key="login" icon={<UserOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <Item key="setting:1">Option 1</Item>
        <Item key="setting:2">Option 2</Item>
      </SubMenu>
    </Menu>
  );
};
export default Header;
