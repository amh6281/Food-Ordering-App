import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>상품</th>
              <th>이름</th>
              <th>토핑 추가</th>
              <th>가격</th>
              <th>수량</th>
              <th>합계</th>
            </tr>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src={product.img}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.name}>{product.title}</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    {product.extras.map((extra) => (
                      <span key={extra._id}>{extra.text},</span>
                    ))}
                  </span>
                </td>
                <td>
                  <span className={styles.price}>₩{product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}>{product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    ₩{product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>장바구니 합계</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>합계:</b>₩{cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>할인:</b>₩0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>총합:</b>₩{cart.total}
          </div>
          <button className={styles.button}>주문하기!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
