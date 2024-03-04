import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

import Logo from "../../../public/image/logo.png";
import Button from "../common/Button";

const NavBar = () => {
  return (
    <>
      <nav className="max-w-[1380px] h-24 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img src={Logo} alt="Logo" className="pb-4" />
          <ul className="flex items-center gap-5 text-gray-800">
            <li className="flex items-center gap-2">
              Product
              <span>
                <IoIosArrowDown className="" />
              </span>
            </li>
            <li className="flex items-center gap-2">
              Solutions
              <span>
                <IoIosArrowDown className="" />
              </span>
            </li>
            <li className="flex items-center gap-2">
              Resources
              <span>
                <IoIosArrowDown className="" />
              </span>
            </li>
            <li className="">Enterprise</li>
            <li className="">Pricing</li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-4">
            <li className="flex items-center uppercase gap-1">
              <TbWorld className="w-6 h-6" />
              <span className="">en</span>
            </li>
            <li>Contact Sales</li>
            <li className="">Login</li>
            <li>
              <Button btnName="Sign up free" symbol="→" />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
