import React from 'react';
import {Link} from 'react-router-dom';
import Auth from "../Auth";


class Header extends React.Component {

  render() {
    return (
      <div className="ui secondary pointing menu header-menu">
        <Link to="/" className="item">
          Status
        </Link>
        <Link to="/jobs" className="item">
          Jobs
        </Link>
        <Link to="/test-tool/1" className="item">
          Test Tool
        </Link>
        <div className="right menu">

          <Auth/>
        </div>
      </div>
    )
  }
}

export default Header;
