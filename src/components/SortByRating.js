export function SortByRating(props) {
  function handleClick() {
    props.sortRating();
  }
  return <button onClick={handleClick}>Betygsordning</button>;
}
