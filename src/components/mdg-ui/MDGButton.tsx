import Link from "next/link"

type Props = {
  size: 'small' | 'medium' | 'large',
  color: 'primary' | 'secondary' | 'tertiary',
  link: string,
  text: string,
}

const MDGButton = ({ size, color, link, text }: Props) => {
  const sizeStyle = size === 'small' ? 'h-24' : size === 'medium' ? 'h-24' : 'h-36'
  const colorStyle = color === 'primary' ? 'bg-green-200' : color === 'secondary' ? 'bg-orange-200' : 'bg-blue-300'
  const textStyle = size === 'small' ? 'text-2xl' : size === 'medium' ? 'text-3xl' : 'text-4xl'
  const lineColor = color === 'primary' ? 'bg-green-400' : color === 'secondary' ? 'bg-orange-400' : 'bg-blue-700'
  const lineHeight = size === 'small' ? 'h-4' : size === 'medium' ? 'h-6' : 'h-8'

  return (
    <Link href={link}>
      <div className={`${sizeStyle} ${colorStyle} ${textStyle} p-8 tracking-tight font-semibold`}>{text}</div>
      <div className={`${lineColor} ${lineHeight}`}></div>
    </Link>
  )
}

export default MDGButton