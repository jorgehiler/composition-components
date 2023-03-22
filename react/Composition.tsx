import React from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { ExtensionPoint } from 'vtex.render-runtime'

type Props = {
  title: string
  children: React.ReactNode
  Bottom: any
}

function Composition({ title, children, Bottom }: Props) {
  const { handles } = useCssHandles(['ContainerComposition'])

  return (
    <div className={`${handles.ContainerComposition} b--red ba bb bw3 pa5`}>
      <h1 className="ma0">{title}</h1>
      {children}
      <div>
        <p className="b">Wrapper de borde solido</p>
        <ExtensionPoint id="solid-border" />
        <p className="b">Wrapper de border punteado</p>
        <ExtensionPoint id="dotted-border" />
      </div>
      <Bottom />
    </div>
  )
}

export default Composition
