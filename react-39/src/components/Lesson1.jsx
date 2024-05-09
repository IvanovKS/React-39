import React from 'react';
import './Lesson1.css';

class Lesson1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Lesson1</h1>
        <form name="search-form" action="#">
          <input
            type="text"
            placeholder="Search something here..."/>
          <button type="submit" >Search</button>
        </form>
      </React.Fragment>
  );
  }
}

export default Lesson1