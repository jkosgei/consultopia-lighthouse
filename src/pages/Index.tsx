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
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Financial Consulting for Your Success
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform your financial future with professional guidance in credit building, debt management, and business capital solutions.
          </p>
          <a href="#contact" className="bg-secondary text-white px-8 py-3 rounded-md inline-block hover:bg-secondary/90 transition-colors">
            Get Started Today
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2">
              <img 
                src="/lovable-uploads/a7d114a0-0d17-4734-815c-6e5c0bc9a787.png"
                alt="Financial Consultant"
                className="rounded-lg shadow-xl w-full max-w-md mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Your Trusted Financial Advisor</h2>
              <p className="text-lg text-gray-700 mb-6">
                With years of experience in financial consulting, I specialize in helping small business owners and individuals achieve their financial goals through comprehensive credit building, debt management, and business capital solutions.
              </p>
              <p className="text-lg text-gray-700">
                My personalized approach ensures that each client receives tailored strategies that align with their unique financial objectives and circumstances.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <service.icon className="w-12 h-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Start Your Financial Journey</h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-md mx-auto">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Financial Consulting Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;