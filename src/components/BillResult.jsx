import styles from './BillResult.module.css'

export const BillResult = () => {
  return (
    <div className={styles.containerBillResult}>
      <div className={styles.tipAmount}>
        <div className={styles.description}>
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <div className={styles.billPerPerson}>
          <p>$0.00</p>
        </div>
      </div>
      <div className={styles.totalPerPerson}>
        <div className={styles.description}>
          <p>Total</p>
          <span>/ person</span>
        </div>
        <div className={styles.billTotalPerPerson}>
          <p>$0.00</p>
        </div>
      </div>
      <div className={styles.btnReset}>
        <button>Reset</button>
      </div>
    </div>
  )
}
