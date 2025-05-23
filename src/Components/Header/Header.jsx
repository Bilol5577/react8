import React from 'react'

const Header = ({ usercard }) => {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>User Card</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', width: '80%', margin:'0 auto', }}>
        {usercard.map((user, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '10px',
              width: '20%',
              height: '400px',
              textAlign: 'center',
              backgroundColor: '#FCF2E5',
            }}
          >
            {user.image && (
              <img
                src={user.image}
                alt={user.name}
                width='90%'
                style={{ borderRadius: '8px', marginBottom: '10px' }}
              />
            )}
            <p style={{fontSize: '22px', fontWeight: 600}}> {user.name}</p>
            <p style={{fontSize: '16px', color: 'gray'}}> {user.job}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header