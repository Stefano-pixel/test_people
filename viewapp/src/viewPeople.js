import { useEffect, useState } from "react";
import axios from "axios";

function PeoplTable() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3001/data");
      setPeople(result);
    };
    fetchData();
  }, []);
  console.log(people.data);
  if (people.data) {
    return (
      <div>
        {people.data.map((person) => (
          <div>
            {person.nome} {person.cognome}
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
}

export default PeoplTable;
