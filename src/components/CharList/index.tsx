import { useEffect, useState } from "react";

import { getHeroes } from "../../api/getData";

import Box from "@mui/material/Box";

import CharListElement from "../CharListElement";
import LoadingIndicator from "../LoadingIndicator";
import NoPeopleMessage from "../NoPeopleMessage";
import PaginationControls from "../PaginationControls";
import { ICharState } from "../CharListElement/types";
import { Gradients } from "../../helpers/gradients";

const CharList = () => {
  const [state, setState] = useState<ICharState>({
    people: [],
    loading: true,
    pagesCount: 1,
    currPage: 1,
  });

  const fetchPeople = async (page: number = 1) => {
    try {
      const response = await getHeroes(page);
      const maxPagesCount = Math.ceil(response.data.count / 10);
      setState((prevState) => ({
        ...prevState,
        people: response.data.results,
        loading: false,
        pagesCount: maxPagesCount,
      }));
    } catch (error) {
      console.error("Failed to fetch people:", error);
      setState((prevState) => ({
        ...prevState,
        loading: false,
      }));
    } finally {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    fetchPeople(state.currPage);
  }, [state.currPage]);

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setState((prevState) => ({
      ...prevState,
      currPage: value,
      loading: true,
    }));
  };

  if (state.loading) {
    return <LoadingIndicator />;
  }

  if (state.people.length === 0) {
    return <NoPeopleMessage />;
  }

  return (
    <div
      style={{
        background: Gradients.DarkBackground,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <CharListElement people={state.people} />
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,
        }}
      >
        <PaginationControls
          count={state.pagesCount}
          currPage={state.currPage}
          onPageChange={handlePageChange}
        />
      </Box>
    </div>
  );
};

export default CharList;
