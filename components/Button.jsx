export default function Button({ text, onClick, variant, className }) {
  const baseStyles = "rounded-full px-6 py-2 font-semibold transition-shadow shadow-md hover:shadow-lg";
  const variants = {
    hero: "bg-blue-600 text-white dark:bg-blue-400 dark:text-black",
    card: "bg-blue-600 text-white dark:bg-blue-400 dark:text-black w-full"
  };

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {text}
    </button>
  );
}