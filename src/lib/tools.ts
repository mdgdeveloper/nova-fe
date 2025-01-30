import { Service } from "@/types/service"
import { PaymentMethod } from "@/types/enums"
import { Transaction } from "@/types/transaction"

export const getServiceInfo = async (serviceId: number): Promise<Service> => {
  const response = await fetch(`http://localhost:3000/services/${serviceId}`)
  const data = await response.json()
  return data
}



export const createNewInvoice = () => {
  // Create a new empty ticket

  const newInvoice: Transaction = {
    transaction_id: 0,
    client_id: 0,
    employee_id: 0,
    total_amount: "0",
    payment_method: "CASH" as PaymentMethod,
    created_at: new Date().toISOString(),
    products: [],
    services: []
  }

  return newInvoice
}