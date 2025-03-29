import { useLocation } from "react-router-dom";
import { useEmployeeAllDetailMutation } from "../../rtk/attendance";
import { useEffect, useState } from "react";
// import jsPDF from "jspdf"; // ✅ Import jsPDF
// import "jspdf-autotable"
const EmployeeView = () => {
  const location = useLocation();
  const { employeeId } = location.state || {}; // ✅ Getting Employee ID
  const [employee, setEmployee] = useState(null);
  const [attendance, setAttendance] = useState();
  const [fetchEmployeeDetail] = useEmployeeAllDetailMutation(); // ✅ Correctly using Mutation

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        if (!employeeId) return; // ✅ Prevent API call if no ID
        const response = await fetchEmployeeDetail(employeeId).unwrap(); // ✅ Call Mutation
        setEmployee(response.result.employeeId);
        setAttendance(response.result);
        console.log("Fetched Employee Data:", response.result);
      } catch (err) {
        console.error("Error Fetching Employee Data:", err.message);
      }
    };
    fetchEmployee();
  }, [employeeId, fetchEmployeeDetail]);
    
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Employee Details", 20, 10);

    // ✅ Create Table Data
    doc.autoTable({
      startY: 20,
      head: [["Field", "Value"]],
      body: [
        ["Name", employee?.name || "N/A"],
        ["Email", employee?.email || "N/A"],
        ["Phone", employee?.phone || "N/A"],
        ["Department", employee?.department || "N/A"],
        ["Today CheckIn", attendance?.loginTime || "N/A"],
        ["Today CheckOut", attendance?.logoutTime || "N/A"],
        ["Status", attendance?.status || "N/A"],
      ],
    });

    doc.save("Employee_Details.pdf"); // ✅ Save PDF
  };
  return (
    <div className="max-w-3xl mx-auto p-10 bg-white shadow-lg rounded-lg text-black mt-10">
      <h2 className="text-3xl font-bold mb-4 text-center">Employee Details</h2>
      {employee ? (
        <>
        <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg overflow-hidden mb-5">
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-3 font-bold">Name</td>
              <td className="border border-gray-300 p-3">
                {employee.name || "N/A"}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-bold">Email</td>
              <td className="border border-gray-300 p-3">
                {employee.email || "N/A"}
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 p-3 font-bold">Phone</td>
              <td className="border border-gray-300 p-3">
                {employee.phone || "N/A"}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-bold">
                Department
              </td>
              <td className="border border-gray-300 p-3">
                {employee.department || "N/A"}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-bold">
                Today CheckIn
              </td>
              <td className="border border-gray-300 p-3 ">
                {attendance.loginTime || "N/A"}
              </td>
            </tr>
            <tr className="text-aline">
              <td className="border border-gray-300 p-3 font-bold">
                Today CheckOut
              </td>
              <td className="border-gray-300 p-3 ">
                {attendance.logoutTime || "N/A"}
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-3 font-bold">status</td>
              <td className="border-gray-300 p-3">
                {attendance.status || "N/A"}
              </td>
            </tr>
          </tbody>
        </table>
         {/* <div className="flex justify-center mt-4">
            <button onClick={exportToPDF} className="px-2 py-3 bg-blue-500 hover:bg-blue-800 rounded-2xl">
              Download PDF
            </button>
         </div> */}
        </>
      ) : (
        <p className="text-center text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default EmployeeView;
