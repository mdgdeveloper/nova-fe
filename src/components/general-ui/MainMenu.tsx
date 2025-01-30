import { IoExitOutline } from "react-icons/io5";

const MainMenu = () => {
  return (
    <div className="flex gap-8 text-3xl items-center">
      <div className="flex gap-2 items-center">
        <IoExitOutline />
        <div>Salir</div>
      </div>
    </div>
  )
}

export default MainMenu