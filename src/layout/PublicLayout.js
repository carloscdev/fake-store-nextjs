import { Header, Navbar } from '@components/'

export const PublicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navbar />
      {children}
    </div>
  )
}
