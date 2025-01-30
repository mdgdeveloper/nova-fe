"use client";
import React from 'react';
import { FaHome, FaUser, FaChartBar, FaCogs, FaSignOutAlt, FaUsers, FaToolbox, FaCreditCard } from 'react-icons/fa';
import SidebarItem from './SidebarItem';
import { usePathname } from 'next/navigation';

const Sidebar = () => {

  const path = usePathname()

  console.log(path)

  return (
    <aside className="bg-darkBlue text-white w-96 h-screen relative ">
      <div className="">
          <div className="flex items-center justify-center mb-20 mt-20">
            <div className="bg-white p-2 rounded">
              <img src="/logo.svg" alt="Logo" className="w-8 h-8" />
            </div>
          </div>
        </div>
        <div className="p-6">
        <nav className="mt-5">
          <ul className="flex flex-col space-y-4 text-xl">
            <SidebarItem icon={<FaHome className="mr-2" />} title="Nueva Venta" path={path} link="/transactions/new" />
            <SidebarItem icon={<FaUser className="mr-2" />} title="Clientes" path={path} link="/clients" />
            <SidebarItem icon={<FaCreditCard className="mr-2" />} title="Historial de pagos" path={path} link="/payments" />
            <SidebarItem icon={<FaChartBar className="mr-2" />} title="Analíticas" path={path} link="/analytics" />
            <SidebarItem icon={<FaUsers className="mr-2" />} title="Empleados" path={path} link="/employees" />
            <SidebarItem icon={<FaCogs className="mr-2" />} title="Settings" path={path} link="/settings" />
            <SidebarItem icon={<FaToolbox className="mr-2" />} title="Herramientas" path={path} link="/tools" />
          </ul>
        </nav>
      </div>
        <div className="absolute bottom-4 w-full px-4 text-2xl flex justify-center">
          <button className="flex items-center justify-center p-2 w-56 bg-gray-600 rounded hover:bg-blue-600">
            <FaSignOutAlt className="mr-2" />
            <span>Salir</span>
          </button>
        </div>
    </aside>
  );
};

export default Sidebar;
