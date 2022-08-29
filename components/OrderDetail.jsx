import React, { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>만나서 결제하기</h1>
        <div className={styles.item}>
          <label className={styles.label}>이름</label>
          <input
            placeholder="홍길동"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>휴대폰 번호</label>
          <input
            type="text"
            placeholder="010 1234 5678"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>주소</label>
          <textarea
            rows={5}
            placeholder="충청남도 천안시 서북구 쌍용동"
            type="text"
            className={styles.textarea}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          주문하기
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
