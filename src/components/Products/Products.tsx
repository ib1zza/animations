import s from "./Products.module.scss";
import {
  useInView,
  useScroll,
  useTransform,
  motion,
  m,
  useMotionValueEvent,
} from "motion/react";
import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard/ProductCard";
export const Products = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,

    offset: ["start end", "center start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.25, 0.75, 0.9, 1],
    [0, 0, 1, 1, 0, 0]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const mockProducts: Product[] = [
    {
      id: 1,
      title: "t shirt",
      description: "lorem ipsum dolor sit",
      img: "/test.jpg",
      price: 3500,
    },
    {
      id: 2,
      title: "t shirt",
      description: "lorem ipsum dolor sit",
      img: "/test.jpg",
      price: 3500,
    },
    {
      id: 3,
      title: "t shirt",
      description: "lorem ipsum dolor sit",
      img: "/test.jpg",
      price: 3500,
    },
    {
      id: 4,
      title: "t shirt",
      description: "lorem ipsum dolor sit",
      img: "/test.jpg",
      price: 3500,
    },
    {
      id: 5,
      title: "t shirt",
      description: "lorem ipsum dolor sit",
      img: "/test.jpg",
      price: 3500,
    },
    {
      id: 6,
      title: "t shirt",
      description: "lorem ipsum dolor sit",
      img: "/test.jpg",
      price: 3500,
    },
  ];

  return (
    <div ref={sectionRef} className={s.products}>
      <motion.div className={s.innerContainer} style={{ opacity }}>
        <div className={s.products__list}>
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
