import { Category } from '@/types/category'
import React, { useState } from 'react'
import ItemsList from './ItemsList'
import { Service } from '@/types/service'
import { getCategoryList, getServicesList } from '@/app/actions/pos'

const MainPos = () => {
  const [categoryList, setCategoryList] = useState<Category[]>([])
  const [services, setServices] = useState<Service[]>([])
  const [loadingCats, setLoadingCats] = useState<boolean>(false)
  const [loadingServices, setLoadingServices] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)


  const handleClickNewService = async () => {
    try {
      setLoadingCats(true)
      const categories = await getCategoryList()
      setCategoryList(categories)
    } catch (err) {
      setError('Failed to load categories')
      console.error(err)
    } finally {
      setLoadingCats(false)
    }
  }

  const handleClickNewProduct = () => {
    console.log("New Product")
  }

  const handleClickService = async () => {
    try {
      setLoadingServices(true)
      const services = await getServicesList()
      setServices(services)
    } catch (err) {
      setError('Failed to load services')
      console.error(err)
    } finally {
      setLoadingServices(false)
    }
  }

  return (
    <div className="px-4 py-5 w-2/3">
      <div className="bg-white p-5 rounded-md shadow-sm border border-gray-200 mb-4">
        <h2 className="text-xl">Terminal Punto de Venta</h2>
      </div>
      {error && <div className="text-red-500">{error}</div>}
      {/* Botones de nuevo servicio y producto */}
      <div className="">
        <div className="flex gap-3">
          <div className="bg-teal-50 tracking-tight  p-10 text-2xl rounded-xl shadow-sm border border-gray-200 cursor-pointer hover:bg-teal-100" onClick={handleClickNewService}>Nuevo Servicio</div>
          <div className="cursor-pointer bg-orange-50 hover:bg-orange-100 tracking-tight p-10 text-2xl rounded-xl shadow-sm border border-gray-200" onClick={handleClickNewProduct}>Nuevo Producto</div>
        </div>
      </div>
      {/* Lista de Categorias */}
      <div className="mt-5 flex gap-5">
        {loadingCats ? (<div>Cargando categorias...</div>) : (
          categoryList &&
          <div className="flex flex-col gap-3">
            {categoryList.map((category) => (
              <div key={category.category_id} className="" onClick={handleClickService}>
                <div className="text-xl rounded border shadow-sm border-gray-200 p-5 w-72 cursor-pointer hover:bg-blue-200">{category.name}</div>
              </div>
            ))}
          </div>

        )}
        {loadingServices ? (<div>Cargando servicios...</div>) : (services && <ItemsList items={services} />)}
      </div>
    </div>
  )
}

export default MainPos