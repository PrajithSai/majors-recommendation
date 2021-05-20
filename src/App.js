import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import Majors from './Majors';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img
            src="https://connect-mst-edu.cdn.technolutions.net/www/images/S%26T%20Logos/MissouriS%26T_Horizontal_White.png"
            alt="Missouri S&T logo"
            width="200px"
          />
        </div>
      </Header>
      <Content style={{ padding: '0 50px', minHeight: '100vh' }}>
        <div className="site-layout-content">
          <Majors />
        </div>
      </Content>
    </Layout>
  );
}

export default App;
