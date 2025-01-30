"use client";
import { useState, FormEvent } from "react";

type Props = {
  setFinal: (code: string) => void,
  pin: string
}

const NumPad = ({ pin, setFinal }: Props) => {
  const [code, setCode] = useState(pin)
  const [digits, setDigits] = useState('')


  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value

    if (value === 'x') {
      setCode(code.slice(0, -1))
      setDigits(digits.slice(0, -1))
    } else if (value === 'ok') {
      setFinal(code)
      setCode('')
      setDigits('')
    }
    else {
      setCode(code + value)
      setDigits(digits + '*')
    }
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFinal(code)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check that the input is a number, if not do not allow to change the value
    if (isNaN(+e.target.value)) return
    setCode(e.target.value)
  }

  return (
    <div>
      <div className="bg-gray-50 flex items-center justify-center mt-20">
        <div>
          <h2 className="text-xl text-center mt-5 mb-5">Introduzca código empleado</h2>
          <div className="bg-gray-100 w-[500px] flex items-center justify-center rounded-xl">
            <div className="grid grid-cols-3 gap-8 p-10 rounded-xl">
              {/* Number Buttons */}
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'x', '0', 'ok'].map((item, index) => (
                <button
                  key={index}
                  value={item}
                  className="bg-white rounded-full h-24 w-24 flex items-center justify-center text-3xl font-semibold shadow-md hover:bg-gray-200 focus:outline-none"
                  onClick={handleClick}
                  form={item === 'ok' ? 'pinForm' : undefined}
                  type={item === 'ok' ? 'submit' : 'button'}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <form onSubmit={onSubmit} id="pinForm">
        <div className="flex items-center justify-center mt-20">
          <input name="pin" id="pin" value={code} onChange={handleChange} type="password" className="text-8xl text-center text-gray-600 w-48 h-16 border-2 border-gray-300 rounded-xl bg-white items-center flex justify-center" />
        </div>
      </form>
    </div>
  )
}

export default NumPad