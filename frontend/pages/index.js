// index page for site front page
import { Input, Icon, Button } from "antd";
import H1 from "../components/styles/H1";
import H2 from "../components/styles/H2";
import H3 from "../components/styles/H3";

const Home = () => (
  <div className="border-box">
    <H1>AsyncReact</H1>
    <div style={{ marginLeft: 20 }}>
      <H2>Tutorials, tips and tricks</H2>
      <H2>to increase the performance of your React app.</H2>

      <H3>coming soon</H3>
      <div>
        <Input
          style={{ width: 300 }}
          prefix={<Icon type="user-add" style={{ color: "rgba(0,0,0,.25)" }} />}
          size="large"
          placeholder="enter your email"
        />
        <Button style={{ width: 200 }} type="primary" size="large">
          Keep me updated
        </Button>
      </div>
    </div>
  </div>
);

export default Home;
