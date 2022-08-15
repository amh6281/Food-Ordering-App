import React from "react";
import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tr}>
              <th>상품</th>
              <th>이름</th>
              <th>토핑 추가</th>
              <th>가격</th>
              <th>수량</th>
              <th>합계</th>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>페퍼로니 피자</span>
              </td>
              <td>
                <span className={styles.extras}>갈릭 추가, 피클 추가</span>
              </td>
              <td>
                <span className={styles.price}>₩12,900</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₩35,800</span>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    layout="fill"
                    objectFit="cover"
                    alt=""
                  />
                </div>
              </td>
              <td>
                <span className={styles.name}>페퍼로니 피자</span>
              </td>
              <td>
                <span className={styles.extras}>갈릭 추가, 피클 추가</span>
              </td>
              <td>
                <span className={styles.price}>₩12,900</span>
              </td>
              <td>
                <span className={styles.quantity}>2</span>
              </td>
              <td>
                <span className={styles.total}>₩35,800</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>장바구니 합계</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>합계:</b>₩35,800
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>할인:</b>₩0
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>총합:</b>₩35,800
          </div>
          <button className={styles.button}>주문하기!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
