import React from 'react';
import './Lesson1.css';
import Lesson1Child from './Lesson1Child';

class Lesson1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      number: 0,
      hasError: false,
      inputValue: '',
    };
    this.inputRef = React.createRef();
    console.log('constructor');
  }

  incrementNumber = () => {
    this.setState({ number: this.state.number + 1 });
  }

  focusInput = () => {
    this.inputRef.current.focus();
  };

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
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
    const { inputValue } = this.state;

    return (
      <React.Fragment>
        <h1>Lesson_1</h1>
        <form name="number-form" action="#">
          <input
            value={inputValue}
            onChange={this.handleChange}
            ref={this.inputRef}
            type="text"
            placeholder="Write 'реакт' here..."/>
          {inputValue === "реакт" && (
            <button disabled={true} type="submit" className="disabled">Disabled</button>
          )}
          {inputValue !== "реакт" && (
            <button disabled={false} type="submit" onClick={this.incrementNumber}>Add + 1</button>
          )}
          <button onClick={this.focusInput}>Focus on input</button>
        </form>
        <p>final number: {this.state.number}</p>
        <Lesson1Child string="abc" number={10} boolean/>
      </React.Fragment>
    );
  }
}

export default Lesson1