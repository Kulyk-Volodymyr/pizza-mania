"use client";
import { useEffect } from "react";
import { useProductsStore } from "./productsStore";

export function ProductsProvider({ children }: { children: React.ReactNode }) {
  const { data, fetchData } = useProductsStore();

  useEffect(() => {
    if (!data) fetchData();
  }, [data, fetchData]);

  return <>{children}</>;
}
