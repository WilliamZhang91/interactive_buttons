import './App.css';
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { GrTwitter } from "react-icons/gr";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";

function App() {
  return (
    <div className="background">
      <div className="background-color"></div>
      <div className="background-color"></div>
      <div className="background-color"></div>
      <div>
        <ul>
          <li>
            <div className="icons"><GrFacebookOption /></div>
          </li>
          <li>
            <div className="icons"><GrInstagram /></div>
          </li>
          <li>
            <div className="icons"><GrTwitter /></div>
          </li>
          <li>
            <div className="icons"><GrLinkedinOption /></div>
          </li>
          <li>
            <div className="icons"><GrGithub /></div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
