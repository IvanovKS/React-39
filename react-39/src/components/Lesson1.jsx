import React from 'react';
import './Lesson1.css';

class Lesson1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0};
  }

  incrementNumber = () => {
    this.setState({ number: this.state.number + 1 });
  }

  render() {
    return (
      <React.Fragment>
        <h1>Lesson_1</h1>
        <form name="number-form" action="#">
          <input
            type="text"
            placeholder="Write any number here..."/>
          <button type="submit" onClick={this.incrementNumber}>Add + 1</button>
        </form>
        <p>final number: {this.state.number}</p>
      </React.Fragment>
    );
  }
}

export default Lesson1