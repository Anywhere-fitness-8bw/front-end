import React from 'react'

function Member({ details }) {
  if (!details) {
    return <h3>Working fetching your fellow Member&apos;s details...</h3>
  }

  return (
    <div className='member-container'>
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Intensity: {details.int}</p>
      <p>Civil: {details.civil}</p>

      {
        !!details.classes && !!details.classes.length &&
        <div>
          Classes:
          <ul>
            {details.classes.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Member