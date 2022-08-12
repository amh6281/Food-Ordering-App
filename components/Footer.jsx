import Image from "next/image";
import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>맛 좋은 맛있는 피자집입니다.</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>오시는 길</h1>
          <p className={styles.text}>
            OO시 OO구 OO동 123번지
            <br /> OO빌딩 1층
            <br /> 010-1234-5678
          </p>
          <p className={styles.text}>
            OO시 OO구 OO동 456번지
            <br /> OO빌딩 3층
            <br /> 010-1234-5678
          </p>
          <p className={styles.text}>
            OO시 OO구 OO동 789번지
            <br /> OO빌딩 2층
            <br /> 010-1234-5678
          </p>
          <p className={styles.text}>
            OO시 OO구 OO동 135번지
            <br /> OO빌딩 1층
            <br /> 010-1234-5678
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>영업시간</h1>
          <p className={styles.text}>
            월요일 ~ 금요일
            <br /> 11:00 – 22:00
          </p>
          <p className={styles.text}>
            토요일 ~ 일요일
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
