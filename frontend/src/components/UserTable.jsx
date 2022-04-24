import React, { useEffect } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { getUserAction } from '../action/user-action'
export default function UserTable() {
	const dispatch = useDispatch()
	const {users} = useSelector(state => state.userData)

	const getAllUser = ()=>{
		dispatch(getUserAction())
	}
	useEffect(() => {
	 getAllUser()
	}, [])
  return (
	<div className='container'>
		<div className="row">
		<table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Sr. No</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
    </tr>
  </thead>
  <tbody>
	  {
		  users?.map((item,i) =>
			<tr>
			<th scope="row">{i+1}</th>
			<td>{item?.firstName}</td>
			<td>{item?.lastName}</td>
		  </tr>
			)
	  }
   
  </tbody>
</table>
		</div>
	</div>
  )
}
