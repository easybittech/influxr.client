import React from 'react'
import PageContainer from '../layout/page-container'

export default function page() {
  return (
    <PageContainer scrollable={true}>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight pb-4 md:pb-8">
            Messages
          </h2>
        </div>
      </div>
    </PageContainer>
  )
}
