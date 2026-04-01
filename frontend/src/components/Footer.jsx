import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin, Instagram, Youtube } from 'lucide-react';
import ALogo from "../assets/ALogo.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white mt-auto">
            <div className="section-padding py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div className="hover:scale-105 transition duration-300">
                        <Link to="/" className="flex items-center space-x-2 mb-6">
                            <img src={ALogo} alt="Logo" className="h-10" />
                            <span className="text-2xl font-bold text-blue-400">Aparaitech</span>
                        </Link>
                        <p className="text-gray-400">
                            Building enterprise software solutions with cutting-edge technology.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
                            <li><Link to="/positions" className="hover:text-blue-400 transition">Open Positions</Link></li>
                            <li><Link to="/apply" className="hover:text-blue-400 transition">Apply Now</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <MapPin />
                                <span>Mukti Complex, Baramati</span>
                            </li>

                            <li className="flex items-center space-x-2">
                                <Mail />
                                <a href="mailto:ketkigurav146@gmail.com" className="hover:text-blue-400 transition">
                                    ketkigurav146@gmail.com
                                </a>
                            </li>

                            <li className="flex items-center space-x-2">
                                <Phone />
                                <span>+91 9146958160</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map + Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-400">Location</h3>

                        {/* Google Map */}
                        <iframe
                            src="https://www.google.com/maps?q=Baramati&output=embed"
                            width="100%"
                            height="150"
                            className="rounded-lg mb-4 border-0"
                            loading="lazy"
                        ></iframe>

                        {/* Social Icons */}
                        <div className="flex space-x-4 mt-3">
                            <a href="#" className="hover:scale-110 transition">
                                <Linkedin />
                            </a>
                            <a href="#" className="hover:scale-110 transition">
                                <Instagram />
                            </a>
                            <a href="#" className="hover:scale-110 transition">
                                <Youtube />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    © {currentYear} Aparaitech. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;