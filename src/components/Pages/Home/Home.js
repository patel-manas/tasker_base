import React, { Component } from 'react';
import { Button, Card, Avatar, Icon as AntIcon } from 'antd';

import Logo from '../../../assets/images/taskoo_icon.svg';
import HeroImage from '../../../assets/images/hero.svg';
import PostTask from '../../../assets/images/posttask.svg';
import BecomeTasker from '../../../assets/images/becometasker.svg';
import FooterPic from '../../../assets/images/footerpic.svg';

import Laundry from '../../../assets/images/laundry.svg';
import BeautyAndServices from '../../../assets/images/beuty.svg';
import Food from '../../../assets/images/food.svg';
import Technician from '../../../assets/images/techniian.svg';
import Assembly from '../../../assets/images/assembly.svg';
import HouseAndStay from '../../../assets/images/house.svg';
import AnythingElse from '../../../assets/images/else.svg';

import HiwVideo from '../../../assets/videos/HiwVideo.mp4';
// import { Player } from "video-react";
// import ReactPlayer from 'react-player'

const IconFont = AntIcon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});

const Icon = ({ item }) => {
  return (
    <div
      style={{
        height: '90px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <img
        src={item.icon}
        alt="any_icon"
        height="70"
        style={{ margin: '5px 50px' }}
      />
      <div>{item.title}</div>
    </div>
  );
};

const LatestTask = ({ title, price, image }) => {
  return (
    <div style={{ margin: '10px' }}>
      <Card bordered={false} style={{ width: 300, height: 80 }}>
        <Avatar src={image} />
        {title}
        {price}
      </Card>
    </div>
  );
};

import './Home.less';
export default class NewHome extends Component {
  state = {
    icons: [
      { title: 'Laundry', icon: Laundry },
      { title: 'Beauty And Services', icon: BeautyAndServices },
      { title: 'Food', icon: Food },
      { title: 'Technician', icon: Technician },
      { title: 'Assembly', icon: Assembly },
      { title: 'House And Stay', icon: HouseAndStay },
      { title: 'Anything Else', icon: AnythingElse }
    ],
    latestTasks: [
      {
        _id: '5e19d748cec5572575642e81',
        title: 'non cupidatat duis ex',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 134
      },
      {
        _id: '5e19d7481c91eea885ce2496',
        title: 'nulla excepteur excepteur eu',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 513
      },
      {
        _id: '5e19d7483690116146a25b72',
        title: 'quis cupidatat velit aute',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 650
      },
      {
        _id: '5e19d748ff04466993d4d780',
        title: 'irure qui nostrud laborum',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 107
      },
      {
        _id: '5e19d748bf5e1c4b9d7b367d',
        title: 'irure id minim culpa',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 513
      },
      {
        _id: '5e19d748c2fb4bd033756219',
        title: 'exercitation dolor est reprehenderit',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 427
      },
      {
        _id: '5e19d748da663795889d8197',
        title: 'eu non deserunt excepteur',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 674
      },
      {
        _id: '5e19d748c32d50c4830e7c37',
        title: 'consequat Lorem quis excepteur',
        image:
          'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        price: 117
      }
    ]
  };

  render() {
    return (
      <div className="home_wrapper">
        {/* navbar start */}
        {/* <nav className="nav_wrapper">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="nav_list">
            <li className="nav_list_item">
              <Button>post a task</Button>
            </li>{' '}
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
        </nav> */}

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
                <Button type="primary">post a task</Button>
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
              {this.state.icons.map((icon, i) => (
                <Icon key={`Category${i}`} item={icon} />
              ))}
            </div>
          </section>
        </section>
        {/* hero section end */}

        {/* latest task secton stat */}
        <section className="lates_wrapper">
          <div className="latest_header">
            Check out some latest task posted on taskoo
          </div>
          <div className="latest_tasks">
            {this.state.latestTasks.map((task, _i) => {
              return <LatestTask key={`LatestTask${_i}`} task={task} />;
            })}
          </div>
        </section>
        {/* latest task secton end */}
        {/* how it works start */}
        <section className="hiw_wrapper">
          <section className="hiw_header"> How it works</section>
          <section className="hiw_vieo">
            <video autoPlay controls>
              <source src={HiwVideo} />
            </video>
          </section>
          <section className="hiw_types">
            <div className="hiw_posttask">
              <figure>
                <img src={PostTask} alt="post task" />
                <figcaption>Post task</figcaption>
              </figure>
            </div>
            <div className="hiw_tasker">
              <figure>
                <img src={BecomeTasker} alt="becom a tasker" />
                <figcaption>Becom a tasker</figcaption>
              </figure>
            </div>
          </section>
        </section>
        {/* how it works end */}
        {/* footer start */}
        <section className="foot_wrapper">
          {/* <section className="foot_menu"> */}
          <div className="foot_logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="foot_menu_options">
            <ul>
              <li className="foot_menu_option">About</li>
              <li className="foot_menu_option">Jobs</li>
              <li className="foot_menu_option">Blog</li>
              <li className="foot_menu_option">Contact</li>
              <li className="foot_menu_option">Terms and conditons</li>
              <li className="foot_menu_option">privacy policy</li>
              <li className="foot_menu_option">Taskoo for business</li>
            </ul>
          </div>
          <div className="foot_menu_loveline">
            <span>
              Made with{' '}
              <AntIcon type="heart" theme="filled" style={{ color: 'red' }} />{' '}
              in india
            </span>
          </div>
          {/* </section>           */}
          <div className="foot_links">
            <ul>
              <li>Moving in banglore</li>
              <li>House painting in banglore</li>
              <li>Beauty services in banglore</li>
              <li>Beauty services in banglore</li>
              <li>Sofa cleaning in banglore</li>
              <li>Delivery in banglore</li>
            </ul>
          </div>
          <div className="foot_app" />
          <div className="foot_social">
            {' '}
            <IconFont type="icon-facebook" />
          </div>
          <div className="foot_pic">
            <img src={FooterPic} alt="footer pic" />
          </div>
        </section>
        {/* footer end */}
      </div>
    );
  }
}
