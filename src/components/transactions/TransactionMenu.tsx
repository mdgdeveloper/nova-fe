import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";


const TransactionMenu = () => {
  return (
    <div className="flex gap-8 text-2xl items-center">
      <div className="flex gap-2 items-center">
        <ImCross />
        <div>Cancelar</div>
      </div>
      <div className="flex gap-2 items-center">
        <FaCheck />
        <div>Finalizar</div>
      </div>
    </div>
  )
}

export default TransactionMenu