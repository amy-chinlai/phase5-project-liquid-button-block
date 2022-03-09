import React from "react"

export default function Block({block}) {
    return (
        <div>
            <p>
                <strong>{block.name}</strong>: &#123;&#123; {block.donation_type} | default: {block.default} | multiplier: {block.multiplier} &#125;&#125;
            </p>
          
        </div>
    )
}