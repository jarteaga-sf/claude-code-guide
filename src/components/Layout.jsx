import { useState, useCallback } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import ProgressBar from './ProgressBar'

export default function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [presentationSlide, setPresentationSlide] = useState({ deckActive: true })

  const handleSlideChange = useCallback((info) => {
    setPresentationSlide(info)
  }, [])

  return (
    <>
      <Header />
      <ProgressBar />
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(!collapsed)}
        presentationSlide={presentationSlide}
      />
      <main
        className={`pt-[56px] transition-[margin] duration-300 ease-out ${
          collapsed ? 'md:ml-[52px]' : 'md:ml-[200px]'
        }`}
      >
        {typeof children === 'function' ? children({ onSlideChange: handleSlideChange }) : children}
      </main>
      {/* Vignette overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-30"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 55% 50%, transparent 0%, rgba(0,0,0,0.06) 100%)',
        }}
      />
    </>
  )
}
