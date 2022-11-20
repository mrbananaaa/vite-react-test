import reactLogo from "../assets/react.svg";
import ToggleDarkMode from "./ToggleDarkMode";

const Navbar = () => {

  return (
    <div className="hidden md:flex p-8 bg-white dark:bg-black justify-between items-center">
      {/* logo */}
      <div className="cursor-pointer">
        <img src={reactLogo} alt="logo" className="w-[40px] h-[40px] hover:drop-shadow-[0_0_20px_rgba(30,175,201,1)] transition duration-300" />
      </div>
      {/* nav */}
      <nav>
        <ul className="flex items-center space-x-8">
          <li className="nav-items">
            <a href="/">Home</a>
          </li>
          <li className="nav-items">
            <a href="/">About</a>
          </li>
          <li className="nav-items">
            <a href="/">Profile</a>
          </li>
          <li className="nav-items">
            <a href="/">Signin</a>
          </li>
          <ToggleDarkMode />
        </ul>
      </nav>
    </div>
  );
};

export { Navbar };
