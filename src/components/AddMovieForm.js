import { SaveMovieButton } from "./SaveMovieButton";
import { useState } from "react";

export function AddMovieForm(props) {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  function clearInput() {
    setTitle("");
    setRating(0);
  }

  return (
    <div className="form">
      <label htmlFor="title-field">Titel:</label>
      <input
        value={title}
        type="text"
        id="title-field"
        className="form-control"
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <label htmlFor="rating-field">Betyg:</label>
      <select
        type="text"
        id="rating-field"
        className="form-control"
        value={rating}
        onChange={(e) => setRating(e.currentTarget.value)}
      >
        <option value="0">Välj betyg här...</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <SaveMovieButton
        addMovie={props.addMovie}
        title={title}
        rating={rating}
        clear={clearInput}
      />
    </div>
  );
}
