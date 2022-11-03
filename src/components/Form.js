export const Form = () => {

	return (
		<>
			<div class="container col-sm-6 border border-dark rounded p-3 mt-3">
				<form method="get" action="tf_form.html" onsubmit="return submit_form()">
		
					<div class="form-group h2 text-center mt-2">User Registration</div>			
					
					<div class="row">
						<div class="form-group mt-1 col">
							<label for="name" class="control-label">Name:</label>
							<input type="text" name="name" id="name" class="form-control" placeholder="Enter name" required />
						</div>
						<div class="form-group mt-1 col">
							<label for="email">Email:</label>
							<input type="email" name="email" id="email" class="form-control" placeholder="Enter email" required />
						</div>
					</div>

					<div class="row">
						<div class="form-group mt-1 col">
							<label for="phone">Phone Number:</label>
							<input type="tel" name="phone" id="phone" class="form-control"  placeholder="012-345-6789" pattern="[0-9]{10}" required />
						</div>
						<div class="form-group mt-1 col">
							<label for="dob">Date of birth:</label>
							<input type="date" name="dob" id="dob" class="form-control"/>
						</div>
					</div>

					<div id="address" class="form-group mt-1">
						<div class="row">	
							<div class="from-control col">
								<label for="country">Country:</label>
								<select name="country" id="country" class="form-select">
								</select>
							</div>
							<div class="form-group col">
								<label for="provience">Provience</label>
								<select name="provience" id="provience" class="form-select">
									<option value="" selected>select</option>
								</select>
							</div>
							<div class="form-group col">
								<label for="district">District</label>
								<select name="district" id="district" class="form-select">
									<option value="" selected>select</option>
								</select>
							</div>
							<div class="from-group col">
								<label for="city">City</label>
								<input type="text" name="city" id="city" class="form-control" placeholder="Enter city..." />
							</div>
						</div>
					</div>

					<div class="form-group mt-3">
						<button class="btn btn-primary col-12">Submit</button>
					</div>
				</form>
			</div>		
		</>
	);

};