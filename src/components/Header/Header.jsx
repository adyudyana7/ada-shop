import { Link } from "react-router-dom";
import { Search, UserCircle2, ShoppingBag, Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between py-4 px-8">
      <div className="flex ">
        <Menu className="block  md:hidden" color="#000" strokeWidth={1.25} />
        <h1 className="text-base md:text-2xl"> 3legant</h1>
      </div>
      <nav className="hidden md:flex gap-x-10 text-gray-500">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/product">Products</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
      <div className="flex">
        <Link to="/sign-in">
          {" "}
          <Search className="hidden md:block" color="#000" strokeWidth={1.25} />
        </Link>
        <Link to="/sign-up">
          {" "}
          <UserCircle2
            className="hidden md:block "
            color="#000"
            strokeWidth={1.25}
          />
        </Link>

        <ShoppingBag color="#000" strokeWidth={1.25} />
      </div>
    </header>
  );
}

export default Header;
