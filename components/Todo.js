import React from 'react'

function Todo({id, text}) {
  return (
    <div>
        {`ID: ${id}`}
        {`${text}`}
    </div>
  )
}

export default Todo