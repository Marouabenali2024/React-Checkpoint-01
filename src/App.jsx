// src/App.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import Name from "./Name"; // Import with no '.js'
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";
import product from "./product";

const firstName = "Benal"; // Change this to your name or leave empty

const App = () => {
  return (
    <div className="App">
      {/* Card Component */}
      <Card style={{ width: "18rem", margin: "20px" }}>
        <Card.Body>
          <Card.Title>Product Details</Card.Title>
          {/* Displaying product components inside the card */}
          <Name />
          <Price />
          <Description />
          <Image />

          <Button variant="primary" style={{ marginTop: "10px" }}>
            Buy Now
          </Button>
        </Card.Body>
      </Card>

      {/* Greeting Message */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>{firstName ? `Hello, $Maroua!` : "Hello, there!"}</h3>
        {/* Display image if first name is provided */}
        {firstName && (
          <img
            src="data:image/png;base64,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"
            alt="User Avatar"
            style={{ width: "100px", borderRadius: "50%", marginTop: "10px" }}
          />
        )}
      </div>
    </div>
  );
};

export default App;
