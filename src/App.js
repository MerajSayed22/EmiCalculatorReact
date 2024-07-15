import {useState,useEffect} from 'react'
import './App.css';

function App() {
  const [loanAmount,setLoanAmount] = useState(0)
  const [loanval,setLoanval] = useState(0)
  const [downpayment,setDownpayment] = useState(0)
  const [interest,setInterest] = useState(0)
  const [tenure,setTenure] = useState(0)
  const [TotalAmountPayable,setTotalAmountPayable] = useState(0)
  const [emi,setEmi] = useState(0)

  useEffect(() => {
    // Calculate EMI whenever TotalAmountPayable or tenure changes
    if (TotalAmountPayable !== 0 && tenure !== 0) {
      setEmi(TotalAmountPayable / tenure);
    }
  }, [TotalAmountPayable, tenure]);

  function calculate(){
  
  let loanvalue =  loanAmount - downpayment;

  let interestValue = (loanvalue*(tenure/12)*interest)/100;

  

  setTotalAmountPayable(loanvalue + interestValue);

  setLoanval(loanvalue);

  setEmi(TotalAmountPayable/tenure);
  
  




 }

  return (
    <>
    <h1>EMI Calculator</h1>

    <div className='emiCalculatorCard'>

    <div className='loanAmount'>
      Loan Amount <input type='text'onChange={(e)=>{setLoanAmount(e.target.value)}}/>
    </div>

    <div className='downpayment'>
      Downpayment <input type='text'onChange={(e)=>{setDownpayment(e.target.value)}}/>
    </div>

    <div className='interest'>
      Rate of Interest (per annum) <input type='text'onChange={(e)=>{setInterest(e.target.value)}}/>
    </div>

    <div className='tenure'>
      Tenure (in months) <input type='text'onChange={(e)=>{setTenure(e.target.value)}}/>
    </div>

    <button id='btn' onClick={calculate}>Calculate Now</button>

<div className='result'>Total Amount of loan taken after paying the downpayment is Rs.{loanval}</div>
   
<div className='result'>This will be your total Amount you pay after {tenure} months : Rs.{TotalAmountPayable}</div>

<div className='result'> You will have to pay a monthly Emi of  Rs.{Math.round(emi)}</div>
    
    
    


</div>

</>
  )

  }  


export default App;
