import React from 'react'
import Sidebar from './Sidebar'


const Layout = ({children}) => {
  return (
    <div class="flex gap-5" >
        <Sidebar />
        <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
        
    </div>
  )
}

export default Layout