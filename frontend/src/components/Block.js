import React from "react"
import blockReducer from "../redux/reducers/blockReducer"

export default function Block({block}) {
    return (
        <div>
            {block.name}
        </div>
    )
}