import React from "react";
import CandyModal from "./CandyModal";
import "./card.css";

export default function CandyCard({ candy }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <article className="card" aria-label={`${candy.name} card`}>
        <div className="card-image-wrap">
          <img
            src={candy.image}
            alt={candy.name}
            className="card-image"
            loading="lazy"
          />
        </div>

        <div className="card-body">
          <h3 className="card-title">{candy.name}</h3>
          <p className="card-desc">{candy.description}</p>

          <button
            className="card-btn"
            onClick={() => setOpen(true)}
            aria-haspopup="dialog"
            aria-controls={`modal-${candy.id}`}
          >
            View Calories
          </button>
        </div>
      </article>

      <CandyModal
        id={`modal-${candy.id}`}
        open={open}
        onClose={() => setOpen(false)}
        candy={candy}
      />
    </>
  );
}
