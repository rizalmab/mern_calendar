import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    const fetchTest = async () => {
      const test = await axios.get("/api/test");
      console.log("test", test);
    };
    fetchTest();
  }, []);

  return (
    <div className="App">
      <h1>MERN Calendar app</h1>
    </div>
  );
}

export default App;
