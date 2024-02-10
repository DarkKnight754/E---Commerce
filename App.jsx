import Expense from './Expense.js';

const expenses = [
  { id: 'e1', title: 'Toilet Paper', amt: 9, date: new Date(2021, 2, 28) },
  { id: 'e2', title: 'new tv set', amt: 234, date: new Date(2021, 2, 30) }
];

function App() {

  return (
    <div>
      <Expense
        title={expenses[0].title}
        amt={expenses[0].amt}
        date={expenses[0].date}
      />
      <Expense
        title={expenses[1].title}
        amt={expenses[1].amt}
        date={expenses[1].date}
      />
    </div>

  );

}

App();

export default App;
