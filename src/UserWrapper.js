
import React from 'react';
import {Card } from 'antd';
// import {Card, Col, Row } from 'antd';
import User from './User';
export default function UserWrapper(props) {
  
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};
    return (
    <>
      <Card title="user-wrapper">
      <Card.Grid style={gridStyle}><User username={props.username} phone={props.phone} /></Card.Grid>
      </Card>
    </>
);
}

// <Row gutter={20}>
//         <Col span={6}>
//         <User username={props.username} phone={props.phone} />
//         </Col>
//       </Row>