interface CardProp {
  name: string;
  price: number;
  isSpecial?: boolean;
}

export function Card({ name, price, isSpecial = false }:CardProp) {
  return (
    <>
      <article>
        <h3>
          {name}:{isSpecial && <span>🔥 </span>}
        </h3>
        <p>{price}</p>
      </article>
    </>
  );
}
