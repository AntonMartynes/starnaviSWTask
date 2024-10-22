import { useNavigate } from "react-router-dom";

const useGoToChar = () => {
  const navigate = useNavigate();

  const goToChar = (id: number) => {
    return navigate(`/char/${id}`);
  };

  return goToChar;
};

export default useGoToChar;
