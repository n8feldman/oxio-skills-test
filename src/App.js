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
			accessor: 'batchId',
		},
		{
			Header: 'Status',
			accessor: 'isActive',
			Cell: ({ cell: { value } }) => {
				if (value) {
					return <div>Active</div>
				} else {
					return <div>Inactive</div>
				}
			},
		},
		{
			Header: 'Action',
			Cell: () => {
				return (
					<>
						<button onClick={alertUser}>Update</button>
					</>
				)
			},
		},
	])

	const [data, setData] = useState([])
  const [pageNum, setPageNum] = useState([])

	useEffect(() => {
		;(async () => {
      const result = await axios(
				`https://simulator-api.onrender.com/v1/sims?pageNumber=${pageNum}`
			)
			setData(result.data.data)
		})()
	}, [pageNum])

  const handlePageNumberChange = (e) => {
    const value = e.target.value || 1
    setPageNum(value)
  }
	
	const alertUser = (e) => {
		alert('To be implemented: functionality to turn SIM cards on or off');
	}

	return (
		<div className='App'>
			<Table columns={columns} data={data} />
			<div className='pageNumber'>
				<label htmlFor='pageNumber'>Page Number: </label>
				<input id='pageNumber' placeholder='1' onChange={handlePageNumberChange}/>
			</div>
		</div>
	)
}

export default App
