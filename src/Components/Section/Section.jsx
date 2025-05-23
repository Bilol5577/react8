import React from 'react'

const Section = ({ infocard }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Info Card</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        width: '80%',
        margin: '0 auto',
      }}>
        {infocard.map((user, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '15%',
              height: '400px',
              textAlign: 'center',
            }}
          >
            {user.image && (
              <img
                src={user.image}
                alt={user.name}
                width='100%'
                style={{ borderRadius: '8px', marginBottom: '0px' }}
              />
            )}
            <p style={{ fontSize: '16px', fontWeight: 600, color: '#009AF0' }}>{user.name}</p>
            <p style={{ fontSize: '13px', textAlign: 'left' }}>{user.job}</p>
            <button style={{ fontSize: '13px', backgroundColor: '#009AF0', color: 'white', border: 'none', padding: '10px 20px', borderRadius: "10px"}}>Read now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section
