function Person({ id, name, age, image }) {
  return (
    <ul key={id}>
      <li>
        <img src={image} style={{ maxWidth: "80px" }} alt={name} />
      </li>
      <li>{name}</li>
      <li>{age}</li>
    </ul>
  );
}

export default Person;
