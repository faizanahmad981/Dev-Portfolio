'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import secondLogo from "@/assets/images/second-logo.png"
export default function Footer() {
  return (
    <footer id="contact" className="mt-5 py-10 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <Image 
            src={secondLogo}
            alt="Logo"
            width={360} 
            height={100} 
            className="mx-auto"
          />
        </div>
        <h5 className="text-lg font-semibold mb-4">Follow Me</h5>
        <ul className="flex justify-center space-x-6">
          <li>
            <Link href="https://www.facebook.com/faizanAhmedTanoli4" target="_blank">
              <FaFacebook className="text-2xl text-gray-600 hover:text-blue-500 transition" />
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/faizan-ahmed-tanoli-639866205/" target="_blank">
              <FaLinkedin className="text-2xl text-gray-600 hover:text-blue-600 transition" />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/faizanahmad981" target="_blank">
              <FaGithub className="text-2xl text-gray-600 hover:text-gray-900 transition" />
            </Link>
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-6">&copy; {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
