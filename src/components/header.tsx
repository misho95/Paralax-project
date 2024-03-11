import { animated, useSpring } from "@react-spring/web";
import { usePrevious, useWindowScroll } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";

export const links = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

const Header = () => {
  const [{ y }] = useWindowScroll();
  const prevY = usePrevious(y);
  const [hidden, setHidden] = useState(false);

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

  return (
    <animated.header
      style={animateHide}
      className="py-[5px] lg:py-[30px] px-[10px] lg:px-[100px] flex justify-between items-center fixed top-0 left-0 w-full bg-white/50 backdrop-blur-2xl z-50"
    >
      <h3 className=" text-xl sm:text-2xl text-[#359381]">LOGO</h3>
      <nav>
        {links.map((l, index) => {
          return (
            <a
              key={index}
              className="no-underline text-[#359381] py-[6px] px-[7px] sm:px-[15px] rounded-[20px] font-semibold hover:bg-[#359381] hover:text-white"
              href={l.href}
            >
              {l.title}
            </a>
          );
        })}
      </nav>
    </animated.header>
  );
};

export default Header;
