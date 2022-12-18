// functional
import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(query);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, query]);

  const onSearchEvent = (event) => {
    const queryString = event.target.value.toLowerCase();
    setQuery(queryString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Catsloveme</h1>
      <SearchBox
        onChangeHandler={onSearchEvent}
        placeholder="search monsters"
        className="monsters-search-box"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;

// class
/*
import { Component, useState } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

class App extends Component {
  constructor() {
    // console.log("constructor");
    super();

    this.state = {
      monsters: [],
      query: "",
    };
  }

  componentDidMount() {
    // console.log("didmount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }

  onSearchEvent = (event) => {
    // console.log(event.target.value);
    const query = event.target.value.toLowerCase();

    this.setState(() => {
      return { query };
    });
  };

  render() {
    // console.log("render");

    const { monsters, query } = this.state;
    const { onSearchEvent } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(query);
    });

    return (
      <div className="App">
        <h1 className="app-title">Catsloveme</h1>
        <SearchBox
          onChangeHandler={onSearchEvent}
          placeholder="search monsters"
          className="monsters-search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
*/
