import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

import styles from './styles.module.scss';

type propTypes = {
  setCountries: any
}

export function DropBox({setCountries}: propTypes) {
  const [isActive, setActive] = React.useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.filter} onClick={() => setActive((state) =>  !state)}>Filter by Region<IoIosArrowDown/></button>
        <div className={ isActive? styles.show : styles.hide}>
            <a>all</a>
            <a>africa</a>
            <a>america</a>
            <a>asia</a>
            <a>europe</a>
            <a>oceania</a>
        </div>
    </div>
  )
}
