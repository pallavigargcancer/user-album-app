"use client";
import React, { useEffect, useState } from "react";
import Breadcrumb from "@/common/components/breadcrumb";
import NoDataFound from "@/common/components/nodatafound";
import UserCard from "@/common/components/usercard";
import Loader from "@/common/components/loader";
import { getUsers  } from "@/common/services/api";
import { UserType } from "@/common/services/api.type";

const User = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      if (!data.error) {
        setUsers(data.result);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  const breadcrumb = [{ label: "Home", link: "/" }];

  return (
    <div className="flex flex-col items-start gap-2 p-2">
      <Breadcrumb items={breadcrumb} />
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
        Users
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex justify-center items-center w-full">
          {users.length > 0 ? (
            <div className="grid w-full h-full gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center">
              {users.map((user) => (
                <UserCard key={user.id} name={user.name} userId={user.id} />
              ))}
            </div>
          ) : (
            <NoDataFound />
          )}
        </div>
      )}
    </div>
  );
};

export default User;
