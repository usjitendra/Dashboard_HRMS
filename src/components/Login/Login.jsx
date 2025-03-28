import { padStart } from "@fullcalendar/core/internal";
import { useEffect, useState } from "react";
import { useIsLoginQuery, useLoginApiMutation } from "../../rtk/login";
import { useNavigate } from "react-router-dom";
import { useEmployeeLoginMutation } from "../../rtk/employeeApi";
const Login = () => {
  const [email, setEmail] = useState("codecrafter@gmail.com");
  const [password, setPassword] = useState("Cc@12345c");
  const [role, setRole] = useState("employee");
  const { data, isLoading, error } = useIsLoginQuery();
  const [loginApi] = useLoginApiMutation();
  const [employeeLogin]=useEmployeeLoginMutation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
      role:role,
    };
    if (role == "admin") {
      const response = await loginApi(data).unwrap();
      console.log("response+++", response);
      if (response?.success==true) {
        navigate("/");
      }
    }
    if (role == "employee") {
      // console.log(data);
      const response=await employeeLogin(data).unwrap();
      console.log("role++", response);
      if(response?.success==true){
          navigate('/')
          console.log("attendency+++page");
      }
    }
  };

    
  console.log("111111",data);

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <section className="bg-blue-500 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img
            className="w-60 h-60r-2 object-contain"
            src="https://drmanasaggarwal.com/assets/cclogo-l-lAMUu5.png"
            alt="logo"
          />
          {/* Code Crafter Web Solution */}
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            {/* <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1> */}
            <form className="space-y-4 md:space-y-4" onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <div className="mx-auto flex-item-center justify-center">
                <button class="bg-blue-800 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded ">
                  Login
                </button>
              </div>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
