import React from 'react'
import { IoIosMoon } from "react-icons/io";

import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.container}>
        Where in the world?
        <button>
            <IoIosMoon/>
            Dark Mode
        </button>
    </header>
  )
}