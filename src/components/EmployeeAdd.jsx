import { useState } from "react";

const EmployeeAdd = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg border">
      <h2 className="text-2xl font-bold mb-4 text-center dark:bg-gray-800 dark:text-white">Add Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            phone
          </label>
          <input
            type="phone"
            name="phone"
            id="phone"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="Department" className="block text-sm font-medium text-gray-700">
              Department
            </label>
            <input
              type="text"
              name="Department"
              id="Department"
              value={formData.Department}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          <div>
            <label htmlFor="Designation" className="block text-sm font-medium text-gray-700">
            Designation
            </label>
            <input
              type="text"
              name="Designation"
              id="Designation"
              value={formData.Designation}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="Salary" className="block text-sm font-medium text-gray-700">
          Salary
          </label>
          <input
            type="tel"
            name="Salary"
            id="Salary"
            value={formData.Salary}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="Date" className="block text-sm font-medium text-gray-700">
          Date
          </label>
          <input
            type="text"
            name="Date"
            id="Date"
            value={formData.Date}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmployeeAdd;
