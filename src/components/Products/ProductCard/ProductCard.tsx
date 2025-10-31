import s from "./ProductCard.module.scss";
import type { IProduct } from "../../../types";

interface ProductCardProps {
  product: IProduct;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={s.product}>
      <div className={s.img}>
        <div className={s.img__bg}></div>
        <img src={product.img__image} alt="" />
      </div>

      <div className={s.productInfo}>
        <h2 className={s.card}>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.price} $</p>
      </div>
    </div>
  );
}
