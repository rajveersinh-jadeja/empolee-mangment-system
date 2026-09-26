import { useState, useEffect } from 'react';



function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching employees:', error));
  }, []);

  const handleAddEmployee = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const newEmployee = {
      employeeName: formData.get('employeeName'),
      employeeId: formData.get('employeeId'),
      employeePosition: formData.get('employeePosition'),
      employerName: formData.get('employerName'),
      profilePhoto: formData.get('profilePhoto')
    };

    fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newEmployee)
    })
    .then(response => response.json())
    .then(data => {
      setEmployees([...employees, data]);
      event.target.reset();
    })
    .catch(error => console.error('Error adding employee:', error));
  }
  
  return (
      <main className="min-h-screen w-full bg-[#235789] p-4 flex gap-2">
        <section className="h-full w-full max-w-md rounded-xl bg-[#FDFFFC] p-6">

          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#235789]">
              Add Employee
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Enter employee information
            </p>
          </div>

          <form className="space-y-4" action="#" onSubmit={handleAddEmployee}>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employee Name
              </label>

              <input
                  type="text"
                  name="employeeName"
                  placeholder="Employee Name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"/>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employee ID
              </label>

              <input
                  type="text"
                  name="employeeId"
                  placeholder="Employee ID"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employee Position
              </label>

              <input
                  type="text"
                  name="employeePosition"
                  placeholder="Employee Position"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Employer Name
              </label>

              <input
                  type="text"
                  name="employerName"
                  placeholder="Employer Name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Profile Photo
              </label>

              <input
                  type="url"
                  name="profilePhoto"
                  placeholder="Profile Photo URL"
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-[#235789]"
              />
            </div>

            <button
                type="submit" 
                className="w-full rounded-lg bg-[#235789] px-4 py-2 font-medium text-white transition hover:bg-[#1b456d]"
            >
              Add Employee
            </button>

          </form>
        </section>

        <section className="h-full  w-full w-40 rounded-xl bg-[#FDFFFC] p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-[#235789]">
              Employee List
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              List of employees added
            </p>
          </div>
          <ul className="space-y-4 " >
            {employees.map(employee => (
              <li key={employee.id} className="mb-4 flex items-center gap-4 rounded-lg border border-gray-300 p-4">
                <img src={employee.profilePhoto} alt={employee.employeeName} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium text-[#235789]">{employee.employeeName}</p>
                  <p className="text-sm text-gray-500">{employee.employeePosition}</p>
                  <p className="text-sm text-gray-500">Employer: {employee.employerName}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

      </main>
  );
}

export default App;