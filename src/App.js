import { Layout } from 'antd';
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';
import './App.css';
import Majors from '../src/components/Majors';
import store from './store/store';

const { Header, Content } = Layout;

function App() {
  return (
    <Provider store={store}>
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
        <Content className="main-content">
          <div className="site-layout-content">
            <Majors />
          </div>
        </Content>
      </Layout>
    </Provider>
  );
}

export default App;
