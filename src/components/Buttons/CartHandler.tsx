"use client";
import { useCartStore } from "@/store/cartStore";
import Counter from "./Counter";
import AddToCart from "./AddToCart";

interface Props {
  id: string;
}

export default function CartHandler({ id }: Props) {
  const { cart } = useCartStore((state) => state);

  return (
    <>
      {id in cart ? <Counter id={id} small={false} /> : <AddToCart id={id} />}
    </>
  );
}
