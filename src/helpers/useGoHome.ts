import { useNavigate } from "react-router-dom";

const useGoHome = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate(`/`);
  };

  return goHome;
};

export default useGoHome;
