import { useInvoice } from '@/hooks/useInvoice'
import { createNewInvoice } from '@/lib/tools';
import { Service } from '@/types/service';
import React from 'react'
import { HiOutlineTrash } from "react-icons/hi";

interface Props {
  employee: string,
}

interface ServiceWithQuantity extends Service {
  quantity: number;
  order: number;
}

const ShopCart = ({ employee }: Props) => {
  const { invoice, setInvoice } = useInvoice();

  // When this component loads it creates an empty new Ticket
  // And sets it in the context

  React.useEffect(() => {
    // Create a new empty ticket when the component loads
    const newInvoice = createNewInvoice();
    // Set the new ticket in the context
    setInvoice(newInvoice);
  }, [setInvoice]);



  const groupServicesById = (services: Service[]) => {
    const result = services.reduce((acc, curr) => {
      const found = acc.find(item => item.service_id === curr.service_id);
      if (found) {
        found.quantity += 1;
      } else {
        // Start with quantity equal to 1  
        acc.push({ ...curr, quantity: 1, order: acc.length });
      }
      return acc;
    }, [] as ServiceWithQuantity[]);

    // Sort by order
    return result.sort((a, b) => a.order - b.order);

  };

  const handleRemove = (service_id: number) => {
    // Remove the service from the invoice
    // As they can be more than 1 service with the same service_id, remove only 1
    if (!invoice) {
      return;
    }

    const newServices = [...invoice.services];
    // Find the index starting from the end
    const index = newServices.slice().reverse().findIndex((service) => service.service_id === service_id);
    // Remove the service from the array
    newServices.splice(newServices.length - 1 - index, 1);


    setInvoice({ ...invoice, services: newServices });
  }

  // If invoice exists, group the services  
  const groupedServices = invoice?.services ? groupServicesById(invoice.services) : [];

  // If iunvoice exists, calculate the total amount
  const total = invoice?.services ? invoice.services.reduce((acc, curr) => {
    return acc + parseFloat(curr.price);
  }, 0) : 0;

  // If invoice exists, calculate the TAX amount
  const tax = invoice?.services ? invoice.services.reduce((acc, curr) => {
    return acc + parseFloat(curr.price) * 0.21;
  }, 0) : 0;

  // Boolean for invoice empty
  const invoiceEmpty = invoice?.services.length === 0 && invoice?.products.length === 0;


  return (
    <>
      {invoice && (<div className="px-2 py-5 w-1/3">
        <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200">
          <div className="text-center p-4 border-t-2 border-b-2 border-dashed font-sans">
            <div className="text-xl font-semibold">Centro de Belleza Marleny</div>
            <div className="text-sm mt-2">
              <span className="block">123 Main St, City</span>
              <span className="block">Tel: (123) 456-7890</span>
            </div>
            <div className="text-sm mt-4">
              <span className="block">Le atendió: {employee} </span>
              <span className="block">{invoice.created_at}</span>
            </div>
            <div className="mt-5 mb-5 pt-5 border-t-2 border-dashed">
              {groupedServices.map((service) => {
                const totalLinePrice = service.quantity * parseFloat(service.price);
                return (
                  <div key={service.service_id} className="flex gap-3 justify-between mt-2 items-center">
                    <span>{service.quantity}</span>
                    <span className="text-left grow">{service.name}</span>
                    <span>{parseFloat(service.price).toFixed(2)}</span>
                    <span>{totalLinePrice.toFixed(2)}</span>
                    <HiOutlineTrash onClick={() => handleRemove(service.service_id)} className="text-red-500 cursor-pointer text-xl" />
                  </div>)
              })}
            </div>
          </div>
          {!invoiceEmpty && (<div>
            {total && (<div className="text-right mt-4 text-sm"><span className="font-semibold">IVA:</span> {tax.toFixed(2)} €</div>)}
            {total && (<div className="text-right mt-2"><span className="font-semibold">Total:</span> {total.toFixed(2)} €</div>)}
          </div>)}
          <div>
            {!invoiceEmpty && <button className="w-full mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Pagar</button>}
          </div>

        </div>
      </div>)}
    </>
  )
}

export default ShopCart