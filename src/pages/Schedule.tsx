import { motion } from "framer-motion";
import { useState } from "react";

const scheduleData = {
  day1: [
    {
      image: "/speakers/zahidul.jpg",
      speaker: "Dr. Md Zahidul Islam",
      localTime: "09:20 PM - 09:35 PM",
      utcTime: "03:20 PM - 03:35 PM",
      duration: "15 minutes",
      topic: "Recent Trends in Intelligent Manufacturing",
    },
    {
      image: "/speakers/nasrin.jpeg",
      speaker: "Dr. Nasrin Sultana",
      localTime: "09:35 PM - 09:50 PM",
      utcTime: "03:35 PM - 03:50 PM",
      duration: "15 minutes",
      topic:
        "Ultrafast Lasers in the AI Era: Advancements and Future Prospects",
    },
    {
      image: "/speakers/israt.jpg",
      speaker: "Israt Jahan Khan Chowdhury",
      localTime: "09:50 PM - 10:10 PM",
      utcTime: "03:50 PM - 04:10 PM",
      duration: "20 minutes",
      topic:
        "Transforming Infectious Disease Research Using High-Content Imaging",
    },
    {
      image: "/speakers/SAOOD-CH.png",
      speaker: "Muhammad Saood Choudhary",
      localTime: "10:10 PM - 10:25 PM",
      utcTime: "04:10 PM - 04:25 PM",
      duration: "15 minutes",
      topic:
        "How IEEE Xtreme is Shaping the Next Generation of Young Professional Leaders in Computer Science",
    },
    {
      image: "/speakers/Dewmini.jpg",
      speaker: "Dewmini Rathnayake",
      localTime: "10:25 PM - 10:40 PM",
      utcTime: "04:25 PM - 04:40 PM",
      duration: "15 minutes",
      topic: "Quantum Computing: Transforming the Future of Technology",
    },
    {
      image: "/speakers/patil.jpeg",
      speaker: "Dr Shashikant Patil",
      localTime: "10:40 PM - 10:55 PM",
      utcTime: "04:40 PM - 04:55 PM",
      duration: "15 minutes",
      topic: "Large Quantitative Models and Industry Applications",
    },
    {
      image: "/speakers/nour.jpeg",
      speaker: "Nour Challouf",
      localTime: "10:55 PM - 11:10 PM",
      utcTime: "04:55 PM - 05:10 PM",
      duration: "15 minutes",
      topic: "Embedded systems in robotics and automation",
    },
  ],
  day2: [
    {
      image: "/speakers/obaidur.jpg",
      speaker: "Dr. Md. Obaidur Rahman",
      localTime: "08:40 PM - 09:00 PM",
      utcTime: "02:40 PM - 03:00 PM",
      duration: "20 minutes",
      topic:
        "Social Engineering and Ethical Hacking in the Context of Cyber Security Threats",
    },
    {
      image: "/speakers/samar.jpg",
      speaker: "Samar Algheetany",
      localTime: "09:00 PM - 09:15 PM",
      utcTime: "03:00 PM - 03:15 PM",
      duration: "15 minutes",
      topic:
        "The Role of AI in Sustainable Engineering & Procurement: Bridging Technology and Efficiency",
    },
    {
      image: "https://i.ibb.co/h2Z9c3q/azharul.jpg",
      speaker: "Dr. K. M. Azharul Hasan",
      localTime: "09:15 PM - 09:30 PM",
      utcTime: "03:15 PM - 03:30 PM",
      duration: "15 minutes",
      topic:
        "An Automated Two-Level Secure Data Hiding Algorithm for Video Steganography",
    },
    {
      image: "https://i.ibb.co/XpcPmtw/masum.png",
      speaker: "Dr. Md. Maruf Hassan, CISA, CEH, CEI, CHFI",
      localTime: "09:30 PM - 09:50 PM",
      utcTime: "03:30 PM - 03:50 PM",
      duration: "20 minutes",
      topic:
        "An Automated Two-Level Secure Data Hiding Algorithm for Video Steganography",
    },
    {
      image: "/speakers/sarefin.jpeg",
      speaker: "Dr. Mohammad Shamsul Arefin",
      localTime: "09:50 PM - 10:10 PM",
      utcTime: "03:50 PM - 04:10 PM",
      duration: "20 minutes",
      topic:
        "Privacy-Preserving and Energy-Efficient Federated Learning at the Edge",
    },
    {
      image: "/speakers/Alaa.jpg",
      speaker: "Alaa El- Rahman",
      localTime: "10:10 PM - 10:30 PM",
      utcTime: "04:10 PM - 04:30 PM",
      duration: "20 minutes",
      topic:
        "AI and data science in medical research and medical applications trends",
    },
    {
      image: "/speakers/ranim.jpeg",
      speaker: "Ranim Damak",
      localTime: "10:30 PM - 10:50 PM",
      utcTime: "04:30 PM - 04:50 PM",
      duration: "20 minutes",
      topic:
        "IEEE Computer Society: Opportunities, Programs, and Membership Benefits",
    },
    {
      image: "/speakers/eya.jpeg",
      speaker: "Eya Karmous",
      localTime: "10:50 PM - 11:10 PM",
      utcTime: "04:50 PM - 05:10 PM",
      duration: "20 minutes",
      topic: "Evolution of Cybersecurity in Contemporary Computer Science",
    },
  ],
};
export default function Schedule() {
  const [activeTab, setActiveTab] = useState("day1");
  return (
    <div className="pt-20">
      <section className="bg-primary-700 py-16 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">
              Program Schedule
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Check out the schedule for ICRCS 2025 below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Time zone info */}
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <p className="text-center text-blue-800">
          <span className="font-semibold">Local Time:</span> Bangladesh (UTC+6)
          |<span className="font-semibold ml-2">International Time:</span> UTC
        </p>
      </div>

      <section className="max-w-6xl mx-auto py-6">
        <div className="flex mb-6 border-b">
          <button
            className={`py-2 px-6 font-medium ${activeTab === "day1" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("day1")}
          >
            Day 1 (17 April 2025)
          </button>
          <button
            className={`py-2 px-6 font-medium ${activeTab === "day2" ? "text-indigo-600 border-b-2 border-indigo-600" : "text-gray-500"}`}
            onClick={() => setActiveTab("day2")}
          >
            Day 2 (18 April 2025)
          </button>
        </div>

        <div className="container mx-auto px-4 overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">Speaker</th>

                <th className="px-4 py-2">Topic</th>
                <th className="px-4 py-2">BD Time</th>
                <th className="px-4 py-2">UTC Time</th>
                <th className="px-4 py-2">Duration</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData[activeTab as keyof typeof scheduleData].map(
                (session, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="border-b hover:bg-gray-50"
                  >
                    <td className="px-4 py-2">
                      {session?.speaker || "To be announced"}
                    </td>
                    <td className="px-4 py-2">
                      {session?.topic || "To be announced"}
                    </td>
                    <td className="px-4 py-2">{session.localTime}</td>
                    <td className="px-4 py-2">{session.utcTime}</td>
                    <td className="px-4 py-2">{session.duration}</td>
                  </motion.tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
