import Navbar from "@/components/Navbar";
import LeadForm from "@/components/LeadForm";
import { Building2, Wallet, PiggyBank, Home, Car, Calculator, BadgeDollarSign, LineChart, ClipboardCheck, Shield, HomeIcon, Clock, Heart, Gift } from "lucide-react";

const services = [
  { icon: Building2, title: "Business Credit Building", description: "Establish and improve your business credit profile" },
  { icon: Wallet, title: "Credit Building", description: "Professional credit building services" },
  { icon: PiggyBank, title: "Debt Management", description: "Strategic debt management solutions" },
  { icon: BadgeDollarSign, title: "Business Capital Readiness", description: "Prepare your business for funding opportunities" },
  { icon: Calculator, title: "Budgeting Services", description: "Personal and business budget planning" },
  { icon: Car, title: "Auto Purchase Assistance", description: "Vehicle financing and acquisition support" },
  { icon: Home, title: "Home Purchase Readiness", description: "Prepare for homeownership" },
  { icon: Shield, title: "Mortgage Protection", description: "Protect the equity on your home. Ensure your family keeps their home no matter what life brings." },
  { icon: Clock, title: "Retirement Planning", description: "Build liquidity for your emergencies and opportunities. Have cash available in retirement when you need it most." },
  { icon: Heart, title: "Last Expense", description: "Helps reduce the burden to your family once you're gone. Have monies set aside for last expense." },
  { icon: Gift, title: "Legacy Planning", description: "Leave a gift for grandchildren and family. Build a lasting financial legacy for the ones you love." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C]">
      <Navbar />
      
      {/* Hero Section with Dynamic Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1A1F2C] to-[#403E43] text-white py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM5Yjg3ZjUiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjN0U2OUFCIiBzdG9wLW9wYWNpdHk9IjAuMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] animate-[pulse_4s_ease-in-out_infinite] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1F2C] to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA]">
            Expert Financial Consulting for Your Success
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Transform your financial future with professional guidance in credit building, debt management, and business capital solutions.
          </p>
          <a href="#contact" className="bg-[#9b87f5] text-white px-8 py-4 rounded-lg inline-block hover:bg-[#7E69AB] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-[#1A1F2C] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#403E43]/20 to-transparent animate-pulse" />
        <div className="container mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/a7d114a0-0d17-4734-815c-6e5c0bc9a787.png"
                alt="Financial Consultant"
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#9b87f5]">Your Trusted Financial Advisor</h2>
              <p className="text-lg text-gray-300 mb-6">
                With years of experience in financial consulting, I specialize in helping small business owners and individuals achieve their financial goals through comprehensive credit building, debt management, and business capital solutions.
              </p>
              <p className="text-lg text-gray-300">
                My personalized approach ensures that each client receives tailored strategies that align with their unique financial objectives and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#403E43] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM5Yjg3ZjUiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzdFNjlBQiIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgyMDB2MjAwSDB6IiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-[#1A1F2C]/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-[#9b87f5]/20">
                <service.icon className="w-12 h-12 text-[#9b87f5] mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section id="contact" className="bg-[#1A1F2C] py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#403E43]/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Start Your Financial Journey</h2>
          <div className="bg-[#403E43]/50 p-8 rounded-xl shadow-2xl max-w-md mx-auto backdrop-blur-sm border border-[#9b87f5]/20">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] text-white py-8 border-t border-[#9b87f5]/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Financial Consulting Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;