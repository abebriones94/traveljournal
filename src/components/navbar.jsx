import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <h1>
        <FaGlobeAmericas className="icon--earth" />
        my travel journal.
      </h1>
    </nav>
  );
}
