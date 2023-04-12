import { useState } from "react";
import data from "./data";
import List from "./components/List";
import "./index.css";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <h3>{people.length} Birthdays Today</h3>
      <List people={people} />
      <button
        type="button"
        className="btn btn-block"
        onClick={() => setPeople([])}
      >
        Clear All
      </button>
    </section>
  );
};
export default App;
