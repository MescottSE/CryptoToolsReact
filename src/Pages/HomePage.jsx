import React from 'react'
import CryptoList from '../components/CryptoList'

const HomePage = ({cryptoListData}) => {
  return (
    <>
      <CryptoList cryptoData={cryptoListData} />
    </>
  )
}

export default HomePage
