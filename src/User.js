import React from 'react';
import { EditOutlined, HeartOutlined,MailOutlined ,GlobalOutlined,PhoneOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;


const User = (props) => 
(

  <Card 
    style={{
      width: 280,
      margin:25,
    }}
    cover={
      <img
        alt="user-avatar"
        src={`https://avatars.dicebear.com/v2/avataaars/${props.username}.svg?options[mood][]=happy`}
      />
    }
    actions={[
      <HeartOutlined  key="heart" />,
      <EditOutlined key="edit" />,
      <DeleteOutlined 
      onClick={()=>
      {props.setUsers(props.users.filter((el)=> el.id !== props.id));
      } 
      }  
       key="delete" />,
    ]}

  >

    <Meta
      title={props.username}
    />
    <div style={{flexDirection:'row',textAlign: 'left',margin:0}}>
      <MailOutlined  key="mail"/> {props.email}
    </div>
    <div style={{flexDirection:'row',textAlign: 'left',margin:0}}>
    <PhoneOutlined key="phone"/>{props.phone}
    </div>
    <div style={{flexDirection:'row',textAlign: 'left',margin:0}}>
      <GlobalOutlined key="website" />http://{props.website}
    </div>
  </Card>
)
export default  User;