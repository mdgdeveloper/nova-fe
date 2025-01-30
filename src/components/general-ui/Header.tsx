import React, { JSX } from 'react'
import MenuBurger from './MenuBurger'
import Link from 'next/link'

type Props = {
  RigthMenu?: () => JSX.Element,
}

const Header = ({ RigthMenu }: Props) => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-500 h-24 text-3xl text-white">
      <div className="flex gap-3 items-center w-1/3">
        <MenuBurger />
        <div>Menu</div>
      </div>
      <Link className="w-1/3 flex justify-center" href="/">Marleny Logo</Link>
      <div className="w-1/3 flex justify-end">{RigthMenu && <RigthMenu />}</div>
    </div >
  )
}

export default Header