import data from "../data";
import Person from "./Person";

function List() {
  return (
    <ul>
      {data.map((person) => {
        const { id, image, name, age } = person;
        return (
          <li key={id}>
            <Person image={image} name={name} age={age} />
          </li>
        );
      })}
    </ul>
  );
}

export default List;
