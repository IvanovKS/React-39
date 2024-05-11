import React from 'react';
import './Lesson1Child.css';

class Lesson1Child extends React.Component {
  render() {
    const { string, number, boolean } = this.props;
    return (
      <div>Lesson1Child
        <p className="child">string: {string}</p>
        <p className="child">number: {number}</p>
        <p className="child">boolean: {boolean.toString()}</p>
      </div>
    );
  }
}

export default Lesson1Child