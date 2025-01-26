import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-black">
            <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 flex flex-col sm:flex-row items-center">
                {/* Social Media Icons */}
                <div className="icons flex gap-3 mb-6 sm:mb-0">
                    <Instagram />
                    <Facebook />
                    <Twitter />
                    <Youtube />
                    <Linkedin />
                </div>

                {/* UI Section */}
                <div className="ui mb-6 sm:mb-0">
                    <ul className="flex flex-col gap-2 text-center sm:text-left">
                        <li>UI Designing</li>
                        <li>UX Designing</li>
                        <li>Wireframing</li>
                        <li>Diagramming</li>
                        <li>BrainStorming</li>
                        <li>Online Whiteboard</li>
                        <li>Team Collaboration</li>
                    </ul>
                </div>

                {/* Explore Section */}
                <div className="explore mb-6 sm:mb-0">
                    <ul className="flex flex-col gap-2 text-center sm:text-left">
                        <li>Designing</li>
                        <li>Prototyping</li>
                        <li>Development Features</li>
                        <li>Design Systems</li>
                        <li>Collaboration Features</li>
                        <li>Design Process</li>
                        <li>FigJam</li>
                    </ul>
                </div>

                {/* Resources Section */}
                <div className="resources">
                    <ul className="flex flex-col gap-2 text-center sm:text-left">
                        <li>Blog</li>
                        <li>Best Practices</li>
                        <li>Colors</li>
                        <li>Color Wheel</li>
                        <li>Support</li>
                        <li>Developers</li>
                        <li>Resource library</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
