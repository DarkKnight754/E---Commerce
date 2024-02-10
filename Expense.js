// import logo from './logo.svg';
import './App.css';

function Expense(props) {

   const date = new Date(2021,2,28);
   const title = 'Car Insurance';
   const amt = 294.67;

  return (
    <>
      <div className='box'>
       <div>
        <div> {props.date.toLocaleString('en-US ', { month: 'long'} )}</div>
        <div> Year</div>
        <div>Date</div>
       </div>
        <div classname="description">
         <h2>{props.title}</h2>
       <div class="price">${props.amt}</div> 
       </div>    
      </div>
    </> 
  );
}

export default Expense;