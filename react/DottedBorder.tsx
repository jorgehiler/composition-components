import React from 'react'

const DottedBorder = ({ children, color }: any) => {
  return (
    <div className="b--dotted bw3" style={{ borderColor: `${color || 'red'}` }}>
      {children}
    </div>
  )
}

export default DottedBorder
