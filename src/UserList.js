

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Col, Row } from 'antd';
import User from './User';

export default function UserList() {
  const USER_API = 'https://jsonplaceholder.typicode.com/users'
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      await axios.get(USER_API).then(function response(res) { setUsers(res.data)})  ; 
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{getUsers()}, []);

return (
    <div className="user-list">
      {
        <Row gutter={20}>
        {      
          users.map((user) => 
          (
            <Col span={6}>
                <User users={users} key={user.id} id={user.id} username={user.name} phone={user.phone} email={user.email} website={user.website} setUsers={setUsers} /> 
            </Col>
          )   )

        }
        
        </Row>
     
      }
    </div>
  )
}
