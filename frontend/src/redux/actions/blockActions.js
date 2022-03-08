export const getBlocks = () => {
    return (dispatch) => {
      fetch(`http://localhost:4000/blocks`)
        .then((res) => res.json())
        .then((blocks) =>
          dispatch({ type: "FETCH_BLOCKS", payload: blocks })
        );
    };
  };