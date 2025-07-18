import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import Card from "../components/UI/Card";
import Button from "../components/UI/Button";
import type { ContactInfo, Office } from "../types";

// const ACCESS_KEY = "d2ceac50-b5d8-46ed-99b9-597c7645b246"; //test
const ACCESS_KEY = "4eb4b286-977e-4ee8-b18a-2c7824dd7d5a";


const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    productInterest: "",
    quantity: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const offices: Office[] = [
    {
      id: "1",
      name: "Corporate Office",
      address:
        "Door No.17/595, B Block Virtue Tower, Parapirivu, Kanjikode, Palakkad 678621",
      phone: "+91 9446343439",
      email: "surabhisteelspkd@gmail.com",
      coordinates: [28.4595, 77.0266],
      timezone: "IST",
      hours: "Mon-Sat: 9:00 AM - 6:00 PM",
    },
    // {
    //   id: '2',
    //   name: 'Mumbai Office',
    //   address: 'Plot No. 45, MIDC Industrial Area, Andheri East, Mumbai 400093',
    //   phone: '+91 22 2821 4567',
    //   email: 'mumbai@surabhi-tmt.com',
    //   coordinates: [19.1136, 72.8697],
    //   timezone: 'IST',
    //   hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    // },
    // {
    //   id: '3',
    //   name: 'Chennai Office',
    //   address: 'No. 123, GST Road, Guindy Industrial Estate, Chennai 600032',
    //   phone: '+91 44 4567 8901',
    //   email: 'chennai@surabhi-tmt.com',
    //   coordinates: [13.0067, 80.2206],
    //   timezone: 'IST',
    //   hours: 'Mon-Sat: 9:00 AM - 6:00 PM'
    // }
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("company", formData.company);
      formDataToSend.append("message", formData.message);
      formDataToSend.append("productInterest", formData.productInterest);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
          productInterest: "",
          quantity: "",
        });
      } else {
        console.error("Submission failed:", data.message);
        // Optionally, add error state to display to the user
      }
    } catch (error) {
      console.error("Error:", error);
      // Optionally, add error state to display to the user
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-steel-50 to-white flex items-center justify-center py-20">
        <Card className="max-w-md mx-auto text-center fade-in">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-steel-900 mb-4">Thank You!</h2>
          <p className="text-steel-600 mb-6">
            Your inquiry has been submitted successfully. Our team will get back
            to you within 24 hours.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Submit Another Inquiry
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-steel-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with fade-in */}
        <div className="text-center mb-16 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-steel-900 mb-6">
            Get in <span className="text-[#009C49]">Touch</span>
          </h1>
          <p className="text-xl text-steel-600 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your steel requirements? Our experts are here to
            help you find the perfect solution for your construction projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form with fade-in and delay */}
          <Card className="fade-in" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold text-steel-900 mb-6">
              Send us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="productInterest"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Product Interest
                  </label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select a product</option>
                    <option value="Fe 550">Fe 550</option>
                    <option value="MS Angles">MS Angles</option>
                    <option value="MS Flat">MS Flat</option>
                    <option value="MS Square Rod">MS Square Rod</option>
                    <option value="MS Round Rod">MS Round Rod</option>
                    <option value="MS Channels">MS Channels</option>
                    <option value="I Beem">I Beem</option>
                    <option value="Polish Rod">Polish Rod</option>
                    <option value="MS Wire">MS Wire</option>
                    <option value="MS T Angle">MS T Angle</option>
                    <option value="Asian TMT">Asian TMT</option>
                    <option value="Apex TMT">Apex TMT</option>
                    <option value="Ordinary TMT">Ordinary TMT</option>
                    <option value="MS Rings">MS Rings</option>
                    <option value="Raipur 4TMT">Raipur 4TMT</option>
                  </select>
                </div>
                {/* <div>
                  <label
                    htmlFor="quantity"
                    className="block text-sm font-medium text-steel-700 mb-2"
                  >
                    Estimated Quantity
                  </label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select quantity range</option>
                    <option value="0-10 MT">0-10 MT</option>
                    <option value="10-50 MT">10-50 MT</option>
                    <option value="50-100 MT">50-100 MT</option>
                    <option value="100-500 MT">100-500 MT</option>
                    <option value="500+ MT">500+ MT</option>
                  </select>
                </div> */}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-steel-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-steel-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                icon={Send}
                iconPosition="right"
                loading={isLoading}
                className="w-full"
              >
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Office Locations with fade-in and delay */}
          <div className="space-y-6 fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold text-steel-900 mb-6">
              Our Offices
            </h2>
            {offices.map((office) => (
              <Card key={office.id} hover>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-steel-900 mb-2">
                      {office.name}
                    </h3>
                    <div className="space-y-2 text-sm text-steel-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-steel-400 mt-0.5 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-steel-400 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-steel-400 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-steel-400 flex-shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Emergency Contact */}
            <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-orange-200">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Emergency Contact
                </h3>
                <p className="text-red-600 mb-3">
                  For urgent inquiries outside business hours
                </p>
                <div className="flex items-center justify-center space-x-2 text-red-700">
                  <Phone className="h-4 w-4" />
                  <span className="font-semibold">+91 96451 13003</span>
                </div>
                <p className="text-red-600 text-sm mt-2">Available 24/7</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
