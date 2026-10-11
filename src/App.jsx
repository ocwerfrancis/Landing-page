import Hero from './components/Hero'
import Navbar from './components/Navbar'
import CompanyLogo from './components/CompanyLogo'
import PurposeSection from './components/PurposeSection'
import FeaturesSection from './components/FeaturesSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'

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
    </div>
  )
}

export default App