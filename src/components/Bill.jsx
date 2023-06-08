import { CurrencyDollar, User } from '@phosphor-icons/react'
import styles from './Bill.module.css'
import { ButtonTip } from './ButtonTip'
import { BillResult } from './BillResult'
export const Bill = () => {
  const tipsButton = [5, 10, 15, 25, 50]

  return (
    <div className={styles.containerBill}>
      <form className={styles.form}>
        <label className={styles.label}>
          Bill
          <CurrencyDollar size={24} />
          <input className={styles.input} type="number" placeholder="0" />
        </label>
        <div className={styles.containerTips}>
          <label className={styles.label}>Select Tip %</label>
          <ul>
            {tipsButton.map((tipsButton) => (
              <li className={styles.list} key={tipsButton}>
                <ButtonTip tipLabel={tipsButton} />
              </li>
            ))}
            <li className={styles.list}>
              <input
                className={styles.inputBill}
                type="number"
                placeholder="Custom"
              />
            </li>
          </ul>
        </div>

        <label className={styles.label}>
          Number of People
          <User size={24} />
          <input className={styles.input} type="number" placeholder="0" />
        </label>
      </form>
      <BillResult />
    </div>
  )
}
