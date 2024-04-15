import React from 'react'
import Sidebar from '../components/admin/layout/Sidebar';
import Header from '../components/admin/layout/Header';
import PermisosConfig from '../components/admin/layout/Permisos';

const Permiso = () => {
    return (
        <div>
          <div className="min-h-screen grid grid-cols-1 lg:grid-cols-6">
            {/* Sidebar */}
            <Sidebar />
    
            {/* Menu */}
            <button className="grid lg:hidden fixed place-content-center bottom-4 right-4 p-2 bg-cyan-500 z-40 text-white rounded-full text-2xl">
              <i className="bx bx-menu"></i>
            </button>
    
            {/* Content */}
            <div className="col-span-5">
              {/* Header */}
              <Header />
              <PermisosConfig />
            </div>
          </div>
        </div>
      );
    }

export default Permiso