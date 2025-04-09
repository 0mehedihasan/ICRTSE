import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary-900 to-primary-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
          }}
        ></div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              4th International Congress on
              <br />
              <span className="text-primary-300">
                Recent Trends in Computer Science (ICRCS 2025)
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-secondary-200">
              April 17- 18
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfJZf22psMHzOYH2HaPWaCUIlZBiS4Lui-jxGtzsSNJCovNaA/viewform"
                target="_blank"
                className="btn btn-primary"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="animate-bounce"
          >
            <a href="#about" className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">About The Congress</h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-secondary-700 mb-6">
                4th International Congress on Recent Trends in Computer Science
                (ICRCS 2025) brings together researchers, academics, and
                industry professionals to share cutting-edge research,
                innovations, and trends in the field of computer science.
              </p>
              <p className="text-lg text-secondary-700">
                Join us for three days of keynote speeches, workshops, and
                networking opportunities that will shape the future of computer
                science research and applications.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Event Date</h3>
              </div>
              <p className="text-secondary-700">April 17- 18 , 2025</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Location</h3>
              </div>
              <p className="text-secondary-700">
                Online - Join from anywhere in the world
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Participants</h3>
              </div>
              <p className="text-secondary-700">
                Expected 500+ attendees from academia and industry
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section bg-secondary-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">Congress Highlights</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Keynote Speakers</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Distinguished speakers from leading universities and tech
                companies sharing insights on emerging technologies.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Workshops</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Interactive workshops on cutting-edge technologies and
                methodologies led by industry experts.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Panel Discussions</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Engaging discussions featuring experts debating current trends,
                challenges, and future directions in technology and research.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Innovation Showcase</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Presentations and demonstrations of groundbreaking research,
                prototypes, and technological advancements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Career Opportunities</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Insights into career paths, job market trends, and recruitment
                opportunities from top companies and research institutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="card p-6"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <Users className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold">Networking</h3>
              </div>
              <p className="text-secondary-700 mb-4">
                Opportunities to connect with researchers, academics, and
                industry professionals from around the world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Join ICRCS 2025?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-100">
              Don't miss this opportunity to be part of the leading conference
              in computer science. Register now to secure your spot!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfJZf22psMHzOYH2HaPWaCUIlZBiS4Lui-jxGtzsSNJCovNaA/viewform"
                target="_blank"
                className="btn bg-white text-primary-700 hover:bg-primary-100"
              >
                Register Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* organized by & supported by */}

      {/* Organizers & Supporters Section */}
      <section className="section bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Organizers */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                Organized By
              </h3>
              <div className="flex justify-center items-center max-w-5xl mx-auto">
                {[
                  {
                    logo: "https://ieeecsbdc.org/assets/logo-fd1b8824.png",
                  },
                ].map((org, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="group w-full max-w-md p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-primary-50"
                  >
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={org.logo}
                        alt="Organizer logo"
                        className="h-36 md:h-40 w-auto mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Supporters */}
            {
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-secondary-800 mb-10">
                  Technical Supported By
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
                  {[
                    {
                      logo: "https://i.ibb.co.com/d0vnyxmH/bubt.png",
                    },
                    {
                      logo: "https://i.ibb.co.com/fV0Dzb6h/bracu.png",
                    },
                    {
                      logo: "https://i.ibb.co.com/ZpXTQKHL/lu.jpg",
                    },
                    {
                      logo: "https://i.ibb.co.com/ywpQNJx/nsu.png",
                    },
                    {
                      logo: "https://i.ibb.co.com/8nQbF17D/uiu.png",
                    },
                    {
                      logo: "https://i.ibb.co.com/PZzVpFGB/diu.png",
                    },
                    {
                      logo: "https://i.ibb.co.com/G4rfqgVH/iit.png",
                    },
                    {
                      logo: "https://i.ibb.co.com/JwpPsNg3/jnu.jpg",
                    },
                    {
                      logo: "https://i.ibb.co.com/wh1szjXn/premier.png",
                    },
                  ].map((partner, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group w-full p-6 bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300"
                    >
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                          src={partner.logo}
                          alt="Supporter logo"
                          className="h-32 w-auto mx-auto object-contain transition-all duration-300 transform group-hover:scale-105"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            }
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
