import React from 'react'

const SolidBorder = ({ children, color }: any) => {
  return (
    <div className="b--solid bw3" style={{ borderColor: `${color || 'red'}` }}>
      {children}
    </div>
  )
}

export default SolidBorder
