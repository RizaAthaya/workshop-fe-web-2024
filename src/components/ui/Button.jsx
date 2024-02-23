const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  const getButtonVariation = (variation) => {
    switch (variation) {
      case "primary":
        return "bg-white hover:bg-blue border rounded-xl border-blue text-blue hover:text-white";
      case "secondary":
        return "bg-dark-blue hover:bg-blue text-white";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation)}
       font-medium rounded-xl py-3 px-6 transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
