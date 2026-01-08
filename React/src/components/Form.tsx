import { useState } from "react";

interface FormProps {
  onSubmit(order: { name: string; cups: number }): void;
}

export function Form({ onSubmit }: FormProps) {
  const [name, setName] = useState<string>("Masala");
  const [cups, setCups] = useState<number>(1);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); //e.preventDefault() is a JavaScript method used to stop the browser’s default behavior for an event.
    onSubmit({ name, cups });
  }
  //Browsers automatically do certain things:
  // Form submit ➜ page reload
  // <a> click ➜ navigate to another page
  // Right-click ➜ open context menu
  // Key press ➜ type character

  //onSubmit inside form element does NOT enable submission,It only lets React intercept it
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>chai name</label>
        <input
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <label>Cups</label>
        <input
          type="number"
          value={cups}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCups(Number(e.target.value) || 0)
          }
        />
        <button type="submit">Place Order</button>
      </form>
    </>
  );
}
