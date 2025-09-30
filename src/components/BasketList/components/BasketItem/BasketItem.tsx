export default function BasketItem({ name, quantity}: { name: string, quantity: number}) {
  return <div key={name}>{name} quantity: {quantity}</div>;
};
