export const getBlocks = () => {
    return (dispatch) => {
      fetch(`http://localhost:4000/blocks`)
        .then((res) => res.json())
        .then((blocks) =>
          dispatch({ type: "FETCH_BLOCKS", payload: blocks })
        );
    };
  };

export const createBlock = (data) => {
    const block = {block: data}
    return (dispatch) => {
        fetch(`http://localhost:4000/blocks`, {
                method: "POST", 
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(block)
            })
            .then((res) => res.json())
            .then((block) =>
                dispatch({ type: "CREATE_BLOCK", payload: block })
            )
    }
}