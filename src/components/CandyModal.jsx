import React, { useEffect } from "react";
import "./modal.css";

export default function CandyModal({ id, open, onClose, candy }) {
  useEffect(() => {
    if (!open) return; 

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleBackdropClick = (e) => {
    if (e.target.getAttribute("data-backdrop") === "true") {
      onClose();
    }
  };

  return (
    <div
      id={id}
      role="dialog"
      aria-modal="true"
      className="modal-backdrop"
      data-backdrop="true"
      onClick={handleBackdropClick}
    >
      <div className="modal-panel" role="document">
        <header className="modal-header">
          <h2 className="modal-title">{candy.name}</h2>
          <button
            className="modal-close"
            aria-label="Close"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="modal-content">
          <div className="modal-image-wrap">
            <img
              src={candy.image}
              alt={candy.name}
              className="modal-image"
              loading="lazy"
            />
          </div>

          <ul className="modal-facts">
            <li><strong>Calories:</strong> {candy.calories}</li>
            <li><strong>Description:</strong> {candy.description}</li>
            <li><strong>Ingredients:</strong> {candy.ingredients.join(", ")}</li>
          </ul>
        </div>

        <footer className="modal-footer">
          <button className="modal-btn" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
}
