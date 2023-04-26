import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import { ExtensionPoint } from 'vtex.render-runtime'

type Props = {
  title: string
  children: React.ReactNode
  LogoBrand: any
}

const CustomBlock = ({ title, children, LogoBrand }: Props) => {
  return (
    <div>
      <div className="flex-row flex justify-between">
        <div>
          <h1>{title}</h1>
          <ExtensionPoint id="richt-text" />
        </div>
        <div className="mw5">
          <LogoBrand />
        </div>
      </div>
      <SliderLayout
        itemsPerPage={{
          desktop: 1,
          tablet: 1,
          phone: 1,
        }}
        infinite
        showNavigationArrows="desktopOnly"
        blockClass="carousel"
      >
        <p>Primer Componente</p>
        <p>Segundo Componente</p>
        {children}
      </SliderLayout>
    </div>
  )
}

export default CustomBlock
