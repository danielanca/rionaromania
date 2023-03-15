import Button from "./Button";

interface Props {
  buttons: string[];
  handleClick: (text: string) => void;
  active: string;
}

export default function ButtonsList({ buttons, handleClick, active }: Props) {
  return (
    <div className="row">
      <div className="mx-auto d-flex flex-wrap col-lg-10 col-xl-6 col-md-10 col-12 buttons-list justify-content-center">
        {buttons.map((button, idx) => (
          <Button
            key={idx}
            text={button}
            handleClick={handleClick}
            active={active}
          />
        ))}
      </div>
    </div>
  );
}
