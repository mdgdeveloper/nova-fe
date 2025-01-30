import Item from "@/components/pos/Item"
import { Service } from "@/types/service"
import { Product } from "@/types/product"

type Props = {
  items?: (Service | Product)[],
}

const ItemsList = ({ items }: Props) => {

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Items */}
      {items && items.map((service, key) => (
        <Item key={key} item={service} />
      ))}
    </div>
  )
}

export default ItemsList