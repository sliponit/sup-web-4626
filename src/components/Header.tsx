import Container from "@/components/Container";
import { animateScroll as scroll, Link } from "react-scroll";
import { useState } from "react";

const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const [isHeaderExpanded, setHeaderState] = useState(false);

  const expandClicked = (event: any) => {
    event.preventDefault();
    setHeaderState(!isHeaderExpanded);
  };

  const navigation = [
    { section: "build", title: "Build", offset: -120 },
    { section: "resources", title: "Resources", offset: -100 },
    { section: "adopters", title: "Early Adopters", offset: -70 },
    { section: "vaultscan", title: "Explore Vaults", offset: -200 },
    { section: "authors", title: "Authors", offset: -100 }
  ];
  return (<header className="indexHeader w-screen md:full">
    <Container>
      <nav className="relative flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="h-8 w-auto sm:h-10" onClick={scrollToTop}>
            <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl">
                <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">
                  ERC-4626
                </span>
            </h2>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={expandClicked}
              aria-expanded={isHeaderExpanded}>
              <span className="sr-only">Navigate through</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
        <nav className="hidden md:block md:ml-10 md:space-x-10">
          {navigation.map((link, index) =>
            (<Link
                to={link.section}
                key={`nav-desk-${index}`}
                spy={true}
                smooth={true}
                offset={link.offset}
                duration={500}
                className="hover:underline font-medium text-pink-700 hover:text-pink-700 underline-offset-4 decoration-from-font cursor-pointer"
              >{link.title}</Link>
            ))}
        </nav>
      </nav>
      <div className={`absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right ${isHeaderExpanded ? "" : "hidden"}`}>
        <div className="rounded-lg shadow-sm bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className="px-5 pt-4 flex items-center justify-between">
            <div>
              <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-4xl">
                <span className="-mb-1 pb-1 block bg-gradient-to-r from-pink-500 to-pink-900 bg-clip-text text-transparent">ERC-4626</span>
              </h2>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-pink-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
                onClick={expandClicked}
                aria-expanded={isHeaderExpanded}>
                <span className="sr-only">Close main menu</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>
          </div>
          <nav className="px-2 pt-5 pb-3 space-y-1 flex flex-col w-full">
            {navigation.map((link, index) =>
              <Link key={`nav-mob-${index}`} className="font-medium text-pink-700 hover:text-pink-700 text-lg px-3 py-2.5" to={link.section} onClickCapture={expandClicked} spy={true} smooth={true} offset={link.offset} duration={500}>{link.title}</Link>)}
          </nav>
          <a
            href="https://vaultscan.superform.xyz"
            target="_blank"
            rel="nofollow noreferrer"
            className="block w-full px-5 py-3 text-center font-medium text-pink-600 bg-pink-50 hover:bg-pink-100 hidden"
          >Check out the VaultScan by Superform</a>
        </div>
      </div>
    </Container>
  </header>);
};

export default Header;
