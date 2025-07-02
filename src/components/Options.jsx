import css from "./Options.module.css";

export default function Options({ onOptionSelect, onReset }) {
  return (
    <div className={css.options}>
      <button onClick={() => onOptionSelect("good")}>Good</button>
      <button onClick={() => onOptionSelect("neutral")}>Neutral</button>
      <button onClick={() => onOptionSelect("bad")}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
