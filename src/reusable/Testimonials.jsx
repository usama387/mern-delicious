import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Hassan",
      location: "Karachi",
      rating: 5,
      text: "The biryani here is absolutely incredible! It reminds me of my grandmother's cooking. The flavors are authentic and the portion sizes are generous. Highly recommended!",
      avatar: "/placeholder.svg?height=60&width=60",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
      textColor: "text-blue-50",
      accentColor: "text-blue-200",
    },
    {
      id: 2,
      name: "Fatima Khan",
      location: "Lahore",
      rating: 5,
      text: "Outstanding service and delicious food! The karahi was perfectly spiced and the naan was fresh and warm. This place has become our family's favorite restaurant.",
      avatar: "/placeholder.svg?height=60&width=60",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-700",
      textColor: "text-purple-50",
      accentColor: "text-purple-200",
    },
    {
      id: 3,
      name: "Muhammad Ali",
      location: "Islamabad",
      rating: 5,
      text: "Exceptional dining experience! The ambiance is perfect for family gatherings and the food quality is top-notch. The seekh kebabs were juicy and flavorful.",
      avatar: "/placeholder.svg?height=60&width=60",
      bgColor: "bg-gradient-to-br from-green-500 to-green-700",
      textColor: "text-green-50",
      accentColor: "text-green-200",
    },
    {
      id: 4,
      name: "Ayesha Malik",
      location: "Faisalabad",
      rating: 5,
      text: "The best Pakistani cuisine in town! Every dish is prepared with love and attention to detail. The haleem was rich and creamy, just like homemade.",
      avatar: "/placeholder.svg?height=60&width=60",
      bgColor: "bg-gradient-to-br from-orange-500 to-orange-700",
      textColor: "text-orange-50",
      accentColor: "text-orange-200",
    },
    {
      id: 5,
      name: "Usman Sheikh",
      location: "Peshawar",
      rating: 5,
      text: "Amazing food and wonderful hospitality! The chapli kebab was authentic and reminded me of home. The staff is very friendly and accommodating.",
      avatar: "/placeholder.svg?height=60&width=60",
      bgColor: "bg-gradient-to-br from-red-500 to-red-700",
      textColor: "text-red-50",
      accentColor: "text-red-200",
    },
    {
      id: 6,
      name: "Zainab Ahmed",
      location: "Multan",
      rating: 5,
      text: "Incredible flavors and presentation! The chicken tikka was perfectly marinated and grilled. This restaurant truly captures the essence of Pakistani cuisine.",
      avatar: "/placeholder.svg?height=60&width=60",
      bgColor: "bg-gradient-to-br from-teal-500 to-teal-700",
      textColor: "text-teal-50",
      accentColor: "text-teal-200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 px-4 py-2 text-sm font-medium"
          >
            Customer Reviews
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers
            have to say about their dining experience.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card
            className={`${
              currentTestimonial.bgColor
            } border-0 shadow-2xl transition-all duration-500 ${
              isAnimating ? "scale-95 opacity-70" : "scale-100 opacity-100"
            }`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <Quote
                    className={`h-16 w-16 ${currentTestimonial.accentColor} opacity-50`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <blockquote
                    className={`text-xl md:text-2xl font-medium ${currentTestimonial.textColor} mb-6 leading-relaxed`}
                  >
                    "{currentTestimonial.text}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <Avatar className="h-16 w-16 border-4 border-white/20">
                      <AvatarImage
                        src={currentTestimonial.avatar || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                      />
                      <AvatarFallback className="bg-white/20 text-white font-bold text-lg">
                        {currentTestimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="text-center md:text-left">
                      <h4
                        className={`text-xl font-bold ${currentTestimonial.textColor}`}
                      >
                        {currentTestimonial.name}
                      </h4>
                      <p className={`${currentTestimonial.accentColor} mb-2`}>
                        {currentTestimonial.location}
                      </p>
                      <div className="flex justify-center md:justify-start gap-1">
                        {renderStars(currentTestimonial.rating)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-green-500 w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-gray-200 text-gray-700 font-semibold">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h5 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {renderStars(testimonial.rating)}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {testimonial.text.substring(0, 120)}...
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Join hundreds of satisfied customers and experience authentic
            Pakistani cuisine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Make a Reservation
            </button>
            <button className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              View Our Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
