import '../App.css'; // Use a regular import statement
import Typewriter from 'typewriter-effect';



const LogoAndText = () => {
  return (
    <section id="home">
      {/* Logo and Intro Section */}
      <div className="flex flex-col md:flex-row justify-center items-center mt-20">
        <div className="text-center w-[90%] md:w-[550px] mb-10">
          <div className="text-5xl md:text-7xl">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Ne Se Chete')
                  .start()
              }}
            />
          </div>
          <div className="text-xl md:text-3xl mt-4">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000) // Pause before typing the second string
                  .typeString('Success is loading...')
                  .start();
              }}
            />
          </div>
        </div>
        <div className="hidden md:block md:w-[170px]"></div>
        <img src="src/assets/logo.png" className="h-[300px] w-[300px] md:h-[450px] md:w-[450px]" alt="Logo" />
        <div className="md:hidden block h-[120px]"></div>
      </div>
    </section>
  );
};

export default LogoAndText;
