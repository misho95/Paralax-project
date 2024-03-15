import { animated, useSpring } from "@react-spring/web";
import { usePrevious, useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

export const links = [
  {
    title: "Home",
    href: "home",
  },
  {
    title: "About",
    href: "about",
  },
  {
    title: "Services",
    href: "services",
  },
  {
    title: "Contact",
    href: "contact",
  },
];

const Header = () => {
  const [{ y }, scrollTo] = useWindowScroll();
  const prevY = usePrevious(y);
  const [hidden, setHidden] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const [animateHide, hideApi] = useSpring(() => ({
    from: {
      top: "0",
    },
    config: {
      duration: 200,
      mass: 5,
      friction: 120,
      tension: 120,
    },
  }));

  useEffect(() => {
    if (y === null) {
      return;
    }

    const localPrev = prevY ? prevY : 0;

    if (y > localPrev && !hidden) {
      setHidden(true);
      hideApi.start({
        from: { top: "0" },
        to: { top: "-100%" },
      });
      return;
    }

    if ((y < localPrev && hidden) || (y === 0 && hidden)) {
      setHidden(false);
      hideApi.start({
        from: { top: "-100%" },
        to: { top: "0" },
      });
      return;
    }
  }, [y]);

  const handleSetActive = (to: string) => {
    setActiveLink(to);
  };

  return (
    <animated.header
      style={animateHide}
      className="py-[5px] lg:py-[30px] px-[10px] lg:px-[100px] flex justify-between items-center fixed top-0 left-0 w-full bg-white/50 backdrop-blur-2xl z-50"
    >
      <h3 className=" text-xl sm:text-3xl text-[#359381] font-bold">LOGO</h3>
      <nav className="flex gap-[5px] sm:gap-[10px]">
        {links.map((l, index) => {
          return (
            <Link
              key={index}
              to={l.href}
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
              delay={0}
              isDynamic={true}
              onSetActive={handleSetActive}
              ignoreCancelEvents={false}
              spyThrottle={500}
              className={`no-underline ${
                activeLink === l.href
                  ? "bg-[#359381] text-white"
                  : "text-[#359381] hover:bg-[#359381] hover:text-white"
              }  py-[6px] px-[7px] sm:px-[15px] rounded-[20px] font-semibold cursor-pointer`}
            >
              {l.title}
            </Link>
          );
        })}
      </nav>
    </animated.header>
  );
};

export default Header;
