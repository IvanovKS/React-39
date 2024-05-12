import React from 'react';
import './Lesson1Child.css';

class Lesson1Child extends React.Component {
  render() {
    const { string, number, boolean } = this.props;
    return (
      <>
        <p className="child">string: {string}</p>
        <p className="child">number: {number}</p>
        <p className="child">boolean: {boolean.toString()}</p>
      </>
    );
  }
}

export default Lesson1Child