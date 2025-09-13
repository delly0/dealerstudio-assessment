import Button from './Button';

export default function Hero() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url(https://res.cloudinary.com/total-dealer/image/upload/v1687754017/test/ford-ranger_rd5m4t.jpg)',
      }}
    >
      {/* Responsive inner wrapper */}
      <div className="w-11/12 sm:w-3/4 md:w-1/2 lg:max-w-[33.3333%] text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-900">
          Welcome to G Automotive
        </h1>
        <p className="mt-4 text-white dark:text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Button text="Contact Us" variant="hero" className="mt-6" />
      </div>
    </section>
  );
}