function Person({ name, age, image }) {
  return (
    <ul className="person">
      <li>
        <img
          src={image}
          style={{ maxWidth: "80px" }}
          alt={name}
          className="img"
        />
      </li>
      <li>{name}</li>
      <li>{age} years</li>
    </ul>
  );
}

export default Person;
