import React from 'react'
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-black">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 flex justify-evenly bg-[#ffffff19] py-7">
        <div className='icons flex gap-3'>
        <Instagram />
        <Facebook />
        <Twitter />
        <Youtube/>
        <Linkedin/>

        </div>
        <div className='ui '>
            <ul className='flex flex-col gap-2'>
                <li>Ui Designing </li>
                <li>UX Designing</li>
                <li>Wireframing</li>
                <li>Diagramming</li>
                <li>BrainStorming</li>
                <li>Online Whiteboard</li>
                <li>Team Collaboration</li>
            </ul>
        </div>
        <div className='explore'>
        <ul className='flex flex-col gap-2'>
                <li> Designing </li>
                <li>Prototyping</li>
                <li>Development Features</li>
                <li>Design Systems</li>
                <li>Collaboration Features</li>
                <li>Design Process</li>
                <li>FigJam</li>
            </ul>
        </div>
        <div className='resources'>
        <ul className='flex flex-col gap-2'>
                <li>Blog</li>
                <li>Best Practises</li>
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
  };
    
