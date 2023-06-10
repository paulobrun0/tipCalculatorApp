import { CurrencyDollar, User } from '@phosphor-icons/react'
import styles from './Bill.module.css'
import { ButtonTip } from './ButtonTip'
import { BillResult } from './BillResult'
import { useState } from 'react'
export const Bill = () => {
  const [billInput, setBillInput] = useState('')
  const [totalPersonInput, setTotalPersonInput] = useState('')
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0.0)
  const [totalPersonBill, setTotalPersonBill] = useState(0.0)
  const [customTip, setCustomTip] = useState('')

  const tipsButton = [5, 10, 15, 25, 50]

  const calcBill = (e, tipLabel) => {
    e.preventDefault()

    const billFloat = +billInput
    const totalPersonFloat = +totalPersonInput
    const customTipFloat = +customTip
    const tipValue = (billFloat * tipLabel) / 100
    const tipValueCustom = (billFloat * customTipFloat) / 100
    const totalBillPerPerson = billFloat / totalPersonFloat + tipValue
    const totalBillPerPersonCustom =
      billFloat / totalPersonFloat + customTipFloat
    setTipAmountPerPerson(tipValue)
    setTotalPersonBill(totalBillPerPerson)

    handleKeyDown(e, tipValueCustom, totalBillPerPersonCustom)
  }

  const handleKeyDown = (e, tipValueCustom, totalBillPerPersonCustom) => {
    if (e.key === 'Enter') {
      setTipAmountPerPerson(tipValueCustom)
      setTotalPersonBill(totalBillPerPersonCustom)
    }
  }

  const resetBtn = () => {
    setTipAmountPerPerson('')
    setTotalPersonBill('')
    setBillInput('')
    setTotalPersonInput('')
    setCustomTip('')
  }

  return (
    <div className={styles.containerBill}>
      <form className={styles.form}>
        <label className={styles.label}>
          Bill
          <CurrencyDollar size={24} />
          <input
            className={styles.input}
            type="number"
            placeholder="0"
            value={billInput}
            onChange={(e) => setBillInput(e.target.value)}
          />
        </label>
        <div className={styles.containerTips}>
          <label className={styles.label}>Select Tip %</label>
          <ul>
            {tipsButton.map((tipsButton) => (
              <li className={styles.list} key={tipsButton}>
                <ButtonTip tipLabel={tipsButton} calcBill={calcBill} />
              </li>
            ))}
            <li className={styles.list}>
              <input
                className={styles.inputBill}
                type="number"
                placeholder="Custom"
                value={customTip}
                onKeyDown={handleKeyDown}
                onChange={(e) => setCustomTip(e.target.value)}
              />
            </li>
          </ul>
        </div>

        <label className={styles.label}>
          Number of People
          <User size={24} />
          <input
            className={styles.input}
            type="number"
            placeholder="0"
            value={totalPersonInput}
            onChange={(e) => setTotalPersonInput(e.target.value)}
          />
        </label>
      </form>
      <BillResult
        tipAmountPerPerson={tipAmountPerPerson}
        totalPersonBill={totalPersonBill}
        resetBtn={resetBtn}
      />
    </div>
  )
}
