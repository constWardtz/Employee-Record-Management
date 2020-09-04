const formData = document.querySelector(`#form-data`);
const employeeData = document.querySelector(`#list-employee`);
const dummyEmployeeData = document.querySelector(`#dummy-employee`);
const deleteBtn = document.querySelector(`#delete-btn`);
const listContainer = document.querySelector(`#list-container`);

/* Employee */
class Employee {
	constructor(firstName, lastName, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}
}

/* Display data */
class Display {
	add(employee) {
		return `
		<b>Employee Name:</b> <span style='color:green;'>${employee.firstName} ${employee.lastName}</span> <br />
		<b>Employee Salary:</b> <span style='color:green;'>${employee.salary} </span> <br />
		`;
	}

	clear() {
		const clearFormData = formData;
		clearFormData.reset();
	}

	show(type, success, error) {
		if (type === 'success') {
			alert(success);
		} else if (type === 'error') {
			alert(error);
		}
	}

	validate(employee) {
		if (employee.firstName === '') {
			return false;
		} else if (employee.lastName === '') {
			return false;
		} else if (employee.salary === '') {
			return false;
		} else {
			return true;
		}
	}
}

/* Run the clear button function */
clearEmployee = () => {
	employeeData.innerHTML = ``;
	listContainer.style.display = 'none';
};

/* form */
formData.addEventListener(`submit`, (e) => {
	e.preventDefault();
	const fName = document.querySelector(`#fName`).value;
	const lName = document.querySelector(`#lName`).value;
	const salary = document.querySelector(`#salary`).value;

	const employee = new Employee(fName, lName, salary);
	const display = new Display(employee);

	/*validate and output if true*/
	if (!display.validate(employee)) {
		display.show('error', null, "Can't Add Employee!");
		display.clear();
	} else {
		display.show('success', 'Employee Added Successfully!', null);
		display.clear();

		employeeData.innerHTML += `${display.add(employee)}<hr /> <br /> `;
		console.log(employee);

		/*  Container list */
		listContainer.style.display = 'grid';

		/* Clear Button */
		const deleteAllEmployee = () => {
			deleteBtn.innerHTML = `
				<button onclick="clearEmployee()" style="position:relative;top:-20px;border:none; width:100%; background:red; color:aliceblue; cursor:pointer;  padding:8px; margin-top:10px;">Clear</button> <br />
			`;
		};
		deleteAllEmployee();
	}
});

/*Sample Employee*/
const dummEmployee = [
	{
		name: 'Juan Delacruz',
		salary: '12,000'
	}
];

const [ { name, salary } ] = dummEmployee;

/* Create a dummy data */
const dummyEmployee = () => {
	return `
	<b>Employee Name:</b> <span style='color:green;'>${name}</span> <br />
    <b>Employee Salary:</b> <span style='color:green;'>${salary} </span>
	`;
};

/* Button for dummy data */
const clearBtn = () => {
	const resetBtn = `
	<button onclick="resetData()" style="border:none; width:100%; background:red; color:aliceblue; cursor:pointer;  padding:8px; margin-top:10px; margin-bottom:20px;">Clear Sample Data</button> <br />
	`;
	dummyEmployeeData.innerHTML += `${dummyEmployee()} ${resetBtn}`;
	resetData = () => {
		dummyEmployeeData.innerHTML = ``;
	};
};
clearBtn();
