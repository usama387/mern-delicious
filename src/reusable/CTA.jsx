import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  MenuIcon,
  Phone,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  Utensils,
  Gift,
} from "lucide-react";

const CTASection = () => {

  const [hoveredCard, setHoveredCard] = useState(null);

  const ctaCards = [
    {
      id: 1,
      title: "Make a Reservation",
      subtitle: "Book Your Table",
      description:
        "Reserve your spot for an unforgettable dining experience with authentic Pakistani flavors.",
      icon: Calendar,
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-800",
      textColor: "text-blue-50",
      accentColor: "text-blue-200",
      buttonText: "Book Now",
      badge: "Popular",
    },
    {
      id: 2,
      title: "View Our Menu",
      subtitle: "Explore Delicious Dishes",
      description:
        "Discover our extensive menu featuring traditional biryani, karahi, kebabs and more.",
      icon: MenuIcon,
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      hoverColor: "hover:from-green-600 hover:to-green-800",
      textColor: "text-green-50",
      accentColor: "text-green-200",
      buttonText: "See Menu",
      badge: "New Items",
    },
    {
      id: 3,
      title: "Order Online",
      subtitle: "Delivery & Takeaway",
      description:
        "Enjoy our delicious food from the comfort of your home with fast delivery service.",
      icon: Utensils,
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      hoverColor: "hover:from-purple-600 hover:to-purple-800",
      textColor: "text-purple-50",
      accentColor: "text-purple-200",
      buttonText: "Order Now",
      badge: "Fast Delivery",
    },
    {
      id: 4,
      title: "Gift Cards",
      subtitle: "Perfect for Food Lovers",
      description:
        "Give the gift of exceptional dining with our restaurant gift cards for any occasion.",
      icon: Gift,
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-700",
      hoverColor: "hover:from-orange-600 hover:to-orange-800",
      textColor: "text-orange-50",
      accentColor: "text-orange-200",
      buttonText: "Buy Gift Card",
      badge: "Special Offer",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+92 300 1234567",
      color: "text-red-500",
      bgColor: "bg-red-50",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Food Street, Karachi",
      color: "text-teal-500",
      bgColor: "bg-teal-50",
    },
    {
      icon: Clock,
      label: "Open Hours",
      value: "11 AM - 11 PM Daily",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-green-200/30 to-orange-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium bg-gradient-to-r from-green-100 to-blue-100 text-gray-700"
          >
            Take Action
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ready to Experience
            <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Authentic Flavors?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover why we're the top
            choice for authentic Pakistani cuisine.
          </p>
        </div>

        {/* Main CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ctaCards.map((cta) => {
            const IconComponent = cta.icon;
            return (
              <Card
                key={cta.id}
                className={`${cta.bgColor} ${cta.hoverColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 cursor-pointer group`}
                onMouseEnter={() => setHoveredCard(cta.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardContent className="p-6 text-center relative overflow-hidden">
                  {/* Badge */}
                  <Badge
                    variant="secondary"
                    className="absolute top-4 right-4 bg-white/20 text-white border-0 text-xs"
                  >
                    {cta.badge}
                  </Badge>

                  {/* Icon */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`h-8 w-8 ${cta.textColor}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold ${cta.textColor} mb-2`}>
                    {cta.title}
                  </h3>
                  <p className={`${cta.accentColor} text-sm font-medium mb-3`}>
                    {cta.subtitle}
                  </p>
                  <p
                    className={`${cta.textColor} text-sm mb-6 leading-relaxed opacity-90`}
                  >
                    {cta.description}
                  </p>

                  {/* Button */}
                  <Button
                    className="w-full bg-white/20 hover:bg-white/30 text-white border-0 font-semibold group-hover:bg-white group-hover:text-gray-900 transition-all duration-300"
                    size="lg"
                  >
                    {cta.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute -top-2 -left-2 w-16 h-16 bg-white/10 rounded-full blur-lg"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get in Touch
            </h3>
            <p className="text-gray-600">
              We're here to serve you the best dining experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-16 h-16 ${info.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className={`h-6 w-6 ${info.color}`} />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {info.label}
                  </h4>
                  <p className="text-gray-600">{info.value}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-12 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-5"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Happy Customers
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the authentic taste of Pakistan with our carefully
              crafted dishes made from the finest ingredients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold group"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Reserve Your Table
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-6 text-lg font-semibold bg-transparent"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
