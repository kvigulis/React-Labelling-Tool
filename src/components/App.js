import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';
import Header from './Header';
import StatsView from "../StatsView";
import JobsList from "./JobsList";
import LabellingTool from "./labelling_tool/LabellingTool";


class App extends React.Component {

  render() {
    return (
      <div className="ui">
        <Router history={history}>
          <Header/>
          <div className="ui container">
          <Route path="/" exact component={StatsView}/>
          <Route path="/jobs" exact component={JobsList}/>
          <Route path="/test-tool/:testId" exact component={LabellingTool}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;