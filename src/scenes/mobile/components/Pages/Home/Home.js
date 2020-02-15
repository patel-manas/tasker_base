import React, { Component } from 'react';
import { Row, Col, Carousel, Skeleton } from 'antd';
import PostTask from '../../Common/PostTask';

import BecomeTaskerImg from '../../../assets/images/browse-task.svg';
import PostTaskImg from '../../../assets/images/post-task.svg';
import HiwVideo from '../../../assets/videos/HiwVideo.mp4';

// import Logo from '../../../assets/images/taskoo_icon.svg';
// import HeroImage from '../../../assets/images/hero.svg';
// import FooterPic from '../../../assets/images/footerpic.svg';

import Laundry from '../../../assets/images/laundry.svg';
import BeautyAndServices from '../../../assets/images/beuty.svg';
import Food from '../../../assets/images/food.svg';
import Technician from '../../../assets/images/techniian.svg';
import Assembly from '../../../assets/images/assembly.svg';
import HouseAndStay from '../../../assets/images/house.svg';
import AnythingElse from '../../../assets/images/else.svg';

// import PlayStore from '../../../assets/images/appStore.png';
// import AppStore from '../../../assets/images/playStore.png';
// import HiwVideo from '../../../assets/videos/HiwVideo.mp4';
// import { Player } from "video-react";
// import ReactPlayer from 'react-player'

// const IconFont = AntIcon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
// });

// const Icon = ({ item }) => {
//   return (
//     <div
//       className="hero_cat_list_item"
//       style={{
//         height: '90px',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//       }}
//     >
//       <img
//         src={item.icon}
//         alt="any_icon"
//         height="70"
//         style={{ margin: '5px 50px' }}
//       />
//       <div>{item.title}</div>
//     </div>
//   );
// };

// const LatestTask = ({ title, price, image }) => {
//   return (
//     <div style={{ margin: '10px' }}>
//       <Card bordered={false} style={{ width: 300, height: 80 }}>
//         <Avatar src={image} />
//         {title}
//         {price}
//       </Card>
//     </div>
//   );
// };

import './Home.less';
export default class Home extends Component {
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
        <Row>
          <Col span={12}>
            <img
              src={PostTaskImg}
              onClick={() =>
                this.props.actions.showModal({ name: 'POST_TASK' })
              }
            />
          </Col>
          <Col span={12}>
            <img src={BecomeTaskerImg} />
          </Col>
        </Row>

        <video autoPlay controls className="how-video">
          <source src={HiwVideo} />
        </video>

        <Carousel autoplay>
          <Skeleton avatar paragraph={{ rows: 4 }} />
          <Skeleton avatar paragraph={{ rows: 4 }} />
          <Skeleton avatar paragraph={{ rows: 4 }} />
          <Skeleton avatar paragraph={{ rows: 4 }} />
        </Carousel>
        <div className="foot_menu_options">
          <ul>
            <li className="foot_menu_option">
              <a href="#">About</a>
            </li>
            <li className="foot_menu_option">
              <a href="#">Jobs</a>
            </li>
            <li className="foot_menu_option">
              <a href="#">Blog</a>
            </li>
            <li className="foot_menu_option">
              <a href="#">Contact</a>
            </li>
            <li className="foot_menu_option">
              <a href="#">Terms and conditons</a>
            </li>
            <li className="foot_menu_option">
              <a href="#">Privacy policy</a>
            </li>
            <li className="foot_menu_option">
              <a href="#">Taskoo for business</a>
            </li>
          </ul>
        </div>

        {this.props.modal.show ? <PostTask {...this.props} /> : undefined}
      </div>
    );
  }
}
