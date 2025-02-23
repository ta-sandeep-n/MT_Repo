import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [messages, setMessages] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api");
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      textAlign: "center",
    }}>
      <div style={{
        backgroundColor: "#222",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(255, 255, 255, 0.2)"
      }}>
        <h1 style={{ fontSize: "36px", marginBottom: "20px", color: "white" }}>Candidate</h1>
        {messages.length > 0 ? (
          messages.map((message, index) => (
            <p key={index} style={{
              fontSize: "28px",
              fontWeight: "bold",
              margin: "10px 0",
              color: "white"
            }}>
              {message}
            </p>
          ))
        ) : (
          <p style={{ fontSize: "20px", fontStyle: "italic", color: "white" }}>Loading messages...</p>
        )}
      </div>
    </div>
  );
}

export default App;
