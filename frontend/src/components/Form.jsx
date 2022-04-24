import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {useDispatch} from 'react-redux'
import { userAction } from '../action/user-action'
import UserTable from './UserTable'
export default function Form() {
	const dispatch = useDispatch()
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: ""
		},
		validationSchema: yup.object({
			firstName: yup
				.string()
				.required("Please Enter First Name"),
			lastName: yup
				.string()
				.required("Please Enter Last Name")
		}),
		onSubmit: (values, action) => {
			dispatch(userAction(values))
			action.resetForm()
		}
	})
	return (
		<div className='container'>
			<div className="row mt-5">
				<div className="col-sm-6 offset-sm-3">
					<div className="card">
						<div className="card-header">Create User</div>
						<div className="card-body">
						<form onSubmit={formik.handleSubmit}>
						<div className="input-group">
						<input type="text" onChange={formik.handleChange} name='firstName' value={formik.values.firstName} className={
						`form-control 
                        ${formik.errors.firstName && 'is-invalid'}`}
						placeholder='Enter Your First Name' />
						<span className="invalid-feedback">{formik.errors.firstName}</span>
						</div>
						<br />
						<div className="input-group">
						<input type="text" onChange={formik.handleChange} name='lastName' value={formik.values.lastName}
						className={`form-control 
						${formik.errors.lastName && 'is-invalid'}`}
						placeholder='Enter Your Last Name' />
						<span className="invalid-feedback">{formik.errors.lastName}</span>
						</div>
						<br />
						<button className="btn btn-success w-100">Submit</button>
							</form>
						</div>
					</div>
				</div>
			</div> 
			<br />
			<UserTable/>
		</div>
	)
}
