import Person from "./Person";

function List({ people }) {
  return (
    <ul>
      {people.map((person) => {
        const { id, image, name, age } = person;
        return (
          <li key={id}>
            <Person key={id} image={image} name={name} age={age} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
