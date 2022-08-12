import React, { useState } from "react";
import styles from "../../styles/Product.module.css";
import Image from "next/image";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "페퍼로니 피자",
    price: ["12,900", "15,900", "18,900"],
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita vitae molestiae accusantium earum? Adipisci reiciendis, sapiente ",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>₩{pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>사이즈 선택</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>R</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>L</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>F</span>
          </div>
        </div>
        <h3 className={styles.choose}>추가 선택</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="topping"
              name="topping"
              className={styles.checkbox}
            />
            <label htmlFor="topping">토핑 추가</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="cheese"
              name="cheese"
            />
            <label htmlFor="cheese">치즈 추가</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="pickle"
              name="pickle"
            />
            <label htmlFor="spicy">피클 추가</label>
          </div>
          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id="garlic"
              name="garlic"
            />
            <label htmlFor="garlic">갈릭 추가</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>장바구니 담기</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
