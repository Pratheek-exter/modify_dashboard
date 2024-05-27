import { DashboardLayout } from '@/dashboard/Layout'
import React from 'react'

const dashboardlayout = ({children}: {children: React.ReactNode}) => {
  return (
    <DashboardLayout>
        {children}
    </DashboardLayout>
  )
}

export default dashboardlayout