import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api") // Adjust if API URL is different
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching API:", error));
  }, []);

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;