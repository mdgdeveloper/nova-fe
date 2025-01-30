"use client";
import React, { createContext, useState } from 'react';
import { Transaction } from '@/types/transaction';

export interface InvoiceContextType {
  invoice: Transaction | null;
  setInvoice: (ticket: Transaction) => void;
  addService: (service: Service) => void;
  addProduct: (product: Product) => void;
}

export const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

import { ReactNode } from 'react';
import { Service } from '@/types/service';
import { Product } from '@/types/product';

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [invoice, setInvoice] = useState<Transaction | null>(null);

  const addService = (service: Service) => {
    if (!invoice) {
      return;
    }
    setInvoice({
      ...invoice,
      services: [...invoice.services, service]
    });
  }

  const addProduct = (product: Product) => {
    if (!invoice) {
      return;
    }
    setInvoice({
      ...invoice,
      products: [...invoice.products, product]
    });
  }

  return (
    <InvoiceContext.Provider value={{ invoice, setInvoice, addService, addProduct }}>
      {children}
    </InvoiceContext.Provider>
  );
};