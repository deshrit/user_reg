import {useState} from "react"
import {Form} from "./components/Form"
import {Table} from "./components/Table"

function App() {

	// Form
	const intialValues = {
		name: "",
		email: "",
		phone: "",
		dob: "",
		country: "Nepal",
		provience: "",
		district: "",
		city: ""
	};

	const [formValues, setFormValues] = useState(intialValues);
	const [status, setStatus] = useState(false);

	const  handleChange = (e) => {
		const {name, value} = e.target;
		setFormValues({...formValues, [name]:value})
	}

	function handleSubmit(e) {
		e.preventDefault();
		setStatus(true);
		let data = [...rows, formValues];
		setRows(data);
		users++;
	}

	// Rows 
	let users = 0;
	const [rows, setRows] = useState([]);


  return (
    <>
      <Form status={status} formValues={formValues} handleChange={handleChange} handleSubmit={handleSubmit}/>
	  {status ? <Table status={status} rows={rows} /> : null}
	  {/* {users === 1 ? <Table status={status} formValues={formValues} /> : null } */}
      
    </>
  );
}

export default App;
