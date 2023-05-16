export function SortByAlpha(props) {
  function handleClick() {
    props.sortAlpha();
  }
  return <button onClick={handleClick}>Alfabetisk ordning</button>;
}
