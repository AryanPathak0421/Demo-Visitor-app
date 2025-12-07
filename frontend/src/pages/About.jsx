import React from 'react';
import { 
  Target, 
  Code, 
  Smartphone, 
  Shield, 
  Users, 
  Award, 
  Globe, 
  Heart,
  Building,
  MapPin,
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To create a seamless digital tourism experience that showcases Indore's rich heritage while providing modern convenience.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Code,
      title: "Technology",
      description: "Built with React, Vite, TailwindCSS, and React Router v6 for a fast, responsive, and modern web experience.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Designed with mobile users in mind, ensuring smooth experience across all devices and screen sizes.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Shield,
      title: "Security",
      description: "Follows industry best practices for security and data protection in tourism applications.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const team = [
    {
      name: "Indore Municipal Corporation",
      role: "Project Lead",
      description: "Official tourism department managing city heritage and tourism initiatives.",
      color: "from-blue-500 to-blue-700"
    },
    {
      name: "Tourism Board of MP",
      role: "Strategic Partner",
      description: "Collaborating on state-level tourism development and promotion.",
      color: "from-green-500 to-green-700"
    },
    {
      name: "Technology Team",
      role: "Development & Design",
      description: "Creating innovative digital solutions for tourism enhancement.",
      color: "from-purple-500 to-purple-700"
    }
  ];

  const milestones = [
    { year: "2025", title: "Concept Development", description: "Team Building & Initial research and concept design for digital tourism platform" },
    { year: "2025", title: "Prototype Launch", description: "First working prototype with core features" },
    { year: "2025", title: "Beta Testing", description: "User testing and feedback collection phase" },
    { year: "Coming Soon", title: "Official Launch", description: "Full public launch with all features" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900/90 to-indigo-900/90 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
  <div className="flex w-full h-full">
    
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Image_0217_%28Indore%29.png"
      alt="Indore Heritage"
      className="w-1/3 h-full object-cover opacity-30"
    />

    <img 
      src="https://www.trawell.in/admin/images/upload/094484563Indore_Rajwada_Palace_Main.jpg"
      alt="Rajwada"
      className="w-1/3 h-full object-cover opacity-30"
    />

    <img 
      src="https://media.assettype.com/freepressjournal/2025-09-01/j1en8vwv/eff.jpeg"
      alt="Lal Bagh Palace"
      className="w-1/3 h-full object-cover opacity-30"
    />

  </div>
</div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <Building className="w-5 h-5" />
            <span className="font-medium">About Indore Tourism</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">Digital Tourism Platform</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A modern, mobile-first city guide showcasing Indore's heritage through innovative technology
            and user-centric design.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome to Indore's Digital Gateway</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            This platform represents the official digital initiative by Indore Municipal Corporation 
            to transform tourism experiences through technology. We're bridging historical heritage 
            with modern convenience to create memorable visits for everyone.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Project Details */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16 border border-blue-200">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Built to showcase tourist attractions and local services for citizens and tourists</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Demonstrates modern booking flows and emergency helpline integration</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Production-ready architecture for IMC APIs, maps, and ticketing backend</span>
                </p>
                <p className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Clean, accessible UI following web accessibility standards (WCAG)</span>
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Stack</h3>
              <div className="space-y-4">
                {[
                  { tech: "React 18", purpose: "Frontend framework" },
                  { tech: "Vite", purpose: "Build tool & development server" },
                  { tech: "TailwindCSS", purpose: "Utility-first CSS framework" },
                  { tech: "React Router v6", purpose: "Client-side routing" },
                  { tech: "Lucide React", purpose: "Icon library" },
                  { tech: "Responsive Design", purpose: "Mobile-first approach" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-medium text-gray-900">{item.tech}</span>
                    <span className="text-sm text-gray-600">{item.purpose}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Partners & Team</h2>
            <p className="text-gray-600">Collaborating to bring the best tourism experience</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className={`h-3 bg-gradient-to-r ${member.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{member.name}</h3>
                      <p className="text-sm text-blue-600">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Development Journey</h2>
            <p className="text-gray-600">From concept to deployment</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, idx) => (
                <div key={idx} className={`relative flex items-center ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                      <div className="text-sm font-medium text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className={`w-1/2 ${idx % 2 === 0 ? 'pl-12' : 'pr-12'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Guiding principles that shape every aspect of our platform
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe,
                title: "Accessibility",
                description: "Ensuring everyone can access and enjoy Indore's heritage"
              },
              {
                icon: Heart,
                title: "User-Centric",
                description: "Designing experiences around visitor needs and feedback"
              },
              {
                icon: Star,
                title: "Excellence",
                description: "Maintaining high standards in every feature and service"
              },
              {
                icon: Clock,
                title: "Innovation",
                description: "Continuously evolving with technology and tourism trends"
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-blue-100">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience Indore Like Never Before</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of visitors who have discovered the beauty of Indore through our platform.
            Whether you're planning your first visit or rediscovering familiar places, we're here to enhance your journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow hover:shadow-lg">
              Start Exploring
            </button>
            <button className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-medium hover:border-blue-500 transition-colors">
              View Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}