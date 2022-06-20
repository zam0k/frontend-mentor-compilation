import React from 'react'
import { IoIosArrowDown } from 'react-icons/io';

import styles from './dropBox.module.scss';

type propTypes = {
  setFilter: React.Dispatch<React.SetStateAction<string>>
}

export function DropBox({setFilter}: propTypes) {
  const [isActive, setActive] = React.useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.filter} onClick={() => setActive((state) =>  !state)}>Filter by Region<IoIosArrowDown/></button>
        <ul className={ isActive? styles.show : styles.hide}>
            <li onClick={() => setFilter('all')}>all</li>
            <li onClick={() => setFilter('region/africa')}>africa</li>
            <li onClick={() => setFilter('region/america')}>america</li>
            <li onClick={() => setFilter('region/asia')}>asia</li>
            <li onClick={() => setFilter('region/europe')}>europe</li>
            <li onClick={() => setFilter('region/oceania')}>oceania</li>
        </ul>
    </div>
  )
}
