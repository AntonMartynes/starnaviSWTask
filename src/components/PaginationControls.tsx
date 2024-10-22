import { useMediaQuery, Pagination } from "@mui/material";
import { IPaginationControlsProps } from "./CharListElement/types";

const PaginationControls: React.FC<IPaginationControlsProps> = ({ count, currPage, onPageChange }) => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Pagination
      count={count}
      variant="outlined"
      shape="rounded"
      size={isSmallScreen ? "small" : "large"}
      showFirstButton
      showLastButton
      onChange={onPageChange}
      defaultPage={currPage}
      sx={{
        "& .MuiPaginationItem-root": {
          margin: "0 2px",
          color: "#fff",
        },
        "& .MuiPaginationItem-outlined": {
          borderColor: "#fff",
        },
        "& .Mui-selected": {
          borderColor: "#a626f1",
        },
        padding: 2,
      }}
    />
  );
};

export default PaginationControls;