import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import cubePlus from '../../assets/cubePlus.webp'
import jogado from '../../assets/jogado.jpg'
import mfImg from '../../assets/mf_img.png'
import { useRef } from "react";

const items = [
  {
    id: 1,
    title: "CubePlus",
    img: cubePlus,
    demoUrl: "https://cubeplus-demo.tradejini.com/",
    desc: "Our all-in-one trading platform designed for seamless multi-leg option strategies, stock trading, and more. With advanced charting, real-time data, and smart order execution, CubePlus Web is perfect for both beginner and seasoned traders.",
  },
  {
    id: 2,
    title: "Nxtrad Mutual Funds",
    img: mfImg,
    desc: ` high-performance mutual funds platform enabling investors to explore, invest, and track portfolios in real-time. Features include: Live NAV Updates: Automated data sync via third-party APIs and Redis caching, Secure Transactions: Integrated Razorpay payments with idempotent Golang microservices. Admin Dashboard: Role-based access for KYC approvals, user management, and fund analytics.`,
  },
  {
    id: 3,
    title: "Admin Dashboard",
    img: mfImg,
    desc: `Secure tiers for admins, managers, and support staff. Granular permissions for KYC approvals, fund management, and user data access. Document verification with automated alerts for pending/flagged cases. One-click approvals/rejections with comment trails.`,
  },
  {
    id: 4,
    title: "Jogado",
    img: jogado,
    desc: "A mobile app that helps people find games, organize games, and connect with other sports enthusiasts. It offers a variety of sports facilities, including venues for cricket, football, badminton, and basketball.",
  }
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {!!item.demoUrl ? <button onClick={() => {
              window.open(item.demoUrl, "_blank")
            }
            } >See Demo</button> : <></>}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
