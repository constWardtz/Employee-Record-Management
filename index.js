const formData = document.querySelector(`#form-data`);
const employeeData = document.querySelector(`#list-employee`);

class Employee {
	constructor(firstName, lastName, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.salary = salary;
	}
}
class Display {
	add(employee) {
		return `<b>Employee Name:</b> <span style='color:green;'>${employee.firstName} ${employee.lastName}</span> <br />
				<b>Employee Salary:</b> <span style='color:green;'>${employee.salary} </span> <br />
				<button id='reset-data-two' style="border:none; width:100%; background:red; color:aliceblue; cursor:pointer;  padding:8px; margin-top:10px;">Clear Dummy Data</button> <br />

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

formData.addEventListener(`submit`, (e) => {
	e.preventDefault();
	const fName = document.querySelector(`#fName`).value;
	const lName = document.querySelector(`#lName`).value;
	const salary = document.querySelector(`#salary`).value;

	const employee = new Employee(fName, lName, salary);
	const display = new Display(employee);

	// Validation and output
	if (!display.validate(employee)) {
		display.show('error', null, "Can't Add Employee!");
		display.clear();
	} else {
		display.show('success', 'Employee Added Successfully!', null);
		display.clear();

		employeeData.innerHTML += `${display.add(employee)}<hr /> <br /> `;
		console.log(employee);
	}
});

// Sample Employee
const dummEmployee = [
	{
		name: 'Juan Delacruz',
		salary: '12,000'
	}
];
const [ { name, salary } ] = dummEmployee;
const dummyEmployee = () => {
	return `<b>Employee Name:</b> <span style='color:green;'>${name}</span> <br />
            <b>Employee Salary:</b> <span style='color:green;'>${salary} </span>
				`;
};

const clearBtn = () => {
	const resetBtn = `
	<button id='reset-data' style="border:none; width:100%; background:red; color:aliceblue; cursor:pointer;  padding:8px; margin-top:10px;">Clear Dummy Data</button> <br />
`;
	employeeData.innerHTML += `${dummyEmployee()} ${resetBtn}`;
	const resetData = document.querySelector(`#reset-data`);

	resetData.addEventListener(`click`, () => {
		employeeData.innerHTML = ``;
	});
};
clearBtn();
