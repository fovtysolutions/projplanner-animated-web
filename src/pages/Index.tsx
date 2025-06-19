import { useState, useEffect } from 'react';
import { ChevronRight, Play, Users, Target, Zap, Shield, ArrowRight, CheckCircle, Star, Menu, X, BarChart3, Clock, Globe, Lightbulb, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Target,
      title: "Smart Project Planning",
      description: "AI-powered project planning that adapts to your team's workflow and delivers optimal timelines with predictive analytics."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless real-time collaboration with advanced communication tools, file sharing, and integrated video conferencing."
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Streamline repetitive tasks with intelligent automation, custom workflow builders, and smart notifications."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO integration, and compliance with industry standards."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive project insights with real-time dashboards, performance metrics, and predictive reports."
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Effortless time management with automatic tracking, detailed timesheets, and productivity insights."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Active Teams", icon: Users },
    { number: "2M+", label: "Projects Completed", icon: Target },
    { number: "99.9%", label: "Uptime", icon: Shield },
    { number: "50+", label: "Integrations", icon: Globe }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Project Manager, TechCorp",
      content: "Projplanner transformed how we manage projects. Our delivery time improved by 40% and team satisfaction is at an all-time high.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "CEO, StartupX",
      content: "The best project management tool we've ever used. Intuitive, powerful, and reliable. It scales perfectly with our growing team.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Davis",
      role: "Team Lead, Innovation Labs",
      content: "Game-changer for our remote team. Communication and planning have never been easier. The automation features save us hours daily.",
      rating: 5,
      avatar: "ED"
    }
  ];

  const benefits = [
    "Increase productivity by up to 40%",
    "Reduce project delays by 60%",
    "Improve team collaboration",
    "Get real-time project insights",
    "Automate repetitive tasks",
    "Scale with your growing business"
  ];

  const integrations = [
    { name: "Slack", logo: "💬" },
    { name: "Google Drive", logo: "📁" },
    { name: "Jira", logo: "🔧" },
    { name: "GitHub", logo: "🐙" },
    { name: "Zoom", logo: "📹" },
    { name: "Figma", logo: "🎨" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$9",
      period: "/month",
      description: "Perfect for small teams getting started",
      features: [
        "Up to 5 team members",
        "10 active projects",
        "Basic project templates",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false,
      buttonText: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$29",
      period: "/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Up to 25 team members",
        "Unlimited projects",
        "Advanced project templates",
        "Priority support",
        "Time tracking",
        "Advanced analytics",
        "Custom workflows",
        "API access"
      ],
      popular: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited team members",
        "Unlimited projects",
        "Custom integrations",
        "24/7 dedicated support",
        "Advanced security",
        "Custom reporting",
        "White-label options",
        "SSO integration"
      ],
      popular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center animate-pulse">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projplanner
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-105 transform">Features</Link>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-105 transform">Pricing</a>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors hover:scale-105 transform">Contact</Link>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-blue-500/25">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden transform transition-transform hover:scale-110"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 animate-fade-in">
            <div className="px-4 py-2 space-y-2">
              <Link to="/features" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Features</Link>
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <button className="w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center bg-blue-50 text-blue-600 px-4 py-2 rounded-full mb-6 animate-bounce">
              <Lightbulb className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">AI-Powered Project Management</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
                Project Planning
              </span>
              <br />
              <span className="text-gray-900">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your project management with AI-powered planning, seamless collaboration, and intelligent automation. 
              Join thousands of teams delivering better results faster.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center group hover:shadow-blue-500/25">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors group bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo (2 min)
              </button>
            </div>

            {/* Enhanced Dashboard Preview */}
            <div className="relative max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-2xl p-4 transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/10">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 aspect-video flex items-center justify-center relative overflow-hidden">
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 text-lg font-medium">Interactive Dashboard Preview</p>
                    <p className="text-gray-500 text-sm mt-2">Real-time project insights & analytics</p>
                  </div>
                  
                  {/* Animated background elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-4 left-4 w-12 h-2 bg-blue-200 rounded animate-pulse" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-8 left-4 w-20 h-2 bg-purple-200 rounded animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-green-200 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-4 left-4 w-16 h-1 bg-yellow-200 rounded animate-pulse" style={{animationDelay: '1.5s'}}></div>
                    <div className="absolute bottom-8 right-8 w-6 h-6 bg-pink-200 rounded animate-bounce" style={{animationDelay: '2s'}}></div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '2s'}}></div>
              <div className="absolute -top-8 left-1/4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center transform hover:scale-105 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to plan, execute, and deliver successful projects with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-2xl hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 group border border-gray-100 hover:border-blue-200"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Teams Choose Projplanner
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the difference with our comprehensive project management solution designed for modern teams.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center group hover:bg-blue-50 p-3 rounded-lg transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 group-hover:text-gray-900 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">40%</div>
                    <div className="text-gray-600 text-sm">Faster Delivery</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Award className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-gray-600 text-sm">Team Satisfaction</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Clock className="w-8 h-8 text-green-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">60%</div>
                    <div className="text-gray-600 text-sm">Time Saved</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Target className="w-8 h-8 text-orange-600 mb-2" />
                    <div className="text-2xl font-bold text-gray-900">99%</div>
                    <div className="text-gray-600 text-sm">On-Time Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Connect with your favorite tools and streamline your workflow
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {integrations.map((integration, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-110 hover:-translate-y-2 group text-center"
              >
                <div className="text-3xl mb-3 group-hover:scale-125 transition-transform">{integration.logo}</div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Loved by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of teams who trust Projplanner to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 group"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current group-hover:scale-110 transition-transform" style={{animationDelay: `${i * 0.1}s`}} />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-4 group-hover:scale-110 transition-transform">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your team. Start with a free trial and upgrade as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-4 border ${
                  plan.popular ? 'border-blue-500 ring-2 ring-blue-500 ring-opacity-50' : 'border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  
                  <div className="flex items-baseline mb-8">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button 
                    className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
            <p className="text-sm text-gray-500">Need a custom solution? <a href="#" className="text-blue-600 hover:underline">Contact our sales team</a></p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Projects?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams already using Projplanner to deliver better results faster. 
            Start your free trial today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-gray-50">
              Start Your Free Trial Today
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Schedule a Demo
            </button>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-white opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-white opacity-10 rounded-full animate-ping"></div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Projplanner</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The ultimate project management solution for modern teams. Streamline your workflow, 
                boost productivity, and deliver exceptional results.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">𝕏</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                  <span className="text-sm">fb</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><Link to="/features" className="hover:text-white transition-colors hover:underline">Features</Link></li>
                <li><a href="#pricing" className="hover:text-white transition-colors hover:underline">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Integrations</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Mobile App</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Careers</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors hover:underline">Contact</Link></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4 text-lg">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors hover:underline">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400">&copy; 2024 Projplanner. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
