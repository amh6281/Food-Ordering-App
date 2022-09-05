import React from "react";
import styles from "../styles/Add.module.css";
const AddButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      피자 추가하기
    </div>
  );
};

export default AddButton;
