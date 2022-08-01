import React from 'react';
import styles from "./Case.module.scss";

const Case = (props) => {
   return(
      <div className={styles.case}>
         <span>
            {props.text}
         </span>
         <img onClick={props.remove} src="img/delete.svg" alt="delete"/>
      </div>
   );
}

export default Case;