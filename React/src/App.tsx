import { Card } from "./components/Card.tsx";
import { Counter } from "./components/Counter.tsx";
import './App.css'
import type { Chai } from "./types/types.ts";
import List from "./components/List.tsx";
import { Form } from "./components/Form.tsx";
import NewCard from "./components/NewCard.tsx";

const menu: Chai[] = [
  { id: 1, name: "masala", price: 30 },
  { id: 2, name: "ginger", price: 50 },
  { id: 3, name: "lemon", price: 60 },
];

function App() {
  return (
    <>
      <div>
        <h1>REACT IN TS</h1>
        <Card name="macbook" price={100000} isSpecial/>
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <List items={menu}/>
      </div>
      <div>
        <Form onSubmit={(order) => {
          console.log("placed: " , order.name , order.cups)
        }}/>
      </div>
      <div>
        <NewCard title="react and ts" footer={<button>Order now</button> } /> 
      </div>
    </>
  );
}

export default App;
