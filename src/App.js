import React, { useMemo, useState, useEffect } from 'react'
import axios from 'axios'

import Table from './Table'
import './App.css'

function App() {
	const columns = useMemo(() => [
		{
			Header: 'ICCID',
			accessor: 'iccid',
		},
		{
			Header: 'IMSI',
			accessor: 'imsi',
		},
		{
			Header: 'Batch ID',
			accessor: 'batchId'
		},
		{
			Header: 'Status',
			accessor: 'isActive',
			Cell: ({ cell: { value } }) => {
        if (value) {
          return (
            <>
              Active
            </>
          );
        } else {
          return (
            <>
              Inactive
            </>
          );
        }
      }
		},
		{
			Header: 'Action',
			Cell: () => {
				return (
					<>
						<button>Update</button>
					</>
				)
			},
		},
	])

	const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState([])

	useEffect(() => {
		;(async () => {
      // const result = await axios(
			// 	'https://simulator-api.onrender.com/v1/sims?pageNumber=1&pageSize=10&filter[search]=8914804312405837283517'
			// )
      const result = await axios(
				`https://simulator-api.onrender.com/v1/sims?pageNumber=${pageNum}`
			)
			setData(result.data.data)
		})()
	}, [data, pageNum])

  const handlePageNumberChange = (e) => {
    const value = e.target.value || 1
    setPageNum(value)
  }

	return (
		<div className='App'>
			<Table columns={columns} data={data} />
			<div class='pageNumber'>
				<label for='pageNumber'>Page Number: </label>
				<input id='pageNumber' placeholder='1' onChange={handlePageNumberChange}/>
			</div>
		</div>
	)
}

export default App
