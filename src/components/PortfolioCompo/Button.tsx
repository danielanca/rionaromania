interface Props {
  text: string;
  handleClick: (text: string) => void;
  active: string;
}

export default function Button({ text, handleClick, active }: Props) {
  return (
    <div
      className={`br-2 rounded-5 py-1 px-3 categ-button ${
        active === text ? "button-active" : ""
      }`}
      onClick={() => handleClick(text)}
    >
      {text}
    </div>
  );
}
