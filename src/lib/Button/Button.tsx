const Button = ({ label = 'hello' }: { label?: string }) => {
  return <button>My Button: {label}</button>;
};
export default Button;
