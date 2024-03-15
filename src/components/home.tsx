import { animated, useScroll, useSpring } from "@react-spring/web";

const Home = () => {
  const { scrollYProgress } = useScroll();

  const animatedText = useSpring({
    marginTop: scrollYProgress.to([0, 1], ["0%", "50%"]),
    config: {},
    immediate: true,
  });

  const animatedLeaf = useSpring({
    top: scrollYProgress.to([0, 1], ["0%", "-50%"]),
    left: scrollYProgress.to([0, 1], ["0%", "50%"]),
    config: {},
    immediate: true,
  });

  const animatedHill5 = useSpring({
    left: scrollYProgress.to([0, 1], ["0%", "30%"]),
    config: {},
    immediate: true,
  });

  const animatedHill4 = useSpring({
    left: scrollYProgress.to([0, 1], ["0%", "-30%"]),
    config: {},
    immediate: true,
  });

  const animatedHill1 = useSpring({
    top: scrollYProgress.to([0, 1], ["0%", "-20%"]),
    config: {},
    immediate: true,
  });

  const Images = [
    {
      src: "/hill1.png",
      animate: animatedHill1,
      onTop: false,
    },
    {
      src: "/hill2.png",
      animate: null,
      onTop: false,
    },
    {
      src: "/hill3.png",
      animate: null,
      onTop: false,
    },
    {
      src: "/hill4.png",
      animate: animatedHill4,
      onTop: false,
    },
    {
      src: "/hill5.png",
      animate: animatedHill5,
      onTop: false,
    },
    {
      src: "/leaf.png",
      animate: animatedLeaf,
      onTop: false,
    },
    {
      src: "/plant.png",
      animate: null,
      onTop: true,
    },
    {
      src: "/tree.png",
      animate: null,
      onTop: false,
    },
  ];

  return (
    <div id="home" className=" w-full h-screen relative overflow-hidden">
      {Images.map((i, index) => {
        return (
          <animated.img
            style={i.animate ? i.animate : {}}
            key={index}
            src={i.src}
            className={`absolute w-full h-screen pointer-events-none left-0 top-0 object-cover object-right  ${
              i.onTop ? "z-20" : ""
            }`}
          />
        );
      })}

      <animated.h1
        style={{ ...animatedText }}
        className="w-max absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[26px] lg:text-[80px] text-white uppercase"
      >
        paralax website
      </animated.h1>
    </div>
  );
};

export default Home;
