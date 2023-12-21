import Image from "next/image";
import teslaLogo from "../../public/images/tesla-logo.svg";

const menuData1 = [
  "Model S",
  "Model 3",
  "Model X",
  "Model Y",
  "Solar Roof",
  "Solar Panels",
];

const menuData2 = ["Shop", "Account", "Menu"];

const Header = () => {
  return (
    <header>
      <div className="pt-5 flex justify-between font-bold items-center">
        <div className="ml-8">
          <Image
            className="cursor-pointer"
            width={128}
            src={teslaLogo}
            alt="tesla-logo"
          />
        </div>
        <div className="hidden lg:inline">
          <ul className="flex space-x-2 text-sm">
            {menuData1.map((menuItem) => (
              <li
                key={menuItem}
                className="py-1 px-3 hover:bg-slate-300 hover:rounded-full cursor-pointer"
              >
                {menuItem}
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <ul className="flex space-x-4 mr-2 text-sm cursor-pointer">
            {menuData2.map((menuItem) => (
              <li
                key={menuItem}
                className="cursor pointer hover:rounded-full hover:bg-slate-300 py-1 px-3"
              >
                {menuItem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
