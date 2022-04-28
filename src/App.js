import ExpenseItem from "./components/EXPENSES/ExpenseItem";
import "./App.css";
import NewComp from "./components/EXPENSES/NewComp";

function App() {
  const dataArray =[
    {
      title:'kindle',
      amount:'17,000',
      date:new Date(2021, 7, 14),
    },
    {
      title:'peach milk',
      amount:'400',
      date:new Date(2021, 7, 1),
    },
    {
      title:'gadgets',
      amount:'7,000',
      date:new Date(2021, 9, 14),
    },
    {
      title:'hoodies',
      amount:'1000',
      date:new Date(2021, 10, 14),
    }
  ]
  return (
    <div>
      <h1>welcome !</h1>

        <NewComp items={dataArray} />

    </div>
  );
}

export default App;
