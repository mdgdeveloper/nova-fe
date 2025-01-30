import Link from 'next/link'
import React from 'react'

type Props = {
  icon: React.ReactNode,
  title: string,
  path: string,
  link: string,
}

const SidebarItem = (props: Props) => {
  const { icon, title, path, link } = props
  // Generate complete styles for the component depending on the active prop
  const styles = path === link ? 'bg-blue-200 text-blue-800' : 'hover:bg-blue-200 hover:text-blue-800'

  return (
    <Link href={link}>
      <li className={`flex items-center p-2 rounded hover:bg-blue-200 cursor-pointer ${styles}`}>
        {icon}
        <span>{title}</span>
      </li>
    </Link>
  )
}

export default SidebarItem