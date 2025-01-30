"use client";

import { useInvoice } from "@/hooks/useInvoice";
import { Product } from "@/types/product";
import { Service } from "@/types/service";

// This component provides management of each Item (Service/Product)

type Props = {
  // To be modified with the proper type
  item: Service | Product;
}

const Item = ({ item }: Props) => {
  const { addService, addProduct } = useInvoice();

  const handleItem = () => {
    if (item.type === 'product') {
      addProduct(item)
    }
    if (item.type === 'service') {
      addService(item)
    }
  }

  return (
    <div className="w-full h-full border rounded border-gray-200 shadow-sm cursor-pointer hover:bg-gray-100" onClick={handleItem}>
      <div className="text-sm p-5 flex items-center justify-center">
        {item.name}
      </div>
    </div>
  )
}
export default Item