import logo from "../../assets/Band-logo.png";

const Logo = () => {
  return (
    <div className="flex flex-1 items-center gap-2">
      <img
        src={logo}
        alt="Movie Explorer logo"
        className="h-10 w-12 object-contain "
      />

      <div className="text-lg font-bold whitespace-nowrap">
        Movie <span className="text-secondary">Explorer</span>{" "}
      </div>
    </div>
  );
};

export default Logo;
