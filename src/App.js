import './App.css';

import react , {Component} from 'react';
import google from "./component/google.jpg"
import Profile from './component/Profile';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
  }
  toggleVisibility = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          backgroundImage: `url(${google})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <button className="visibility-btn" onClick={this.toggleVisibility}>
          {this.state.isVisible ? "Hide Profile" : "Show Profile"}
        </button>
        {this.state.isVisible ? (
          <Profile
            fullName="Ramy bjaoui "
            bio="presedent"
            description="devlopper"
            profession="devlopper"
            job="manager of big company "
          >
            <div>
              <img src={google} alt="Photo Of My company" />
            </div>
          </Profile>
        ) : null}
      </div>
    );
  }
}
