import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import TableComponent from "../../helper/Tablecomponent";
import { useNavigate } from "react-router-dom";
import { useGetAllEmployeeQuery,useDeleteEmployeeMutation } from "../../rtk/employeeApi";

const useTable = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetAllEmployeeQuery(); 
    const [deleteEmployee]=useDeleteEmployeeMutation();
    // console.log("Fetched Employee Data:", data); // Debugging
      
    const handleDelete=async(id)=>{
          const isConfirmed=window.confirm("Are you sure you want to delete this employee?")
          console.log("delete ID++",id);
          if(isConfirmed){
                const result=await deleteEmployee(id);
                // console.log(result);
          }else{
            console.log("Delete cancelled");
          }
    }
    
    const handleEdit=(data)=>{
        navigate('/employee',{state:{editEmployee:data}})
        //  console.log(data);
    }

    const columns = [
        { header: "Name", accessor: "name" },
        { header: "Email", accessor: "email" },
        { header: "Phone Number", accessor: "phone" },
        { header: "Department", accessor: "department" }, 
        {header: "Salary",accessor:"salary"},
        // {header:"Joining Date",accessor:"joiningDate"},
        { header: "Action", accessor: "action", type: "action" }
    ];

    const tableData = (data ?? []).map((emp) => ({
        name: emp.name || "N/A",
        email: emp.email || "N/A",
        phone: emp.phone || "N/A",
        department: emp.department || "N/A",
        salary:emp.salary||"N/A",
        joiningDate:emp.joiningDate || "N/A",
        action: (
            <div className="flex gap-3">
                <button onClick={() => handleEdit(emp)} className="text-blue-600 hover:text-blue-800">
                    <FaEdit size={18} />
                </button>
                <button onClick={() => handleDelete(emp._id)} className="text-red-600 hover:text-red-800">
                    <FaTrash size={18} />
                </button>
                <button onClick={() => navigate("/dashboard/employee/detail", { state: emp })} className="text-green-600 hover:text-red-800">
                    <FaEye size={18} />
                </button>
            </div>
        ),
    }));

    return (
        <div>
            {isLoading ? <p>Loading...</p> : <TableComponent title="Employee List" columns={columns} data={tableData} itemsPerPage={10} />}
        </div>
    );
};

export default useTable;
