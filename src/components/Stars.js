import Star from "./images/star.png";

export function Stars(props) {
  const stars = [];

  for (let i = 0; i < props.rating; i++) {
    stars.push(<img key={i} src={Star} alt="Star"></img>);
  }

  return stars;
}
