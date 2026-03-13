import Header from './Header'
import Sidebar from './Sidebar'
import ProgressBar from './ProgressBar'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ProgressBar />
      <Sidebar />
      <main className="md:ml-[260px] pt-[56px]">
        {children}
      </main>
    </>
  )
}
