import { useNavigate } from "react";

const Logout = () => {
  const navigate = useNavigate();
  localStorage.removeItem("user");
  navigate("/logout");
  return;
};

export default Logout;
