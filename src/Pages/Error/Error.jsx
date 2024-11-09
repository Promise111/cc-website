import { useRouteError } from "react-router-dom";
import styles from "./Error.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div id={styles["error-wrapper"]}>
      <div>
        <h1>{error.status}</h1>
        <p>{error.statusText || error.message}</p>
        {/* <Link to="/">
          <button>Take me back</button>
        </Link> */}
        
          <button onClick={()=> navigate(-1)}>Go back</button>
        
      </div>
    </div>
  );
};
export default ErrorPage;
