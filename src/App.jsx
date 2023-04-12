import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
  const [birthdayCount, setBirthdayCount] = useState(data);

  return (
    <section>
      <h2>{birthdayCount.length} Birthdays Today</h2>
      <List />
      <button onClick={() => setBirthdayCount([])}>Clear All</button>
    </section>
  );
};
export default App;
