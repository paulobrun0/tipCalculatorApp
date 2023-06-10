/* eslint-disable react/prop-types */
import styles from './BillResult.module.css'

export const BillResult = ({
  tipAmountPerPerson,
  totalPersonBill,
  resetBtn,
}) => {
  const formattedTipAmount = tipAmountPerPerson
    ? tipAmountPerPerson.toFixed(2)
    : '0.00'
  const formattedTotalBill = totalPersonBill
    ? totalPersonBill.toFixed(2)
    : '0.00'
  return (
    <div className={styles.containerBillResult}>
      <div className={styles.tipAmount}>
        <div className={styles.description}>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <div className={styles.billPerPerson}>
          <p>${formattedTipAmount}</p>
        </div>
      </div>
      <div className={styles.totalPerPerson}>
        <div className={styles.description}>
          <p>Total</p>
          <span>/ person</span>
        </div>
        <div className={styles.billTotalPerPerson}>
          <p>${formattedTotalBill}</p>
        </div>
      </div>
      <div className={styles.btnReset}>
        <button onClick={resetBtn}>Reset</button>
      </div>
    </div>
  )
}
