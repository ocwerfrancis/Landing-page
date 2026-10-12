import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PricingSection from './components/PricingSection'

const App = () => {
  
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <CompanyLogo />
      <PurposeSection />
      <FeaturesSection />
      <ScheduleSection />
      <MonitorSection />
      <PricingSection />
    </div>
  )
}

export default App