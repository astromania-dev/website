import React from 'react'
import type { ReactElement } from 'react'

import styles from './Example.module.css'

export const Example = (): ReactElement => {
  return (
    <section className={styles.section}>
      <p>Hello, world!</p>
    </section>
  )
}
