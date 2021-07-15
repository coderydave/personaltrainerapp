import React, { useEffect, useState, Fragment, useCallback } from "react";
import ClientsList from "./ClientsList";
import axios, { AxiosResponse } from "axios";
import "./style.css";

export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  type?: string;
  image: string;
}

const Clients: React.FC = (props) => {
  /*   const [users, setUserList] = useState<User[]>([]); */ //origi;
  const [users, setUserList]: [Client[], (users: Client[]) => void] =
    React.useState<Client[]>([]);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState("");

  const fetchClients = useCallback(async () => {
    try {
      setLoading(true);
      await axios
        .get<Client[]>("https://jsonplaceholder.typicode.com/users", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response: AxiosResponse) => {
          console.log(response.data);
          setUserList(response.data);
          setLoading(false);
        });
    } catch (e) {
      console.error(e);
      setError(e);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchClients();
  }, [fetchClients]);

  return (
    <Fragment>
      {loading ? <div className="loader"></div> : <ClientsList items={users} />}
    </Fragment>
  );
};
export default Clients;
