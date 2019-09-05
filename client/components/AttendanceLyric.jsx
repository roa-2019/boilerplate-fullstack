import React from 'react'

const AttendanceLyric = ({name, intro, onTime}) => {
  if (!name) return <div></div>
  return (
    <div>
      <h1>Attendance Lyrics in the house</h1>
      <p>
        Hi {name}, let's hear your intro
      </p>
      <p>{intro} - drops mic</p>
      {onTime ? <div>You are awesome</div> : <div>Not so much</div>}

    </div>
  )
}

export default AttendanceLyric
