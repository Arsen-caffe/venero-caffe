import { Route, Routes } from 'react-router-dom'
import { SiteProvider } from './context/SiteProvider'
import { Layout } from './layout/Layout'
import { CategoryPage } from './pages/CategoryPage'
import { EspressoOfferPage } from './pages/EspressoOfferPage'
import { Home } from './pages/Home'

export default function App() {
  return (
    <SiteProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="espresso-si-ne-bar" element={<EspressoOfferPage />} />
          <Route path="products/:category" element={<CategoryPage />} />
        </Route>
      </Routes>
    </SiteProvider>
  )
}
