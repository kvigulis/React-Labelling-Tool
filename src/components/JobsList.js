import React from 'react';

class JobsList extends React.Component {
  render () {
    return (
      <div className="ui relaxed divided list">
        <div className="item">
          Job 1
        </div>
        <div className="item">
          Job 2
        </div>
        <div className="item">
          Job 3
        </div>
      </div>
    )
  }
}

export default JobsList;