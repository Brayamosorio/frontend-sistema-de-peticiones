import { useRef } from 'react'

export function CardContainer({ children }) {
  return <div className="relative">{children}</div>
}

export function CardBody({ children, className = '', ...props }) {
  const ref = useRef(null)

  function onMouseMove(e) {
    const el = ref.current
    const rect = el.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateX = (y / rect.height - 0.5) * -15
    const rotateY = (x / rect.width - 0.5) * 15

    el.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `
  }

  function onMouseLeave() {
    ref.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
    `
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`
        transition-transform duration-300
        [transform-style:preserve-3d]
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardItem({ children, translateZ = 0, className = '' }) {
  return (
    <div
      style={{ transform: `translateZ(${translateZ}px)` }}
      className={className}
    >
      {children}
    </div>
  )
}
