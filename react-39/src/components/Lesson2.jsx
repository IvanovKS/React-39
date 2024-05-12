import './Lesson2.css';

function Lesson2() {
  const array = ['Alex', 'Elena', 'Mike', 'Sasha'];
  const list = array.map((el, index) => (
    <li key={index}>{`${index + 1} - ${el}`}</li>
  ));
  return (
    <p className="users">Users:
      <ul className="users-list">{list}</ul>
    </p>
  );
}

export default Lesson2