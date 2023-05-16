export function SaveMovieButton({ addMovie, title, rating, clear }) {
  function handleClick() {
    const check = checkInput();
    if (check === true) {
      addMovie({ title: title, rating: rating });
      clearInput();
    }
  }

  function clearInput() {
    clear();
  }

  function checkInput() {
    if (title === "" && rating === "0") {
      window.alert("Det sankas en titel och ett betyg för filmen.");
      return false;
    } else if (title === "") {
      window.alert("Det saknas en titel för filmen");
      return false;
    } else if (rating === "0") {
      window.alert("Det saknas ett betyg för filmen ");
      return false;
    } else {
      return true;
    }
  }
  return <button onClick={handleClick}>Spara Film</button>;
}
