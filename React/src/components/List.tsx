import type { Chai } from "../types/types"; //this is to tell only types are getting import not functionality
import { Card } from "./Card";

interface ListProps {
  items: Chai[];
}

export function List({ items }: ListProps) {
  return (
    <div>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          isSpecial={item.price > 30}
        />
      ))}
    </div>
  );
}

export default List;
