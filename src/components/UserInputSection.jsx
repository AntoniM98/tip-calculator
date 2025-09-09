import { useEffect, useState } from 'react';
import IconDollar from '../assets/icon-dollar.svg';
import IconPerson from '../assets/icon-person.svg';

function UserInputSection({ billValue, setBillValue, tipValue, setTipValue, customTipValue, setCustomTipValue, isCustomTip, setIsCustomTip, peopleValue, setPeopleValue, usedPeopleInput, setUsedPeopleInput }) {
  const [hasError, setHasError] = useState(false);
  const tips = [5, 10, 15, 25, 50];

  const handleBill = event => {
    const value = event.target.value.trim();
    setBillValue(value);
  }

  const handleTip = tipValue => {
    setIsCustomTip(false);
    setTipValue(tipValue);
  }

  const handleCustomTip = event => {
    setIsCustomTip(true);
    const value = event.target.value.trim();
    setCustomTipValue(value);
    setTipValue(value);
  }

  const handlePeople = event => {
    setUsedPeopleInput(true);
    const value = event.target.value.trim();
    setPeopleValue(value);
  }

  useEffect(() => {
    if(usedPeopleInput) 
      setHasError(peopleValue === '' || peopleValue === '0' ? true : false);
    else 
      setHasError(false);
  }, [usedPeopleInput, peopleValue]);

  return (
    <div className="user-input-section">
      <div className="input-container">
        <label htmlFor="billValue" className="heading">Bill</label>
        <div className="input-field-container">
          <img src={IconDollar} className="input-icon" />
          <input 
            id="billValue" 
            className="input-field" 
            type="number" 
            placeholder="0" 
            onChange={handleBill} 
            value={billValue} 
          />
        </div>
      </div>

      <div className="input-container">
        <p className="heading">Select Tip %</p>
        <div className="tip-grid">
          {tips.map(tip => {
            return (
              <button 
                key={tip} 
                className={`tip-button ${tipValue === tip ? 'active' : ''}`} 
                onClick={() => handleTip(tip)}
              >
                {tip}%
              </button>
            );
          })}
          <input 
            id="custom" 
            className={`tip-button custom-tip ${isCustomTip ? 'active' : ''}`} 
            type="number" 
            placeholder="Custom" 
            onClick={handleCustomTip}
            onChange={handleCustomTip}
            value={customTipValue}
          />
        </div>
      </div>

      <div className="input-container">
        <div className="label-container">
          <label htmlFor="peopleValue" className="heading">Number of people</label>
          {hasError && <span className="error-message">Can't be zero</span>}
        </div>
        <div className="input-field-container">
          <img src={IconPerson} className="input-icon" />
          <input 
            id="peopleValue" 
            className={`input-field ${hasError ? 'error' : ''}`} 
            type="number" 
            placeholder="0"
            onChange={handlePeople}
            value={peopleValue}
          />
        </div>
      </div>
    </div>
  );
}

export default UserInputSection;