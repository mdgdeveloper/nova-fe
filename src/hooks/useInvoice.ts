import { useContext } from "react";
import {
  InvoiceContext, InvoiceContextType
} from "../context/invoice-context";

export const useInvoice = (): InvoiceContextType => {
  const context = useContext(InvoiceContext);
  if (!context) {
    throw new Error("useTicket must be used within a TicketProvider");
  }

  const { invoice, setInvoice } = context;
  return { invoice, setInvoice, addService: context.addService, addProduct: context.addProduct };
};
