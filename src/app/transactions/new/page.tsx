"use client";
import { Employee } from "@/types/employee";
import HeaderTransaction from "@/components/transactions/HeaderTransaction";
import NumPad from "@/components/transactions/NumPad"
import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import MainPos from "@/components/pos/MainPos";
import ShopCart from "@/components/pos/ShopCart";

const TransactionPage = () => {
  const [pin, setPin] = useState<string>("")
  const [employee, setEmployee] = useState<Employee | null>(null)
  const [alert, setAlert] = useState<boolean>(false)


  // UseEffect to on the first load, remove any pin value
  useEffect(() => {
    setPin("")
    setEmployee(null)
  }, [])


  // UseEffect to check, once pin is changed, if the pin is correct
  // And add the Employee in that case to the state

  useEffect(() => {

    const getEmployee = async (pin: string) => {
      // Fetch the Employee from the API
      //  Post to http://localhost:3000/auth with JSON body { "pin": pin }
      // Convert pin to number

      const pinNum = parseInt(pin)
      setAlert(false)

      try {
        const response = await fetch('http://localhost:3000/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ pin: pinNum })
        })



        const data = await response.json()
        console.log("data", data)
        if (data.error) {
          setAlert(true)
          setPin("")
        }
        else {
          setEmployee(data)
        }
      } catch (error) {
        console.error(error)
      }

    }
    if (pin.length === 4) {
      // Fetch the Employee from the API
      getEmployee(pin)
    }
  }, [pin])

  return (
    <div className="">
      {/* Header Transaction with User */}
      {employee ? <>
        <HeaderTransaction employee={employee}
        />
        <div className="flex gap-2 justify-between">
          <MainPos />
          <ShopCart employee={employee.first_name} />
        </div>
      </> : <NumPad setFinal={setPin} pin={pin} />}
      {alert && <div className="p-10"><Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          El PIN introducido no coincide con ningún empleado
        </AlertDescription>
      </Alert></div>}
    </div>
  )
}

export default TransactionPage