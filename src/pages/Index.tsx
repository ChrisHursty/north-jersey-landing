
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Phone, Mail, MapPin, Clock, Shield, Award, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [showMobileCTA, setShowMobileCTA] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCTA(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours with your free estimate.",
    });
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-[hsl(var(--brand-purple))]">
              North Jersey Specialists
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="hover:text-[hsl(var(--brand-purple))] transition-colors">Services</button>
              <button onClick={() => scrollToSection('testimonials')} className="hover:text-[hsl(var(--brand-purple))] transition-colors">Testimonials</button>
              <button onClick={() => scrollToSection('gallery')} className="hover:text-[hsl(var(--brand-purple))] transition-colors">Our Work</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-[hsl(var(--brand-purple))] transition-colors">FAQ</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-[hsl(var(--brand-purple))] transition-colors">Contact</button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-black/70 to-black/50">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--brand-purple))]/80 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="mb-4 bg-[#300954] text-white">⚠️ Limited Time: 15% Off All Services</Badge>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Professional Painting & Restoration Experts
              </h1>
              <p className="text-xl mb-4 text-gray-200">
                "Need repairs, Build it, Fix it with The Efficient Handyman way."
              </p>
              <p className="text-lg mb-8 text-gray-300">
                Serving Northern NJ communities including Newark, Paterson, Elizabeth, Jersey City, Clifton, and Passaic with over 20 years of trusted expertise.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-[#300954] hover:bg-[#300954]/90 text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection('contact')}
                >
                  Get Free Quote Now <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-[hsl(var(--brand-purple))] px-8 py-4 text-lg"
                >
                  <Phone className="mr-2" /> Call: 973-927-1616
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-gray-300">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-gray-300">Satisfaction Rate</div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-white/95 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-center text-[hsl(var(--brand-purple))]">
                  Get Your FREE Quote Today
                </CardTitle>
                <p className="text-center text-gray-600">Don't wait - save 15% when you act now!</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <select
                    className="w-full p-3 border rounded-md"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    required
                  >
                    <option value="">Select Service Needed</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="industrial">Industrial Coatings</option>
                    <option value="worship">House of Worship Restoration</option>
                    <option value="residential">Residential Painting</option>
                  </select>
                  <Textarea
                    placeholder="Describe your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={3}
                  />
                  <Button type="submit" className="w-full bg-[#300954] hover:bg-[#300954]/90 text-white py-3 text-lg">
                    Get My Free Quote Now
                  </Button>
                  <p className="text-xs text-center text-gray-500">
                    ⏰ Limited time offer expires in 7 days
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-purple))]">Our Expert Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From commercial buildings to sacred spaces, we deliver professional results that stand the test of time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--brand-purple))] rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-white" />
                </div>
                <CardTitle className="text-xl">Commercial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete commercial coatings from architectural painting to waterproofing for businesses across Northern NJ.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--brand-purple))] rounded-lg flex items-center justify-center mb-4">
                  <Award className="text-white" />
                </div>
                <CardTitle className="text-xl">Industrial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  State-of-the-art technology for warehouse floors, structural steel, tanks, and metal surfaces.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--brand-purple))] rounded-lg flex items-center justify-center mb-4">
                  <Users className="text-white" />
                </div>
                <CardTitle className="text-xl">House of Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive cleaning, tuck pointing, and waterproofing for sacred buildings with reverent care.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-[hsl(var(--brand-purple))] rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" />
                </div>
                <CardTitle className="text-xl">Residential</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete home transformation with attention to detail and minimal disruption to your family.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-purple))]">What Our Customers Say</h2>
            <div className="flex justify-center items-center mb-8">
              <div className="flex text-yellow-400 text-2xl">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" />)}
              </div>
              <span className="ml-4 text-xl font-semibold">4.9/5 from 127+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "North Jersey Specialists transformed our church facade. Their attention to detail and respect for our sacred space was exceptional. Highly recommend!"
                </p>
                <div className="font-semibold">- Pastor Michael, St. Mary's Church, Newark</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "Professional, on-time, and within budget. Our warehouse floor coating has held up perfectly after 2 years of heavy use."
                </p>
                <div className="font-semibold">- Sarah Johnson, Logistics Manager, Paterson</div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={16} />)}
                </div>
                <p className="text-gray-600 mb-4">
                  "They painted our entire home exterior. Clean, efficient, and the results exceeded our expectations. Worth every penny!"
                </p>
                <div className="font-semibold">- The Rodriguez Family, Clifton</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Work Gallery */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-purple))]">Our Recent Projects</h2>
            <p className="text-xl text-gray-600">See the quality craftsmanship that sets us apart</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { image: "photo-1487958449943-2429e8be8625", title: "Commercial Office Building", location: "Jersey City" },
              { image: "photo-1518005020951-eccb494ad742", title: "Historic Church Restoration", location: "Newark" },
              { image: "photo-1466442929976-97f336a657be", title: "Mosque Renovation", location: "Paterson" },
              { image: "photo-1433832597046-4f10e10ac764", title: "High-Rise Exterior", location: "Elizabeth" },
              { image: "photo-1487252665478-49b61b47f302", title: "Industrial Facility", location: "Clifton" },
              { image: "photo-1469474968028-56623f02e42e", title: "Residential Project", location: "Passaic" }
            ].map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-cover bg-center" style={{
                  backgroundImage: `url('https://images.unsplash.com/${project.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')`
                }} />
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-gray-600">{project.location}, NJ</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Time Offer */}
      <section className="py-20 bg-[#300954] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Clock className="mx-auto mb-6 text-6xl" />
            <h2 className="text-4xl font-bold mb-6">Don't Miss Out - Limited Time Offer!</h2>
            <p className="text-2xl mb-8">
              Save 15% on all painting and restoration services - but only for the next 7 days!
            </p>
            <div className="bg-white/20 rounded-lg p-6 mb-8">
              <p className="text-xl">
                ⚠️ <strong>Warning:</strong> Material costs are rising 8% next month. Lock in today's prices and save hundreds on your project!
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-white text-[#300954] hover:bg-gray-100 px-12 py-4 text-xl"
              onClick={() => scrollToSection('contact')}
            >
              Claim Your 15% Discount Now
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[hsl(var(--brand-purple))]">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "How long does a typical painting project take?",
                a: "Most residential projects take 3-5 days, while commercial projects vary based on size and complexity. We'll provide a detailed timeline with your quote."
              },
              {
                q: "Do you provide free estimates?",
                a: "Yes! All estimates are completely free with no obligation. We'll assess your project and provide a detailed quote within 24 hours."
              },
              {
                q: "Are you licensed and insured?",
                a: "Absolutely. We're fully licensed, bonded, and insured for your peace of mind. We can provide certificates upon request."
              },
              {
                q: "What areas do you serve in Northern NJ?",
                a: "We serve all of Northern NJ including Newark, Paterson, Elizabeth, Jersey City, Clifton, Passaic, and surrounding communities."
              },
              {
                q: "What makes your pricing competitive?",
                a: "We offer transparent pricing with no hidden fees, bulk material discounts, and efficient processes that save you money without compromising quality."
              }
            ].map((faq, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{faq.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[hsl(var(--brand-purple))] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl">Contact North Jersey's most trusted painting specialists today</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="mr-4 text-[hsl(var(--brand-cream))]" />
                  <div>
                    <div className="font-semibold">Call Us Today</div>
                    <div>973-927-1616 or 973-229-9787</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="mr-4 text-[hsl(var(--brand-cream))]" />
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div>rich@njspecialists.net</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-4 text-[hsl(var(--brand-cream))]" />
                  <div>
                    <div className="font-semibold">Visit Our Office</div>
                    <div>5 Laurel Drive, Unit 6<br />Flanders, NJ 07836</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Request Your Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Your Name" required />
                  <Input type="email" placeholder="Email Address" required />
                  <Input type="tel" placeholder="Phone Number" required />
                  <select className="w-full p-3 border rounded-md" required>
                    <option value="">Select Service Needed</option>
                    <option value="commercial">Commercial Painting</option>
                    <option value="industrial">Industrial Coatings</option>
                    <option value="worship">House of Worship Restoration</option>
                    <option value="residential">Residential Painting</option>
                  </select>
                  <Textarea placeholder="Tell us about your project..." rows={4} />
                  <Button type="submit" className="w-full bg-[#300954] hover:bg-[#300954]/90 text-white py-3 text-lg">
                    Get My Free Quote - Save 15%
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-3xl font-bold mb-4 text-[hsl(var(--brand-cream))]">
              North Jersey Specialists
            </div>
            <p className="text-gray-400 mb-8">
              "Need repairs, Build it, Fix it with The Efficient Handyman way."
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <span>Licensed & Insured</span>
              <span>20+ Years Experience</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-gray-500">
              © 2024 North Jersey Specialists Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 bg-[#300954] text-white p-4 transform transition-transform md:hidden ${
        showMobileCTA ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold">Save 15% Today!</div>
            <div className="text-sm opacity-90">Limited time offer</div>
          </div>
          <Button 
            className="bg-white text-[#300954] hover:bg-gray-100 font-bold"
            onClick={() => scrollToSection('contact')}
          >
            Get Quote Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
