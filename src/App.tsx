import React from 'react'
import './App.scss'
import Layout from './common/layout/layout'
import MainContent from './components/mainContent/main-content'
import { UserContextProvider } from './common/context/context'

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Layout>
          <MainContent />
        </Layout>
      </UserContextProvider>
    </div>
  )
}

export default App
