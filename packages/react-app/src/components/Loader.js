import React from 'react'

import styles from '../styles';
import { cardanoLogo} from '../assets';

const Loader = ({ title }) => {
  return (
    <div className={styles.loader}>
        <img src={cardanoLogo}
        alt="Cardano logo"
        className={styles.loaderImg}
        />
        <p className={styles.loaderText}>{title}</p>
    </div>
  )
}

export default Loader