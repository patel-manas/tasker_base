import React, { Component } from "react";
import { Button } from "antd";

import Logo from "../assets/new_images/taskoo_icon.svg";
import HeroImage from "../assets/new_images/hero.svg";

import Laundry from "../assets/new_images/laundry.svg";
import BeautyAndServices from "../assets/new_images/beuty.svg";
import Food from "../assets/new_images/food.svg";
import Technician from "../assets/new_images/techniian.svg";
import Assembly from "../assets/new_images/assembly.svg";
import HouseAndStay from "../assets/new_images/house.svg";
import AnythingElse from "../assets/new_images/else.svg";

const Icons = [
  {title: 'Laundry', icon: Laundry},
  {title:'Beauty And Services', icon: BeautyAndServices},
  {title:'Food', icon: Food},
  {title:'Technician', icon: Technician},
  {title:'Assembly', icon: Assembly},
  {title:'House And Stay', icon: HouseAndStay},
  {title:'Anything Else', icon: AnythingElse}
];

const Icon = ({ item }) => {
  return (
    <div
      style={{
        height: "90px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems:'center'
      }}
    >
      <img
        src={item.icon}
        alt="any_icon"
        height="70"
        style={{ margin: "0px 25px" }}
      />
      <div>{item.title}</div>
    </div>
  );
};

import "./NewHome.scss";
export default class NewHome extends Component {
  render() {
    return (
      <div className="home_wrapper">
        {/* navbar start */}
        <nav className="nav_wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="nav_list">
            <li className="nav_list_item">
              <Button>post a task</Button>
            </li>{" "}
            <li className="nav_list_item">
              <Button>browse task</Button>
            </li>
          </ul>
          <div className="nav_user">
            <div className="user">
              <img src="https://img.icons8.com/ios/100/000000/user.png" />
            </div>
            <div className="app">
              <img src="https://img.icons8.com/ios/50/000000/two-smartphones.png" />
            </div>
          </div>
        </nav>

        {/* navbar end */}
        {/* hero section start */}
        <section className="hero_wrapper">
          <section className="hero_banner">
            <div className="hero_tag">
              <div className="hero_tag_desc">
                Getting something <br /> done is never <br />
                been so easier.
              </div>
              <br />
              <div className="hero_tag_cta">
                <Button>post a task</Button>
              </div>
            </div>
            <div className="hero_img">
              <img src={HeroImage} alt="hero image" />
            </div>
          </section>
          <section className="hero_cat">
            <div className="hero_cat_desc">
              Post a popular category or a fresh task
            </div>
            <div className="hero_cat_list">
              {Icons.map((icon, i) => (
                <Icon key={i} item={icon} />
              ))}
            </div>
          </section>
        </section>
        {/* hero section end */}
      </div>
    );
  }
}
