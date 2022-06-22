
import "antd/dist/antd.css";
import { PageHeader } from 'antd';
import UserList from "./UserList";
import './App.css';

function App() {
  return (
    <div className="App">
     <PageHeader
        onBack={() => {
          console.log("You can click on Back button")
        }}
        title="Users"
      />
      <UserList/>
    </div>
  );
}

export default App;
