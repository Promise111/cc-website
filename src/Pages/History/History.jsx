import { useEffect, useState } from "react";
import DataTable from "../../Components/DataTable/DataTable";
import styles from "./History.module.css";
import instance from "../../api";

const History = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await instance.get("/user/transactions");
        let userTransactions = response.data.data;
        console.log("userTransactions", userTransactions);
        setTransactions(userTransactions);
      } catch (error) {
        const errorMsg = error.response.data;
        console.log(errorMsg);
        setError(errorMsg || "Something went wrong");
      }
    };

    fetchData();
  }, []);
  return (
    <div className={styles.history}>
      {/* <h1>History</h1> */}
      <DataTable data={transactions} />
    </div>
  );
};

export default History;
