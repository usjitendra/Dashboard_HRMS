import { toast } from "sonner";  
import axios from "axios";


export const axiosInstance = axios.create({

    baseURL: "http://localhost:6002/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});


const axiosBaseQuery = async ({ url, method, data }) => {
    try {
        console.log("Request Data:", data); // ✅ Debugging

        const response = await axiosInstance({
            url,
            method,
            ...(data instanceof FormData 
                ? { data, headers: { "Content-Type": "multipart/form-data" } }  // ✅ Handles FormData properly
                : { data }
            ),
        });

      
        if (response?.data?.message) {
            toast.success(response.data.message);
        }

   
        return { data: method === "GET" ? response?.data?.data : response?.data };
        
    } catch (error) {
        console.error("Request Error:", error);
        
        const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
        toast.error(errorMessage); 

        return {
            error: {
                status: error.response?.status || 500, 
                message: errorMessage,
            },
        };
    }
};

export default axiosBaseQuery;
