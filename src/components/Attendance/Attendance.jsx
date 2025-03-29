import { Email } from "@mui/icons-material";
import TableComponent from "../../helper/Tablecomponent";
import { useGetAllEmployeeQuery } from "../../rtk/employeeApi";
import {
  useEmployeeAllDetailMutation,
  useEmployeeCheckInMutation,
  useEmployeeChekOutMutation,
} from "../../rtk/attendance";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Attendance = () => {
  const { data, isLoading } = useGetAllEmployeeQuery();
  const [employeeCheckIn] = useEmployeeCheckInMutation();
  const [employeeChekOut] = useEmployeeChekOutMutation();
  const [attendanceStatus, setAttendanceStatus] = useState({});
 const [employeeDtaa]=useEmployeeAllDetailMutation();
  const navigate=useNavigate();

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone Number", accessor: "phone" },
    { header: "Department", accessor: "department" },
    { header: "Action", accessor: "action", type: "action" },
  ];

  useEffect(() => {
    if (data) {
      const intialStatus = {};
      data.forEach((emp) => {
        intialStatus[emp._id] = emp.isCheckedIn || false;
      });
      setAttendanceStatus(intialStatus);
    }
  }, [data]);

  const check_In = async (id) => {
    try {
      const isconfirm = window.confirm(
        "Are you sure you want to check in now?"
      );
      if (isconfirm) {
        //   console.log("check in__",id);
        const response = await employeeCheckIn(id).unwrap();
        if (response?.success == true) {
          setAttendanceStatus((prev) => ({ ...prev, [id]: true }));
        }
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  const check_out = async (id) => {
    try {
      const isConfirm = window.confirm(
        "Are you sure you want to check out now?"
      );
      if (isConfirm) {
        console.log("p++", id);
        const response = await employeeChekOut(id);
        if (response?.success == true) {
          setAttendanceStatus((prev) => ({ ...prev, [id]: false }));
        }
      }
    } catch (err) {
      console.err(err, message);
    }
  };

  const employeeDetailApi=async(id)=>{
    try{
      navigate('/view/employee', { state: { employeeId: id } }); 
 }catch(err){
   console.log(err.message);
 }
  }

  const tableData = (data ?? []).map((emp) => {
    const isCheckedIn = attendanceStatus[emp._id] ?? emp.isCheckedIn;
    return {
      name: emp.name || "N/A",
      email: emp.email || "N/A",
      phone: emp.phone || "N/A",
      department: emp.department || "N/A",
      action: (
        <div className="flex gap-3">
          {!isCheckedIn ? (
            <button
              onClick={() => {
                check_In(emp._id);
              }}
              className="bg-blue-500 text-white px-2 py-2 rounded-lg shadow-md  hover:bg-blue-800 "
            >
              check IN
            </button>
          ) : (
            <button
              onClick={() => {
                check_out(emp._id);
              }}
              className="bg-red-500 text-white px-2 py-2 rounded-lg hover:bg-red-800"
            >
              Check Out
            </button>
          )}
          <button
            onClick={() => {
              employeeDetailApi(emp._id);
            }}
            className="bg-[#4169E1] hover:bg-[#1E90FF] px-2 py-2 rounded-lg text-white transition duration-300"
          >
            <FaEye size={18} />
          </button>
        </div>
      ),
    };
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TableComponent columns={columns} data={tableData} itemsPerPage={10} />
      )}
    </div>
  );
};

export default Attendance;
