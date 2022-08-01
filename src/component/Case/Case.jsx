import React from 'react';
import styles from './Case.module.scss';
import deleteImg from '../../img/delete.svg';

const Case = (props) => {
   return (
      <div className={styles.case}>
         <span>
            {props.text}
         </span>
         <img onClick={props.remove} src={deleteImg} alt="delete"/>
      </div>
   );
}

export default Case;