
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tekton London – High-End Renovation & Development</title>
        <meta name="description" content="Luxury renovations, bespoke joinery and construction by Tekton London Ltd." />
      </Head>

      <main className="bg-black text-white font-sans">
        {/* Hero with background video */}
        <section className="relative h-screen w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full object-cover"
            src="/background.mp4"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-7xl font-bold"
            >
              Tekton London
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-4 text-xl text-gray-300 max-w-xl"
            >
              High-End Property Renovation & Development
            </motion.p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-6 text-center bg-white text-black">
          <h2 className="text-4xl font-semibold mb-4">About Us</h2>
          <p className="text-lg max-w-2xl mx-auto text-gray-700">
            At Tekton London, we blend timeless craftsmanship with futuristic minimalism to deliver luxury renovation projects across prime locations in London.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 px-6 text-center bg-gray-100 text-black">
          <h2 className="text-4xl font-semibold mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {["Renovation", "Bespoke Joinery", "Bathrooms", "Kitchens", "Decorating", "Refurbishment"].map(service => (
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                key={service}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
              >
                <h3 className="text-xl font-medium text-teal-700">{service}</h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 text-center bg-black text-white">
          <h2 className="text-4xl font-semibold mb-6">Get in Touch</h2>
          <p className="text-gray-400">Email: iliarudaj@tektonlondon.com</p>
          <p className="text-gray-400">Phone: +44 7999 875689</p>
        </section>

        <footer className="py-8 text-center text-sm text-gray-500 bg-black">
          &copy; {new Date().getFullYear()} Tekton London Ltd. All rights reserved.
        </footer>
      </main>
    </>
  );
}
