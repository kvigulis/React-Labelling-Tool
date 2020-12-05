import React from 'react';
import {connect} from 'react-redux';

class LabellingTool extends React.Component {

  renderCategories() {
    return this.props.task.categories.map(category => {
      return (
        <div key={category.name}>
          <div className="ui teal label">
          {category.name}
          </div>
        </div>
      )
    })
  }

  render () {
    console.log(this.props);
    return (
      <div className="tool">
        <div className="tool__categories-row">
          {this.renderCategories()}
          <div className="ui label add-category-btn"><i className="icon plus" /></div>
        </div>

      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {

  return {
    task: state.tasks[ownProps.match.params.testId]
  }
};

export default connect(mapStateToProps)(LabellingTool);