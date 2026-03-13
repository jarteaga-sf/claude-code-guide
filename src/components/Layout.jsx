import Sidebar from './Sidebar'
import ProgressBar from './ProgressBar'

export default function Layout({ children }) {
  return (
    <>
      <ProgressBar />
      <Sidebar />
      <main className="md:ml-[260px]">
        {children}
      </main>
    </>
  )
}
