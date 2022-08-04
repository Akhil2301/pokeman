import React from 'react'

function PokiemonList({pokeimon}) {
  return (
    <div>
        {pokeimon.map(p=>(
            <div key={p}>{p}</div>
        ))}
    </div>
  )
}

export default PokiemonList
