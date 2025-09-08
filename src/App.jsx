import { useState } from 'react';
import UserInputSection from './components/UserInputSection';
import ResultSection from './components/ResultSection';
import './App.css';

function App() {
  const [billValue, setBillValue] = useState('');
  const [tipValue, setTipValue] = useState('');
  const [customTipValue, setCustomTipValue] = useState('');
  const [isCustomTip, setIsCustomTip] = useState(false);
  const [peopleValue, setPeopleValue] = useState('');
  const [usedPeopleInput, setUsedPeopleInput] = useState(false);

  return (
    <div className="main-container">
      <UserInputSection 
        billValue={billValue} setBillValue={setBillValue} 
        tipValue={tipValue} setTipValue={setTipValue} 
        customTipValue={customTipValue} setCustomTipValue={setCustomTipValue} 
        isCustomTip={isCustomTip} setIsCustomTip={setIsCustomTip} 
        peopleValue={peopleValue} setPeopleValue={setPeopleValue}
        usedPeopleInput={usedPeopleInput} setUsedPeopleInput={setUsedPeopleInput}
      />
      <ResultSection 
        billValue={billValue} setBillValue={setBillValue} 
        tipValue={tipValue} setTipValue={setTipValue} 
        setCustomTipValue={setCustomTipValue} 
        isCustomTip={isCustomTip} setIsCustomTip={setIsCustomTip} 
        peopleValue={peopleValue} setPeopleValue={setPeopleValue}
        setUsedPeopleInput={setUsedPeopleInput}
      />
    </div>
  )
}

export default App;
