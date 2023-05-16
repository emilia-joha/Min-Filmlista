import { Stars } from "./Stars";
import { DelButton } from "./DelButton";

export function Movie(props) {
  return (
    <li>
      {props.item.title}
      <div className="symbols">
        <Stars rating={props.item.rating} />
        <DelButton delMovie={props.delMovie} title={props.item.title} />
      </div>
    </li>
  );
}
