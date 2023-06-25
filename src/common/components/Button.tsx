type ButtonProps = {
  label: string;
  onClick?: () => void;
};

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <input type="button" onClick={onClick}>
      {label}
    </input>
  );
};
