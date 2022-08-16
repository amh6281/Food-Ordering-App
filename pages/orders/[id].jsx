import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
  const status = 0;
  const statusClass = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tbody>
              <tr className={styles.tr}>
                <th>주문 ID</th>
                <th>고객</th>
                <th>주소</th>
                <th>합계</th>
              </tr>
              <tr>
                <td>
                  <span className={styles.id}>135153515</span>
                </td>
                <td>
                  <span className={styles.name}>안명회</span>
                </td>
                <td>
                  <span className={styles.address}>쌍용 15길, 17</span>
                </td>
                <td>
                  <span className={styles.total}>₩35,800</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <Image src="/img/paid.png" width={30} height={30} alt="" />
            <span>결제완료</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <Image src="/img/bake.png" width={30} height={30} alt="" />
            <span>상품준비중</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <Image src="/img/bike.png" width={30} height={30} alt="" />
            <span>배달중</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <Image src="/img/delivered.png" width={30} height={30} alt="" />
            <span>도착</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src="/img/checked.png"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
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
          <butto disabled className={styles.button}>
            결제하기
          </butto>
        </div>
      </div>
    </div>
  );
};

export default Order;
