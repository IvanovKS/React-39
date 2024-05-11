import React from 'react';
import './Lesson1.css';

class Lesson1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      number: 0,
      hasError: false,
    };
    console.log('constructor');
  }

  incrementNumber = () => {
    this.setState({ number: this.state.number + 1 });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    return null;
  }

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError');
    return { hasError: true };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch');
  }

  render() {
    console.log('render');
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