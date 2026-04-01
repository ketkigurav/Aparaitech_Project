import React, { useEffect } from 'react';
import ChatBot from "../components/ChatBot";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import {
  Users, Rocket, BookOpen, Globe,
  Award, TrendingUp, Heart, Zap,
  MessageSquare, UserCheck, FileCheck, Star
} from 'lucide-react';

const HomePage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const stats = [
    { icon: <Award />, value: '98%', label: 'Satisfaction' },
    { icon: <TrendingUp />, value: '40%', label: 'Growth' },
    { icon: <Heart />, value: '4.8/5', label: 'Rating' },
    { icon: <Users />, value: '2+', label: 'Cities' }
  ];

  const culture = [
    { icon: <Users />, title: 'Collaboration' },
    { icon: <BookOpen />, title: 'Learning' },
    { icon: <Globe />, title: 'Flexible Work' },
    { icon: <Rocket />, title: 'Innovation' }
  ];

  const hiring = [
    { step: 1, title: "Apply", icon: <FileCheck /> },
    { step: 2, title: "HR Round", icon: <MessageSquare /> },
    { step: 3, title: "Technical", icon: <Zap /> },
    { step: 4, title: "Team Round", icon: <Users /> },
    { step: 5, title: "Offer", icon: <UserCheck /> },
  ];

  const testimonials = [
    { name: "Ananya", role: "Frontend", text: "Amazing culture!", rating: 5 },
    { name: "Sneha", role: "Manager", text: "Fast learning!", rating: 5 },
    { name: "Karan", role: "Backend", text: "Great mentorship!", rating: 5 },
  ];

  // 🎨 Aesthetic Card Component
  const Card = ({ children }) => (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-xl transform transition duration-300 group-hover:-translate-y-2 group-hover:scale-105">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HERO */}
      <section className="text-center py-24 bg-gradient-to-br from-slate-900 to-indigo-900">
        <h1 className="text-5xl font-bold mb-6">
          Build Your Future at{" "}
          <span className="text-blue-400">
            <Typewriter words={["Aparaitech", "Innovation", "Success"]} loop />
          </span>
        </h1>

        <p className="mb-8 text-gray-300">
          Work on real-world projects with top engineers
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/positions" className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition">
            Explore Jobs
          </Link>
          <Link to="/apply" className="px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10">
            Apply Now
          </Link>
        </div>

        <div className="mt-10 inline-block px-6 py-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20">
          🚀 100+ hires this year
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Card key={i}>
              <div className="text-blue-400 mb-2">{s.icon}</div>
              <h2 className="text-2xl font-bold">{s.value}</h2>
              <p className="text-gray-300">{s.label}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Join Us</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {culture.map((c, i) => (
            <Card key={i}>
              <div className="text-purple-400 mb-2">{c.icon}</div>
              <h3 className="font-semibold">{c.title}</h3>
            </Card>
          ))}
        </div>
      </section>

      {/* HIRING */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Hiring Process</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {hiring.map((h) => (
            <Card key={h.step}>
              <div className="text-indigo-400 mb-2">{h.icon}</div>
              <h4 className="font-semibold">{h.title}</h4>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <p className="text-gray-300 mb-4">"{t.text}"</p>
              <h4 className="font-bold">{t.name}</h4>
              <p className="text-sm text-gray-400">{t.role}</p>
              <div className="flex mt-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-blue-900 to-indigo-900">
        <h2 className="text-3xl font-bold mb-6">Start Your Journey</h2>
        <Link
          to="/apply"
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition"
        >
          Apply Now 🚀
        </Link>
      </section>
     <ChatBot />
    </div>
  );
};

export default HomePage;