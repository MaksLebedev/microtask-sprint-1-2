import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { FullInput } from "./components/FullInput";
import { title } from "process";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

function App() {
  const [message, setMessage] = useState([
    { message: "message1" },
    { message: "message2" },
    { message: "message3" },
  ]);

  let [title, setTitle] = useState("");

  // const addMessage = (title: string) => {
  //   setMessage([{ message: title }, ...message]);
  // };

  const callbackButtonHandler = () => {
    setMessage([{ message: title }, ...message]);
    setTitle("");
  };

  return (
    <div className="App">
      {/* <FullInput addMessage={addMessage} /> */}
      <Input setTitle={setTitle} title={title} />
      <Button name={"+"} callback={callbackButtonHandler}  />
      {message.map((el, index) => {
        return <div key={index}>{el.message}</div>;
      })}
    </div>
  );
}

export default App;
