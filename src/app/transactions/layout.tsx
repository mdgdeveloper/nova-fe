import { TicketProvider } from "@/context/invoice-context";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TicketProvider>
      <div className="min-h-screen bg-gray-50 w-full">
        <div className="">
          {children}
        </div>
      </div>
    </TicketProvider>
  );
}
