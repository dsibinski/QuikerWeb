type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <input type="button" onClick={onClick}>
      {children}
    </input>
  );
};
