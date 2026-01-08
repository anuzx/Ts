import type { PropsWithChildren, ReactNode } from "react";

//PropsWithChildren adds a children prop to your component’s props type.

interface CardProps extends PropsWithChildren {
  title: string;
  footer?: ReactNode;
}
//html elements are react node

function NewCard({ title, children, footer }: CardProps) {
  return (
    <>
      <section>
        <h2>{title}</h2>
        <div>{children}</div>
        {footer && <footer>{footer}</footer>}
      </section>
    </>
  );
}

export default NewCard;


//children is a special prop automatically provided by React. It contains whatever you place between a component’s opening and closing tags.