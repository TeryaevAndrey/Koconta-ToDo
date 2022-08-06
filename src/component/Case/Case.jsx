import React from "react";
import styles from "./Case.module.scss";
import deleteImg from "../../img/delete.svg";
import check from "../../img/check.svg";

const Case = (props) => {
  const [done, setDone] = React.useState(props.done);

  const onDone = (id) => {
    let local = JSON.parse(localStorage.getItem("items"));

    setDone(!done);

    local.forEach((el) => {
      if (el.id === id) {
        el.done = !done;
      }
    });

    localStorage.setItem("items", JSON.stringify(local));
  };

  return (
    <div
      className={styles.case}
      style={{ backgroundColor: done ? "#20AD25" : "#FAFAFA" }}
    >
      <img onClick={() => onDone(props.id)} src={check} alt="check" />
      <span>{props.text}</span>
      <img onClick={props.remove} src={deleteImg} alt="delete" />
    </div>
  );
};

export default Case;
