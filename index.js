
import Head from "next/head";
import { motion } from "framer-motion";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tekton London – High-End Renovation & Development</title>
        <meta name="description" content="Luxury renovations and bespoke design by Tekton London Ltd." />
      </Head>

      <main className="bg-white text-black font-sans">
        {/* Hero Section with Background Video */}
        <section className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            src="/background.mp4"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
            <motion.h1
              className="text-5xl md:text-7xl font-bold"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Tekton London
            </motion.h1>
            <motion.p
              className="mt-4 text-xl text-gray-300 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              High-End Property Renovation & Development
            </motion.p>
          </div>
        </section>

        {/* About Section with Parallax Effect */}
        <section id="about" className="py-24 px-6 text-center bg-white text-black">
          <motion.h2
            className="text-4xl font-semibold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            We craft high-end spaces with timeless design, precision detail, and London’s top-tier workmanship. From full renovations to bespoke interiors, Tekton London leads every phase.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 bg-gray-100 text-black text-center">
          <h2 className="text-4xl font-semibold mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {["Renovation", "Joinery", "Bathrooms", "Kitchens", "Decorating", "Full Refurbishment"].map((service, i) => (
              <motion.div
                key={service}
                whileHover={{ scale: 1.05 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition-all"
              >
                <h3 className="text-xl font-semibold text-teal-700">{service}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Client Reviews Carousel (Static Version) */}
        <section id="reviews" className="py-24 px-6 bg-white text-center">
          <h2 className="text-4xl font-semibold mb-8">Client Reviews</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              "Tekton delivered our dream kitchen — ahead of schedule and with flawless detail.",
              "From start to finish, the team was professional, tidy, and highly skilled.",
              "Best investment we've made in our home. Worth every penny."
            ].map((quote, i) => (
              <motion.blockquote
                key={i}
                className="italic text-lg text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                “{quote}”
              </motion.blockquote>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 text-center bg-black text-white">
          <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
          <p>Email: iliarudaj@tektonlondon.com</p>
          <p>Phone: +44 7999 875689</p>
          <div className="flex justify-center gap-6 mt-6 text-2xl">
            <a href="https://www.instagram.com/tekton_london_ltd/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.tiktok.com/@ilia_rudaj" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
          </div>
        </section>

        <footer className="text-sm text-center text-gray-400 py-8 bg-black">
          &copy; {new Date().getFullYear()} Tekton London Ltd. All rights reserved.
        </footer>
      </main>
    </>
  );
}
