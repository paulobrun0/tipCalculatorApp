/* eslint-disable react/prop-types */
import styles from './ButtonTip.module.css'

export const ButtonTip = ({ tipLabel }) => {
  return <button className={styles.btnTip}>{tipLabel}%</button>
}
