import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, MenuIcon, Play } from "lucide-react"
import { useState, useEffect } from "react"

const HeroSection =()=> {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const foodImages = [
    "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=1920&h=1080&fit=crop&crop=center", // Biryani
    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&h=1080&fit=crop&crop=center", // Curry
    "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=1920&h=1080&fit=crop&crop=center", // Kebabs
    "https://images.unsplash.com/photo-1574653853027-5d3ac9b9f7c7?w=1920&h=1080&fit=crop&crop=center", // Pakistani food
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === foodImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [foodImages.length])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const phoneVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {foodImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

      {/* Colorful Accent Overlays */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-600/20 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-600/20 to-transparent"></div>

      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 px-4 py-2 text-sm font-medium">
                ⭐ #1 Pakistani Restaurant
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-4">
              <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" variants={itemVariants}>
                <span className="text-white">Authentic Flavors,</span>
                <br />
                <motion.span
                  className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Exceptional Dining
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p variants={itemVariants} className="text-gray-200 text-lg md:text-xl max-w-lg leading-relaxed">
              Experience the finest culinary creations made with locally-sourced ingredients and passion. From
              traditional biryani to modern fusion dishes.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg font-semibold group shadow-xl"
              >
                <MenuIcon className="mr-2 h-5 w-5" />
                View Menu
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-6 text-lg font-semibold shadow-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Make Reservation
              </Button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  500+
                </div>
                <div className="text-gray-300 text-sm">Happy Customers</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  50+
                </div>
                <div className="text-gray-300 text-sm">Menu Items</div>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur rounded-xl border border-white/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  5★
                </div>
                <div className="text-gray-300 text-sm">Rating</div>
              </div>
            </motion.div>

            {/* Video Play Button */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3 backdrop-blur bg-transparent"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Our Story
              </Button>
              <div className="text-gray-300 text-sm">
                <p>See how we prepare</p>
                <p className="text-green-400 font-semibold">authentic dishes</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Phone Mockups */}
          <motion.div className="relative h-[600px] lg:h-[700px]" initial="hidden" animate="visible">
            {/* Phone 1 - Center with gradient */}
            <motion.div variants={phoneVariants} className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30">
              <div className="w-64 h-[500px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[2.5rem] p-2 shadow-2xl ring-4 ring-green-400/20">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-green-50 to-white p-4">
                    <div className="text-center mb-4">
                      <h3 className="font-bold text-lg text-green-800">Today's Special</h3>
                    </div>
                    <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-lg p-4 mb-4">
                      <div className="w-full h-32 bg-gradient-to-br from-orange-300 to-red-400 rounded-lg mb-3"></div>
                      <h4 className="font-semibold text-green-800">Chicken Biryani</h4>
                      <p className="text-sm text-green-600">Aromatic basmati rice with spices</p>
                      <p className="text-green-700 font-bold mt-2">$18.99</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-lg p-4">
                      <div className="w-full h-32 bg-gradient-to-br from-green-300 to-lime-400 rounded-lg mb-3"></div>
                      <h4 className="font-semibold text-blue-800">Seekh Kebab</h4>
                      <p className="text-sm text-blue-600">Grilled minced meat skewers</p>
                      <p className="text-blue-700 font-bold mt-2">$14.99</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone 2 - Left with blue theme */}
            <motion.div
              variants={{
                ...phoneVariants,
                visible: {
                  ...phoneVariants.visible,
                  transition: {
                    ...phoneVariants.visible.transition,
                    delay: 0.7,
                  },
                },
              }}
              className="absolute top-20 left-0 z-20 transform rotate-12"
            >
              <div className="w-56 h-[420px] bg-gradient-to-b from-blue-900 to-blue-800 rounded-[2rem] p-2 shadow-xl ring-4 ring-blue-400/20">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-blue-50 to-white p-3">
                    <div className="text-center mb-3">
                      <h3 className="font-bold text-blue-800">Popular Menu</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow p-3">
                        <div className="w-full h-20 bg-gradient-to-br from-red-300 to-orange-400 rounded mb-2"></div>
                        <h4 className="font-semibold text-sm text-blue-800">Karahi Chicken</h4>
                        <p className="text-blue-600 font-bold text-sm">$16.99</p>
                      </div>
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow p-3">
                        <div className="w-full h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded mb-2"></div>
                        <h4 className="font-semibold text-sm text-purple-800">Naan Bread</h4>
                        <p className="text-purple-600 font-bold text-sm">$3.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Phone 3 - Right with purple theme */}
            <motion.div
              variants={{
                ...phoneVariants,
                visible: {
                  ...phoneVariants.visible,
                  transition: {
                    ...phoneVariants.visible.transition,
                    delay: 0.9,
                  },
                },
              }}
              className="absolute top-32 right-0 z-20 transform -rotate-12"
            >
              <div className="w-56 h-[420px] bg-gradient-to-b from-purple-900 to-purple-800 rounded-[2rem] p-2 shadow-xl ring-4 ring-purple-400/20">
                <div className="w-full h-full bg-white rounded-[1.5rem] overflow-hidden">
                  <div className="h-full bg-gradient-to-b from-purple-50 to-white p-3">
                    <div className="text-center mb-3">
                      <h3 className="font-bold text-purple-800">Customer Reviews</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow p-3">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mr-2"></div>
                          <div>
                            <p className="font-semibold text-sm text-purple-800">Ahmed K.</p>
                            <p className="text-yellow-500 text-xs">★★★★★</p>
                          </div>
                        </div>
                        <p className="text-xs text-purple-600">Best biryani in town!</p>
                      </div>
                      <div className="bg-gradient-to-r from-pink-100 to-red-100 rounded-lg shadow p-3">
                        <div className="flex items-center mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2"></div>
                          <div>
                            <p className="font-semibold text-sm text-pink-800">Fatima S.</p>
                            <p className="text-yellow-500 text-xs">★★★★★</p>
                          </div>
                        </div>
                        <p className="text-xs text-pink-600">Authentic flavors!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Floating Elements */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-20 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-30 z-10 blur-sm"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-20 left-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-30 z-10 blur-sm"
            ></motion.div>

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute top-1/2 left-5 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-25 z-10 blur-sm"
            ></motion.div>
          </motion.div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-30">
        {foodImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 w-8 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-gradient-to-r from-green-400 to-blue-400"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
    </section>
  )
}

export default HeroSection