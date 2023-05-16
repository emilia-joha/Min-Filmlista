import x from "./images/delete.png";

export function DelButton(props) {
  function handleClick() {
    props.delMovie(props.title);
  }
  return (
    <img src={x} alt="Delete movie" className="delete" onClick={handleClick} />
  );
}
