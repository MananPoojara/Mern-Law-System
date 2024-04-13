import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "../components/AdminNav";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:5000/users/${userId}`);
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="max-w-5xl mt-10 mx-auto">
        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                {loading ? (
                  <p>Loading...</p>
                ) : users.length === 0 ? (
                  <p>No users are there.</p>
                ) : (
                  <table className="min-w-full divide-y divide-orange-200 table-fixed dark:divide-orange-500">
                    <thead className="bg-orange-100 dark:bg-orange-500">
                      <tr>
                        <th
                          scope="col"
                          className="py-4 px-3 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white"
                        >
                          User Name
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white"
                        >
                          Password
                        </th>
                        <th
                          scope="col"
                          className="py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase dark:text-white"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-orange-200 dark:bg-orange-800 dark:divide-orange-500">
                      {users.map((user) => (
                        <tr
                          key={user._id}
                          className="hover:bg-orange-100 dark:hover:bg-orange-500"
                        >
                          <td className="py-4 px-6 text-sm font-medium text-orange-900 whitespace-nowrap dark:text-white">
                            {user.name}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-orange-500 whitespace-nowrap dark:text-white">
                            {user.email}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-orange-900 whitespace-nowrap dark:text-green-500">
                            {user.password}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-orange-900 whitespace-nowrap dark:text-green-500">
                            <button
                              onClick={() => handleDelete(user._id)}
                              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
