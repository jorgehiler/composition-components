import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

type Props = {
  title: string
  children: React.ReactNode
}

function Composition({ title, children }: Props) {
  const { handles } = useCssHandles(['ContainerComposition'])

  return (
    <div className={`${handles.ContainerComposition} b--red ba bb bw3`}>
      <h1 className="ma0">{title}</h1>
      {children}
    </div>
  )
}

export default Composition
