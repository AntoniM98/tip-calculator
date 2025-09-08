import { useState, useEffect } from 'react';

function ResultSection({ billValue, setBillValue, tipValue, setTipValue, setCustomTipValue, isCustomTip, setIsCustomTip, peopleValue, setPeopleValue, setUsedPeopleInput }) {
  const [resetDisabled, setResetDisabled] = useState(true);
  let tipAmount = 0;

  const calculateTipAmount = () => {
    if(billValue && tipValue && peopleValue) {
      tipAmount = isCustomTip 
        ? tipValue / peopleValue
        : billValue * (tipValue / 100) / peopleValue;
    }
    
    return tipAmount.toFixed(2);
  }

  const calculateTotal = () => {
    let total = 0;

    if(billValue && peopleValue) {
      total = billValue / peopleValue + tipAmount;
    }
    
    return total.toFixed(2);
  }

  const resetInputs = () => {
    setBillValue('');
    setTipValue('');
    setCustomTipValue('');
    setIsCustomTip(false);
    setPeopleValue('');
    setUsedPeopleInput(false);
    setResetDisabled(true);
  }

  useEffect(() => {
    if(billValue || tipValue || peopleValue) {
      setResetDisabled(false);
    }
  }, [billValue, tipValue, peopleValue]);

  return (
    <div className="result-section">
      <div className="amount-container">
        <div className="amount-label">
          Tip Amount<br />
          <small>/ person</small>
        </div>
        <span id="tip-amount" className="price">${calculateTipAmount()}</span>
      </div>

      <div className="amount-container">
        <div className="amount-label">
          Total<br />
          <small>/ person</small>
        </div>
        <span id="total" className="price">${calculateTotal()}</span>
      </div>

      <button className="reset-button" onClick={resetInputs} disabled={resetDisabled}>RESET</button>
    </div>
  );
}

export default ResultSection;