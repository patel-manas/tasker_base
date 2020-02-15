import React from 'react';
import { Col } from 'antd';

export default ({ ...props }) => {
  return <Col span={24}>{props.children}</Col>;
};
