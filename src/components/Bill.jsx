import { CurrencyDollar, User } from '@phosphor-icons/react'
import styles from './Bill.module.css'
import { ButtonTip } from './ButtonTip'
import { BillResult } from './BillResult'
import { useState } from 'react'
export const Bill = () => {
  const [billInput, setBillInput] = useState(100)
  const [totalPersonInput, setTotalPersonInput] = useState(2)
  const [customTip, setCustomTip] = useState('')
  const [tipAmountPerPerson, setTipAmountPerPerson] = useState(0.0)
  const [totalPersonBill, setTotalPersonBill] = useState(0.0)
  const [billInputCheck, setBillInputCheck] = useState(false)
  const [totalPersonInputCheck, setTotalPersonInputCheck] = useState(false)

  const tipsButton = [5, 10, 15, 25, 50]

  const calcBill = (e, tipLabel) => {
    e.preventDefault()

    const billFloat = parseFloat(billInput)
    const totalPersonFloat = parseFloat(totalPersonInput)

    if (!billFloat && !totalPersonFloat) {
      setBillInputCheck(true)
      setTotalPersonInputCheck(true)
    } else if (!billFloat || billFloat < 0) {
      setBillInputCheck(true)
      return
    } else if (!totalPersonFloat || totalPersonFloat < 0) {
      setTotalPersonInputCheck(true)
      return
    } else {
      const tipValue = (billFloat * tipLabel) / 100 / 2
      const totalBillPerPerson = billFloat / totalPersonFloat + tipValue

      setTipAmountPerPerson(tipValue)
      setTotalPersonBill(totalBillPerPerson)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      calcBill(e, parseFloat(customTip))
    }
  }

  const resetBtn = () => {
    setTipAmountPerPerson('')
    setTotalPersonBill('')
    setBillInput('')
    setTotalPersonInput('')
    setCustomTip('')
    setBillInputCheck(false)
    setTotalPersonInputCheck(false)
  }

  const handleBillInputChange = (e) => {
    setBillInput(e.target.value)
    setBillInputCheck(false)
  }

  const handleTotalPersonInputChange = (e) => {
    setTotalPersonInput(e.target.value)
    setTotalPersonInputCheck(false)
  }

  const handleCustomTip = (e) => {
    setCustomTip(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className={styles.containerBill}>
      <form className={styles.form}>
        <label className={styles.label}>
          <div className={styles.labelContent}>
            Bill
            {billInputCheck && (
              <span className={styles.check}>Can't be zero or less</span>
            )}
          </div>

          <CurrencyDollar size={24} />
          <input
            className={billInputCheck ? styles.checkInput : styles.input}
            type="number"
            placeholder="0"
            value={billInput}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
              }
            }}
            onChange={handleBillInputChange}
          />
        </label>
        <div className={styles.containerTips}>
          <label className={styles.label}>Select Tip %</label>
          <ul>
            {tipsButton.map((tip) => (
              <li className={styles.list} key={tip}>
                <ButtonTip tipLabel={tip} calcBill={calcBill} />
              </li>
            ))}
            <li className={styles.list}>
              <input
                className={styles.inputBill}
                type="number"
                placeholder="Custom"
                value={customTip}
                onKeyDown={handleKeyDown}
                onChange={handleCustomTip}
              />
            </li>
          </ul>
        </div>

        <label className={styles.label}>
          <div className={styles.labelContent}>
            Number of People
            {totalPersonInputCheck && (
              <span className={styles.check}>Can't be zero or less</span>
            )}
          </div>

          <User size={24} />
          <input
            className={totalPersonInputCheck ? styles.checkInput : styles.input}
            type="number"
            placeholder="0"
            value={totalPersonInput}
            onChange={handleTotalPersonInputChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
              }
            }}
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
