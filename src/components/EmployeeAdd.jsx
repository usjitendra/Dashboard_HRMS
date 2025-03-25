import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Header from "./Header";
import { useAddEmployeeMutation } from "../rtk/employeeApi";
/* eslint-disable react/prop-types */
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone is required"),
  department: yup.string().required("Department is required"),
  designation: yup.string().required("Designation is required"),
  salary: yup
    .number()
    .positive("Salary must be a positive number")
    .required("Salary is required"),
  date: yup.date().required("Date is required"),
});


const EmployeeAdd = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [addEmployee, { isLoading, isError }] = useAddEmployeeMutation();
  const theme = useTheme();

    const colors = tokens(theme.palette.mode);
  
  const onSubmit = async (data) => {
    try {
      // console.log("Form Data Submitted:", data);
      const response = await addEmployee(data).unwrap();
      console.log("reeeee++", response);
      reset();
    } catch (error) {
      console.error("Error adding employee", error);
    }
  };

  return (
    <div className="max-w-135 mx-auto mt-1 p-4 bg-white shadow-lg rounded-lg border-1 py-8 ">
      <h2 className="text-2xl font-bold mb-4 text-center" style={{color:colors.p1[500]}} >
        Add Employee
      </h2>
      <Header title="DASHBOARD" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-black-300"  style={{color:colors.p1[500]}}>
            Email
          </label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            style={{color:colors.p1[500]}}
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div className="flex gap-10">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700"  style={{color:colors.p1[500]}}>
              Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 "  style={{color:colors.p1[500]}} 
            />
            <p className="text-red-500">{errors.name?.message}</p>
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700"  style={{color:colors.p1[500]}}>
              Phone
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              style={{color:colors.p1[500]}}
            />
            <p className="text-red-500">{errors.phone?.message}</p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700"  style={{color:colors.p1[500]}}>
              Department
            </label>
            <input
              type="text"
              {...register("department")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              style={{color:colors.p1[500]}}
            />
            <p className="text-red-500">{errors.department?.message}</p>
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700"  style={{color:colors.p1[500]}}>
              Designation
            </label>
            <input
              type="text"
              {...register("designation")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              style={{color:colors.p1[500]}}
            />
            <p className="text-red-500">{errors.designation?.message}</p>
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700"  style={{color:colors.p1[500]}}>
              Salary
            </label>
            <input
              type="number"
              {...register("salary")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              style={{color:colors.p1[500]}}
            />
            <p className="text-red-500">{errors.salary?.message}</p>
          </div>

          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700"  style={{color:colors.p1[500]}}>
              Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"  style={{color:colors.p1[500]}}
            />
            <p className="text-red-500">{errors.date?.message}</p>
          </div>
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
