/* eslint-disable react/prop-types */
import styles from './ButtonTip.module.css'

export const ButtonTip = ({ tipLabel, calcBill }) => {
  const labelButton = (e) => {
    calcBill(e, tipLabel)
  }
  return (
    <button onClick={labelButton} className={styles.btnTip}>
      {tipLabel}%
    </button>
  )
}
