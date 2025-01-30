import { EmployeeType } from '@/types/main'
import React from 'react'

type Props = {
  employee: EmployeeType | null
}

const HeaderTransaction = ({ employee }: Props) => {

  const generateAvatar = () => {
    if (employee) {
      const initials = (employee.first_name[0] + employee.last_name[0]).toUpperCase()
      return initials
    }
  }

  return (
    <>
      {(employee) &&
        <div className="flex justify-between items-center p-4 bg-gray-400 text-white h-20">
          <div></div>
          <div></div>
          <div className="flex gap-2 items-center">
            <div>
              Bienvenida {employee.first_name} {employee.last_name}
            </div>
            <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center">{generateAvatar()}</div>

          </div>
        </div>
      }
    </>
  )
}

export default HeaderTransaction