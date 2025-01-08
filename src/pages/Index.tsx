import Navbar from "@/components/Navbar";
import LeadForm from "@/components/LeadForm";
import { Building2, Wallet, PiggyBank, Home, Car, Calculator, BadgeDollarSign, LineChart, ClipboardCheck } from "lucide-react";

const services = [
  { icon: Building2, title: "Business Credit Building", description: "Establish and improve your business credit profile" },
  { icon: Wallet, title: "Credit Repair", description: "Professional credit restoration services" },
  { icon: PiggyBank, title: "Debt Management", description: "Strategic debt management solutions" },
  { icon: BadgeDollarSign, title: "Business Capital Readiness", description: "Prepare your business for funding opportunities" },
  { icon: ClipboardCheck, title: "Loan Application Assistance", description: "Expert guidance through the loan process" },
  { icon: LineChart, title: "Debt Restructuring", description: "Optimize your debt structure" },
  { icon: Calculator, title: "Budgeting Services", description: "Personal and business budget planning" },
  { icon: Car, title: "Auto Purchase Assistance", description: "Vehicle financing and acquisition support" },
  { icon: Home, title: "Home Purchase Readiness", description: "Prepare for homeownership" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Dynamic Background */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiIHN0b3Atb3BhY2l0eT0iMC4xIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjODE4Q0Y4IiBzdG9wLW9wYWNpdHk9IjAuMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0wIDBoMjAwdjIwMEgweiIgZmlsbD0idXJsKCNnKSIvPjwvc3ZnPg==')] animate-[pulse_4s_ease-in-out_infinite] opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
        </div>
        <div className="container mx-auto px-4 text-center relative animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Expert Financial Consulting for Your Success
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
            Transform your financial future with professional guidance in credit building, debt management, and business capital solutions.
          </p>
          <a href="#contact" className="bg-primary text-white px-8 py-4 rounded-lg inline-block hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/20 to-transparent animate-pulse" />
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
              <h2 className="text-3xl font-bold mb-6 text-primary">Your Trusted Financial Advisor</h2>
              <p className="text-lg text-gray-600 mb-6">
                With years of experience in financial consulting, I specialize in helping small business owners and individuals achieve their financial goals through comprehensive credit building, debt management, and business capital solutions.
              </p>
              <p className="text-lg text-gray-600">
                My personalized approach ensures that each client receives tailored strategies that align with their unique financial objectives and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM2MzY2ZjEiIHN0b3Atb3BhY2l0eT0iMC4wNSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzgxOENGOCIgc3RvcC1vcGFjaXR5PSIwLjA1Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHBhdGggZD0iTTAgMGgyMDB2MjAwSDB6IiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] opacity-50" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/80 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-gray-100">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/20 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Start Your Financial Journey</h2>
          <div className="bg-white/50 p-8 rounded-xl shadow-2xl max-w-md mx-auto backdrop-blur-sm border border-gray-100">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-600 py-8 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Financial Consulting Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;