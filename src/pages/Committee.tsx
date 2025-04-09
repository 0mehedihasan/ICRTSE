import React from "react";
import { motion } from "framer-motion";
import tabil from "../../assets/tabile-ahmed.webp";
import sazzad from "../../assets/sazzad-chow.jpg";
import rasedul from "../../assets/Rasedul_.webp";
import sadman from "../../assets/Sadman Shakib_Secretariat.webp";
import sakib from "../../assets/sakib.png";
import abuSaeed from "../../assets/abu-saeed.jpg";

interface CommitteeMember {
  name: string;
  role: string;
  affiliation?: string;
  image: string;
}

const Committee: React.FC = () => {
  const committeeMembers: Record<string, CommitteeMember[]> = {
    "Advisory Panel": [
      {
        name: "Dr. M Sohel Rahman",
        role: "Chair 2022, IEEE CS BDC",

        image: "https://ieeecsbdc.org/assets/2-2e10814f.jpg",
      },
      {
        name: "Dr. Mohammad Shamsul Arefin",
        role: "Chair 2023, IEEE CS BDC",

        image: "https://ieeecsbdc.org/assets/1-ea34e7c0.png",
      },
      {
        name: "Dr. Md. Ahsan Habib",
        role: "Chair 2024, IEEE CS BDC",

        image: "https://ieeecsbdc.org/assets/4-f518aba6.png",
      },
      {
        name: "Dr. K. M. Azharul Hasan",
        role: "Chair 2025, IEEE CS BDC",
        image: "https://i.ibb.co/h2Z9c3q/azharul.jpg",
      },
      {
        name: "Dr. Md. Obaidur Rahman",
        role: "Chair Elect 2025, IEEE CS BDC",

        image: "https://i.ibb.co/19557NN/obaidur.jpg",
      },
    ],
    "General Chairs": [
      {
        name: "Md. Tabil Ahammed",
        role: "General Chair",

        image: tabil,
      },
      {
        name: "Md. Moynul Islam",
        role: "General Co-Chair",
        affiliation: "Institute of Computer Science",
        image: "https://i.ibb.co/6BWx1RH/moynul.png",
      },
    ],
    "Organizing Committee": [
      {
        name: "Shrabani Das",
        role: "Organizing Chair",
        affiliation: "National University",
        image: "https://i.ibb.co/ZYbkQhy/Shrabani-Das-Shrabani-Das.jpg",
      },
      {
        name: "Rashedul Arefin Ifty",
        role: "Organizing Chair",
        affiliation: "Tech University",
        image: "https://i.ibb.co/gvgpDmT/Rashedul-Arefin-Ifty.png",
      },
      {
        name: "Md Mehedi Hasan",
        role: "Organizing Co-Chair",
        affiliation: "Research Institute",
        image: "https://i.ibb.co/1sq7X8s/IMG-20240128-073552-Md-Mehedi.jpg",
      },
      {
        name: "Mohammad Shahin Shah",
        role: "Organizing Co-Chair",
        affiliation: "Global University",
        image: "https://ieeecsbdc.org/assets/shahin-cde7fba8.jpg",
      },
      {
        name: "Md. Abu Saeed",
        role: "Organizing Secretary",
        affiliation: "Computer Science Department",
        image: abuSaeed,
      },
    ],
    "Ambassador Committee": [
      {
        name: "Sadman Shakib",
        role: "Ambassador Chair",
        affiliation: "BRAC University",
        image: sadman,
      },
      {
        name: "Meherun Nesa Jerin",
        role: "Ambassador Co-Chair",
        affiliation: "Digital University",
        image: "https://i.ibb.co/fC79pkY/Jannatul-Nesa-Jemi.jpg",
      },
    ],
    "Registration Committee": [
      {
        name: "Md. Rasedul Islam",
        role: "Registration Chair",
        affiliation: "Student Affairs Committee",
        image: rasedul,
      },
      {
        name: "Sazzad Hossen Chowdhury",
        role: "Registration Co-Chair",
        affiliation: "Student Affairs Committee",
        image: sazzad,
      },
    ],

    "Web and Design Committee": [
      {
        name: "Emdadul Islam",
        role: "Web Chair",

        image: "https://i.ibb.co/TYP3WjF/Emdadul-Islam.jpg",
      },
      {
        name: "Nowshine Sharmili Piuli",
        role: "Design Chair",
        affiliation: "Creative Department",
        image: "https://i.ibb.co/mzXZPX9/Tajniya-Nowshin-Ome.png",
      },
      {
        name: "Tajniya Nowshin Ome",
        role: "Design Co-Chair",
        affiliation: "Web Development Team",
        image: "https://i.ibb.co/mzXZPX9/Tajniya-Nowshin-Ome.png",
      },
    ],
    "Publication and Publicity Committee": [
      {
        name: "Afif Hossain Irfan",
        role: "Publication Chair",
        affiliation: "Global Science Media",
        image: "https://i.ibb.co/80RVZJB/Afif-Hossain-Irfan.png",
      },
      {
        name: "Md. Sakibul Islam",
        role: "Publicity Chair",
        affiliation: "Communications Department",
        image: sakib,
      },
    ],
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-700 py-16 text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">
              Organizing Committee
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-primary-100">
              Meet the dedicated team of professionals working behind the scenes
              to make ICRCS 2025 a success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="section bg-white py-16">
        <div className="container">
          {Object.entries(committeeMembers).map(([category, members]) => (
            <div key={category} className="mb-24 last:mb-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-12 text-center after:content-[''] after:block after:w-24 after:h-1 after:bg-primary-500 after:mx-auto after:mt-4"
              >
                {category}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {members.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
                    }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex flex-col items-center">
                        <div className="w-40 h-40 rounded-full overflow-hidden mb-6 ring-4 ring-primary-100 shadow-lg">
                          <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover object-top transition-transform hover:scale-105 duration-300"
                          />
                        </div>
                        <div className="text-center mt-2">
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            {member.name}
                          </h3>
                          <div className="inline-block bg-primary-50 text-primary-700 px-4 py-1.5 rounded-full text-sm font-medium mb-3">
                            {member.role}
                          </div>
                          {/* {member.affiliation && (
                            <p className="text-gray-600 text-sm">
                              {member.affiliation}
                            </p>
                          )} */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;
