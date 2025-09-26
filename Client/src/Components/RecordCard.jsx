import React from 'react'

const RecordCard = ({record}) => {
  return (
    <div>
      {record.title}
      {record.completed.toString()}
    </div>
  )
}

export default RecordCard
