import { ReactNode } from 'react'

interface LogoSplitProps {
  left: ReactNode
  right: ReactNode
}

export default function LogoSplit({ left, right }: LogoSplitProps) {
  return (
    <div className="logo-split">
      <div className="logo-split-panel" style={{ background: '#fff' }}>
        {left}
      </div>
      <div className="logo-split-panel" style={{ background: '#F4F6F8' }}>
        {right}
      </div>
    </div>
  )
}
