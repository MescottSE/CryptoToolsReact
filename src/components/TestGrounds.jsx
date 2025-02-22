import React from 'react'

const TestGrounds = () => {
    const testList = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <h1>Test Grounds</h1>
      <ul className="test-ul">
        {testList.map((element, index) => (
            <li>{index}</li>
        ))}
      </ul>
    </>
  )
}

export default TestGrounds
