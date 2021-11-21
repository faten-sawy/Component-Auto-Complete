import React, { useState, useEffect } from "react";
import axios from "axios";

const AutoComplete = () => {
  const [books, setBooks] = useState(0);
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/books").then((res) => {
      console.log(res.data.data);
      setBooks(res.data.data);
    });
  }, []);

  const handleChange = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = books.filter((book) => {
        const regex = new RegExp(`${text}`, "gi");
        return book.name.match(regex);
      });
    }
    setText(text);
    setSuggestions(matches);
    console.log(matches);
  };

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        value={text}
        style={classes.input}
      />
      {suggestions?.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

const classes = {
  input: {
    marginTop: "20px",
    width: "30vw",
    height: "2vh",
  },
};

export default AutoComplete;
