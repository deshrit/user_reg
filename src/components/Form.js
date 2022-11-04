import {country, provience, district} from '../data'
import propTypes from 'prop-types'


export const Form = ({status, formValues, handleChange, handleSubmit}) => {

	return (
		<>
			<div className="container col-sm-6 border border-dark rounded p-3 mt-3">
				<form method="get" action="tf_form.html" onSubmit={handleSubmit}>
		
					<div className="form-group h2 text-center mt-2">User Registration</div>			
					
					<div className="row">
						<div className="form-group mt-1 col">
							<label htmlFor="name" className="control-label">Name:</label>
							<input type="text" name="name" id="name" className="form-control" placeholder="Enter name" required value={formValues.name} onChange={handleChange}/>
						</div>
						<div className="form-group mt-1 col">
							<label htmlFor="email">Email:</label>
							<input type="email" name="email" id="email" className="form-control" placeholder="Enter email" required value={formValues.email} onChange={handleChange}/>
						</div>
					</div>

					<div className="row">
						<div className="form-group mt-1 col">
							<label htmlFor="phone">Phone Number:</label>
							<input type="tel" name="phone" id="phone" className="form-control"  placeholder="012-345-6789" pattern="[0-9]{10}" required value={formValues.phone} onChange={handleChange}/>
						</div>
						<div className="form-group mt-1 col">
							<label htmlFor="dob">Date of birth:</label>
							<input type="date" name="dob" id="dob" className="form-control" value={formValues.dob} onChange={handleChange}/>
						</div>
					</div>

					<div id="address" className="form-group mt-1">
						<div className="row">	
							<div className="from-control col">
								<label htmlFor="country">Country:</label>
								<select name="country" id="country" className="form-select" value={formValues.country} onChange={handleChange}>
										{
											country.map((value, idx) => {
												return <option key={idx}>{value}</option>
											})
										}
								</select>
							</div>
							<div className="form-group col">
								<label htmlFor="provience">Provience</label>
								<select name="provience" id="provience" className="form-select" value={formValues.provience} onChange={handleChange}>
										{
											provience.map((value, idx) => {
												return <option key={idx}>{value}</option>
											})
										}
								</select>
							</div>
							<div className="form-group col">
								<label htmlFor="district">District</label>
								<select name="district" id="district" className="form-select" value={formValues.district} onChange={handleChange}>
										{
											district.map((value, idx) => {
												return <option key={idx}>{value}</option>
											})
										}
								</select>
							</div>
							<div className="from-group col">
								<label htmlFor="city">City</label>
								<input type="text" name="city" id="city" className="form-control" placeholder="Enter city..." value={formValues.city} onChange={handleChange}/>
							</div>
						</div>
					</div>

					<div className="form-group mt-3">
						<button type="submit" className="btn btn-primary col-12">Submit</button>
					</div>
				</form>
			</div>		
		</>
	);

};


Form.defaultProps = {
	status: false,
}

Form.propTypes = {
	formValues: propTypes.object,
	handleChange: propTypes.func,
	handleSubmit: propTypes.func

}