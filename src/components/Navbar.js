const Navbar = () => {
  return (
    <nav className="bg-[--ac-4] text-[--ac-1]">
      <div className="mx-64 py-4 flex items-center justify-between">
        <div className="logo">
          <a href="/">
            <h3 className="font-bold text-xl">
              Retirement Planning Calculator
            </h3>
          </a>
        </div>
        <div className="nav-links">
          <ul className="flex items-center justify-between gap-x-4 font-medium">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/keyfeatures">Key Features</a>
            </li>
            <li>
              <a href="/calculate">Calculate</a>
            </li>
            <li>
              <a href="/auth">Login/Signup</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
