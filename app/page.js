"use client"
import { motion, useScroll, useTransform } from 'framer-motion'
import Layout from '@/components/Layout'
import { TbApi } from 'react-icons/tb'
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3, FaJs, FaGit, FaGithub, FaCode } from 'react-icons/fa'
import { SiNextdotjs, SiExpress, SiTailwindcss, SiMongodb, SiCplusplus, SiRedux } from 'react-icons/si'
import { useState } from 'react'

// ... (keep your projects and skills data same)
const projects = [
    {
    image: "chattify.png",
    title: "Chattify",
    link: "https://chatweb-bt11.onrender.com",
    description: "realtime chatapp with voice and video calls"
  },
  {
    image: "voiceTOtext.png",
    title: "SpeakEasy 2.0",
    link: "https://voice-t-otext-notes.vercel.app/",
    description: "Voice to text notes converter"
  },
  {

    image: "blog.png",
    title: "ShyamBlog",
    link: "https://shyamblog-net.vercel.app",
    description: "A personal blogging website"

  },
  {
    image: "ecomclient.png",
    title: "IITSKiLLMART",
    link: "https://soft-world-client-shyams-projects-623c4087.vercel.app/",
    description: "E-commerce platform"
  },
  {
    image: "admin.png",
    title: "IITSKiLLMART admin",
    link: "https://ecomm-admin-orpin.vercel.app",
    description: "Admin dashboard for e-commerce platform"
  },
  {
    image: "https://shyam-world-trade.s3.eu-north-1.amazonaws.com/1742452644875.png",
    title: "PassSG",
    link: "https://password-manager-five-ivory.vercel.app/",
    description: "Secure password manager application"
  },
  {
    image: "link.png",
    title: "SMGLink",
    link: "https://url-shortner-omega-seven.vercel.app/",
    description: "URL shortener and analytics dashboard"
  },
  {
    image: "https://shyam-world-trade.s3.eu-north-1.amazonaws.com/1742749360219.png",
    title: "TODO",
    link: "https://todolist-mlnzsbjhy-shyams-projects-623c4087.vercel.app/",
    description: "Simple todo list application"
  },
  {
    image: "https://shyam-world-trade.s3.eu-north-1.amazonaws.com/1742749641662.png",
    title: "TIC TAC TOE",
    link: "https://tictactoe-five-ruby.vercel.app/",
    description: "Simple tic tac toe game"
  },
]

const skills = [
  // Core Frontend
  { name: "HTML5", icon: FaHtml5, x: 15, y: 15 },
  { name: "CSS3", icon: FaCss3, x: 15, y: 30 },
  { name: "JavaScript", icon: FaJs, x: 15, y: 45 },
  { name: "ES6/ES5", icon: FaJs, x: 15, y: 60 },

  // React Ecosystem
  { name: "React", icon: FaReact, x: 30, y: 20 },
  { name: "Next.js", icon: SiNextdotjs, x: 30, y: 40 },
  { name: "Redux", icon: SiRedux, x: 30, y: 60 },

  // Backend
  { name: "Node.js", icon: FaNodeJs, x: 50, y: 25 },
  { name: "Express.js", icon: SiExpress, x: 50, y: 45 },

  // Database
  { name: "MongoDB", icon: SiMongodb, x: 70, y: 35 },

  // Styling
  { name: "Tailwind CSS", icon: SiTailwindcss, x: 70, y: 55 },

  // Programming
  { name: "Python", icon: FaPython, x: 85, y: 20 },
  { name: "C", icon: SiCplusplus, x: 85, y: 40 },
  { name: "C++", icon: SiCplusplus, x: 85, y: 60 },

  // Tools
  { name: "Git", icon: FaGit, x: 50, y: 75 },
  { name: "GitHub", icon: FaGithub, x: 65, y: 75 },

  // Concepts
  { name: "DSA", icon: FaCode, x: 15, y: 75 },
  { name: "API Integration", icon: TbApi, x: 30, y: 75 },
  { name: "Responsive UI", icon: FaCss3, x: 85, y: 75 }
];

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.2, 1])
  const [activeProject, setActiveProject] = useState(null)

  // ... keep your existing handlers and state

  const handlechange = (e) => {
    if (e.target.name === 'Name') {
      setName(e.target.value)
    } else if (e.target.name === 'Email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'Message') {
      setMessage(e.target.value)
    }
  }
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Name, Email, Message })
      })
      const data = await res.json()
      console.log(data)
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      console.error('Error sending contact:', error)
    }
  }

    const handleProjectClick = (project) => {
  // Example: navigate, open modal, or log
  window.open(project.link, '_blank');
}

  return (
    <Layout>
      {/* Animated Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 z-50"
        style={{ scaleX }}
      />

      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat [mask-image:linear-gradient(180deg,white,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/10 to-cyan-400/10" />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center px-4 overflow-hidden">
        <div className="container mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="inline-block mb-8 relative"
            >
              <div className="absolute inset-0 bg-emerald-400/20 blur-3xl rounded-full" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent relative">
                Shyam Ghosh
              </h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-3xl text-gray-400 mb-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              I&apos;m a software developer with a passion for building web applications
            </motion.p>

           
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="backdrop-blur-xl rounded-[2rem] p-8 border border-emerald-400/20"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative overflow-hidden rounded-2xl"
                >
                  <div className="inset-0 bg-gradient-to-t from-gray-900/90 via-transparent z-10" />
                  <img
                    src={project.image}
                    width={600}
                    height={400}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300">{project.description}</p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/80 transition-opacity">
                    <button
                      className="px-8 py-3 bg-emerald-400/10 border border-emerald-400/20 rounded-full backdrop-blur-lg hover:bg-emerald-400/20 transition-colors"
                      onClick={() => handleProjectClick(project)}
                    >
                      Explore Project
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* Skills Section */}
      <section className="min-h-screen relative py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="backdrop-blur-xl rounded-[2rem] p-8"
          >
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Arsenal
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 bg-gray-900/50 rounded-2xl border border-emerald-400/20 hover:border-emerald-400/40 transition-colors group"
                >
                  <div className="flex flex-col items-center">
                    <skill.icon className="w-12 h-12 mb-4 text-emerald-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="text-sm font-medium text-center">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen relative py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="backdrop-blur-xl rounded-[2rem] p-8 border border-emerald-400/20"
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              CONNECT TO ME
            </h2>

            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  onChange={handlechange}
                  name='Name'
                  value={Name}
                  className="w-full bg-gray-950/50 border border-emerald-400/20 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <input
                  type="email"
                  onChange={handlechange}
                  name='Email'
                  value={Email}
                  placeholder="Your Email"
                  className="w-full bg-gray-950/50 border border-emerald-400/20 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <textarea
                  rows="5"
                  onChange={handlechange}
                  name='Message'
                  value={Message}
                  placeholder="Your Message"
                  className="w-full bg-gray-950/50 border border-emerald-400/20 rounded-xl p-4 focus:outline-none focus:border-emerald-400 transition-colors"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="flex justify-center"
              >
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-12 py-4 bg-emerald-400/10 border border-emerald-400/20 rounded-full backdrop-blur-lg hover:bg-emerald-400/20 transition-colors font-bold flex items-center gap-3"
                >
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    Send Message
                  </span>
                  <i className="fa-solid fa-arrow-right text-emerald-400" />
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
}
